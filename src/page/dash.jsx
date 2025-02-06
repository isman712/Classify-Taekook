import React, { useEffect, useState } from "react";
import { useData } from "../context/FolderListProvider";
import { useUser } from "../context/UserContext";
import Menu from "./components/Menu";
import AddFolderList from "./components/addFolder";
import { useParams, Link } from "react-router-dom";

function Dash() {
  const { user } = useUser();
  const { folderId } = useParams();
  const { folders, lists, fetchData, loading } = useData();
  const [filteredFolders, setFilteredFolders] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);
  const [foldersID, setFoldersID] = useState(folderId || null);

  useEffect(() => {
    console.log("useEffect - Verificando folderId y user...");
    if (folderId !== undefined) {
      setFoldersID(folderId);
    } else if (user?.details?.default_folder_id) {
      setFoldersID(user.details.default_folder_id);
    }
  }, [folderId, user]);

  useEffect(() => {
    console.log(
      "useEffect - Filtrando carpetas y listas según folderId y user..."
    );

    if (folders && lists) {
      // Filtramos las carpetas y listas según el folderId
      const filteredFolders = folders.filter(
        (folder) => folder.parent_id === foldersID
      );
      const filteredLists = lists.filter(
        (list) => list.folder_id === foldersID
      );
      setFilteredFolders(filteredFolders);
      setFilteredLists(filteredLists);
    }
  }, [folders, lists, foldersID]);

  useEffect(() => {
    // Solo recargamos los datos si no están disponibles
    if (!folders.length || !lists.length) {
      fetchData();
    }
  }, [folders, lists, fetchData]);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <dialog id="my_modal_1" className="modal bg-base-300" open>
        <div className="modal-box">
          <h3 className="font-bold text-lg">No! No!</h3>
          <p className="py-4">
            Solo puedes acceder aquí desde la app movil o una vista de PC
          </p>
          <Link to="/" className="btn btn-primary w-full">
            Ir al inicio
          </Link>
          <div className="modal-action"></div>
        </div>
      </dialog>
    );
  }
  return (
    <div className="flex h-full">
      <Menu />
      <div className="ContenidoDash w-full p-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Listas / Carpetas</h1>
          <AddFolderList parentID={foldersID} />
        </div>

        <ul className="flex gap-4 flex-col mt-6">
          {filteredFolders.map((folder) => (
            <div
              className="card bg-base-200 "
              style={{ width: "70%" }}
              key={folder.id}
            >
              <div className="card-body flex flex-row">
                <div
                  className="card bg-base-300 p-6 w-auto mr-4"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-folder-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
                  </svg>
                </div>
                <div
                  className="flex items-center justify-between"
                  style={{ width: "90%" }}
                >
                  <h1 className="text-2xl font-bold"> {folder.name}</h1>
                  <Link
                    to={`/panel/${folder.id}`}
                    className="btn btn-primary w-60"
                  >
                    Ir a la carpeta
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <ul className="flex gap-4 flex-col mt-6">
          {filteredLists.map((list) => (
            <div
              className="card bg-base-200 "
              style={{ width: "70%" }}
              key={list.id}
            >
              <div className="card-body flex flex-row">
                <div
                  className="card bg-base-300 p-6 w-auto mr-4"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-file-earmark-ruled-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1H6v2h7v1H6v2H5v-2H3v-1h2v-2H3z" />
                  </svg>
                </div>
                <div
                  className="flex items-center justify-between"
                  style={{ width: "90%" }}
                >
                  <h1 className="text-2xl font-bold"> {list.name}</h1>
                  <Link
                    to={`/panel/${folderId}/${list.id}`}
                    className="btn btn-secondary w-60"
                  >
                    Ir a la lista
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dash;
