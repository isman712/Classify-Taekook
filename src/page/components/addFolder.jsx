import { useSupabase } from "../../context/SupabaseContext";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import Noti from "../../util/Noti";
import { useData } from "../../context/FolderListProvider";
import EstudiantesDatps from "../UsuariosSchema";

function AddFolderList({ parentID }) {
  const supabase = useSupabase();
  const { fetchData } = useData();
  const { user } = useUser();
  const [folderName, setFolderName] = useState("");
  const [listName, setListName] = useState("");

  const createFolder = async () => {
    if (!folderName.trim()) {
      return Noti(
        "error",
        "Vaya...",
        "El nombre de la carpeta no puede estar vacío",
        false
      );
    }
    try {
      const { error } = await supabase
        .from("folders")
        .insert([{ name: folderName, user_id: user.id, parent_id: parentID }]);

      if (error) {
        console.error("Error creando la carpeta:", error);
        Noti("error", "Vaya...", "Hubo un error creando la carpeta", false);
        return;
      }

      Noti("success", "¡Listo!", "Carpeta creada correctamente", true);
      fetchData();
      setFolderName("");
      document.getElementById("crear_carpeta_modal").close();
    } catch (error) {
      console.error("Error creando la carpeta:", error);
      Noti("error", "Vaya...", "Hubo un error creando la carpeta", false);
    }
  };

  const createList = async () => {
    if (!listName.trim()) {
      return Noti(
        "error",
        "Vaya...",
        "El nombre de la lista no puede estar vacío",
        false
      );
    }
    try {
      // Crear la lista
      const { data: listData, error: listError } = await supabase
        .from("lists")
        .insert([{ name: listName, user_id: user.id, folder_id: parentID }])
        .select("id")
        .single();

      if (listError) {
        console.error("Error creando la lista:", listError);
        Noti("error", "Vaya...", "Hubo un error creando la lista", false);
        return;
      }

      // Crear la columna predeterminada "Estudiantes"
      const { error: columnError } = await supabase
        .from("listas_notas")
        .insert([
          { list_id: listData.id, datos: EstudiantesDatps, name: listName },
        ]);

      if (columnError) {
        console.error("Error creando la tabla:", columnError);
        Noti(
          "error",
          "Vaya...",
          "Hubo un error creando la tabla predeterminada",
          false
        );
        return;
      }

      Noti(
        "success",
        "¡Listo!",
        "Lista y tabla predeterminada creadas correctamente",
        true
      );
      fetchData();
      setListName("");
      document.getElementById("crear_lista_modal").close();
    } catch (error) {
      console.error("Error creando la lista o tabla:", error);
      Noti("error", "Vaya...", "Hubo un error creando la lista o tabla", false);
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      <button
        className="btn btn-accent"
        onClick={() => document.getElementById("crear_lista_modal").showModal()}
      >
        Crear lista
      </button>
      <button
        className="btn btn-secondary"
        onClick={() =>
          document.getElementById("crear_carpeta_modal").showModal()
        }
      >
        Crear carpeta
      </button>

      <dialog id="crear_carpeta_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Crear carpeta</h3>
          <div className="flex flex-col gap-4 mt-7">
            <input
              type="text"
              placeholder="Nombre de la carpeta"
              className="input input-secondary w-full"
              onChange={(e) => setFolderName(e.target.value)}
              value={folderName}
            />
            <button className="btn btn-secondary" onClick={createFolder}>
              Crear carpeta
            </button>
          </div>
        </div>
      </dialog>

      <dialog id="crear_lista_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Crear lista</h3>
          <div className="flex flex-col gap-4 mt-7">
            <input
              type="text"
              placeholder="Nombre de la lista"
              className="input input-accent w-full"
              onChange={(e) => setListName(e.target.value)}
              value={listName}
            />
            <button className="btn btn-accent" onClick={createList}>
              Crear lista
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default AddFolderList;
