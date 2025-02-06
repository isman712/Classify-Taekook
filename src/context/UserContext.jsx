import React, { createContext, useContext, useState, useEffect } from "react";
import { useSupabase } from "./SupabaseContext";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const supabase = useSupabase();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        if (isMounted) setUser(null);
        setLoading(false);
        return;
      }

      const baseUser = data?.user || null;

      if (baseUser && baseUser.id) {
        const fullUser = await manageUserDetails(baseUser);
        if (isMounted) {
          setUser(fullUser);
          subscribeToUserDetails(baseUser.id);
        }
      } else {
        if (isMounted) setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      if (isMounted) setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const manageUserDetails = async (baseUser) => {
    try {
      const { data, error } = await supabase
        .from("user_details")
        .select("*")
        .eq("user_id", baseUser.id)
        .maybeSingle();

      if (error && error.code !== "PGRST116") {
        console.error("Error fetching user details:", error);
        return baseUser;
      }

      if (data) {
        return { ...baseUser, details: data };
      } else {
        const { data: insertData, error: insertError } = await supabase
          .from("user_details")
          .insert([{ user_id: baseUser.id }])
          .select("*")
          .single();

        if (insertError) {
          console.error("Error inserting user details:", insertError);
          return baseUser;
        }

        return { ...baseUser, details: insertData };
      }
    } catch (error) {
      console.error("Error handling user details:", error);
      return baseUser;
    }
  };

  const handleAuthChange = async (event, session) => {
    const newUser = session?.user || null;
    if (newUser) {
      const fullUser = await manageUserDetails(newUser);
      if (isMounted) {
        setUser(fullUser);
        subscribeToUserDetails(newUser.id);
      }
    } else {
      if (isMounted) setUser(null);
    }
  };

  const subscribeToUserDetails = (userId) => {
    const channel = supabase
      .channel("user-details-updates")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "user_details",
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          if (isMounted) {
            setUser((prevUser) => ({
              ...prevUser,
              details: payload.new,
            }));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  useEffect(() => {
    setIsMounted(true);
    fetchUser();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
      }
    );

    return () => {
      setIsMounted(false);
      subscription?.unsubscribe?.();
    };
  }, [supabase]);

  return (
    <UserContext.Provider value={{ user, loading, fetchUser, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};
