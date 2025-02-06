import React, { createContext, useContext, useEffect, useState } from "react";
import { useSupabase } from "./SupabaseContext.jsx";
import { useUser } from "./UserContext.jsx";

const DataContext = createContext();

export function DataProvider({ children }) {
  const { user } = useUser();
  const supabase = useSupabase();
  const [folders, setFolders] = useState([]);
  const [lists, setLists] = useState([]);
  const [datAff, setdataAff] = useState([]);
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

  const obtenerListasPorCedula = async () => {
    const cedula = user?.details?.cedula;
    const cedulaNumerica = "0" + cedula;
    try {
      const { data, error } = await supabase
        .from("estudiantes_listas")
        .select("lista_id, listas_notas(id, name, datos)")

        .eq("cedula", cedulaNumerica);

      const usuarioDatos = data.map((lista) => {
        const datosUsuario = lista.listas_notas.datos.filter(
          (dato) => dato.cedula === cedulaNumerica
        );
        return {
          lista_id: lista.listas_notas.id,
          datos_usuario: datosUsuario,
          name: lista.listas_notas.name,
        };
      });

      console.log(usuarioDatos);
      setdataAff(usuarioDatos || []);
    } catch (error) {
      console.error("Error obteniendo listas por cédula:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
    obtenerListasPorCedula();
  }, [user]);

  return (
    <DataContext.Provider
      value={{
        folders,
        lists,
        fetchData,
        loading,
        obtenerListasPorCedula,
        datAff,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
