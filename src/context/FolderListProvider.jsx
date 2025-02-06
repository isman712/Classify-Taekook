import React, { createContext, useContext, useEffect, useState } from "react";
import { useSupabase } from "./SupabaseContext.jsx";
import { useUser } from "./UserContext.jsx";

const DataContext = createContext();

export function DataProvider({ children }) {
  const { user } = useUser();
  const supabase = useSupabase();
  const [folders, setFolders] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    if (!user) return;
    setLoading(true);

    try {
      const { data: foldersData, error: foldersError } = await supabase
        .from("folders")
        .select("*")
        .eq("user_id", user.id);

      if (foldersError) throw foldersError;

      const { data: listsData, error: listsError } = await supabase
        .from("lists")
        .select("*")
        .eq("user_id", user.id);

      if (listsError) throw listsError;

      setFolders(foldersData || []);
      setLists(listsData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <DataContext.Provider value={{ folders, lists, fetchData, loading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
