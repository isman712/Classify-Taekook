import React, { useEffect, useState, useRef } from "react";
import Menu from "./components/Menu";
import { useParams, Link } from "react-router-dom";

import { useData } from "../context/FolderListProvider";

function ListaEstudiantes({}) {
  const { datAff } = useData();

  const { folderId } = useParams();
  const { listaID } = useParams();

  const DatosSSS = datAff.find((e) => e.lista_id === listaID);
  const Datos = DatosSSS ? DatosSSS.datos_usuario : [];

  console.log(Datos);
  const [foldersID, setFoldersID] = useState(folderId || null);

  useEffect(() => {
    document.documentElement.classList.add("no-scroll");

    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, []);
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
      <Menu foldersID={foldersID} />
      <div className="ContenidoDash w-full p-5" style={{ overflowY: "auto" }}>
        <div className="w-full items-center mb-20">
          <div className="flex w-full items-center justify-start mb-10">
            <h1 className="text-2xl font-bold">Lista - {DatosSSS.name}</h1>
          </div>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              <thead className="bg-base-300">
                <tr>
                  <th>Estudiante</th>
                  <th>Cedula</th>
                  {[..."CDEFGHIJKLMNOPQRSTUVWXYZ"].map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-base-200">
                {Datos.map((fila, index) => (
                  <tr key={index}>
                    <td>{fila.name}</td>
                    <td>{fila.cedula}</td>
                    {[..."CDEFGHIJKLMNOPQRSTUVWXYZ"].map((col) => (
                      <td key={col}>{fila[col] || ""}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaEstudiantes;
