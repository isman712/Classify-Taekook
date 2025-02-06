import React, { useEffect, useState, useRef } from "react";
import Menu from "./components/Menu";
import { useParams, Link, data } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useSupabase } from "../context/SupabaseContext";

import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css";
import { HyperFormula } from "hyperformula";
import Noti from "../util/Noti";

registerAllModules();
registerLanguageDictionary(esMX);
//    {name: 'Derek Ismael Palacios Tandazo', nota1: '10', nota2: '10', nota3: '10', promedio: '=AVERAGE(B1:D1)*0.70'},
function Lista() {
  const { folderId } = useParams();
  const { listaID } = useParams();
  const [foldersID, setFoldersID] = useState(folderId || null);
  const [listaIDD, setlistaIDD] = useState(listaID || null);
  const [TuMami, SetTuMami] = useState(false);
  const [folderName, setFolderName] = useState("");
  const hotTableComponent = useRef(null);
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = useSupabase();
  const [listName, setListName] = useState("");
  const [idList, setidList] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("listas_notas")
        .select("name, datos, id")

        .eq("list_id", listaID)
        .single();

      if (error) {
        console.error("Error al obtener los datos:", error);
        Noti("error", "Error", "No se pudieron cargar los datos.", false);
      } else {
        setDatos(data?.datos || null);
        setListName(data?.name);
        setidList(data?.id);
      }
      setLoading(false);
    };

    fetchData();
  }, [listaID]);

  async function insertData2(data) {
    const relacionesEstudiantes = [];

    for (const item of data) {
      const { cedula } = item;

      if (cedula && cedula.trim() !== "") {
        relacionesEstudiantes.push({
          cedula: cedula,
          lista_id: idList,
        });
      }
    }

    if (relacionesEstudiantes.length > 0) {
      const { error: relationError } = await supabase
        .from("estudiantes_listas")
        .upsert(relacionesEstudiantes, { onConflict: ["cedula", "lista_id"] });

      if (relationError) {
        console.error(
          "Error al insertar relaciones entre estudiantes y lista:",
          relationError
        );
        Noti(
          "error",
          "Error",
          "No se pudo agregar estudiantes a la lista.",
          false
        );
      } else {


        console.log("Relaciones de estudiantes insertadas con éxito.");
      }
    }

    const { data: insertedData, error } = await supabase
      .from("listas_notas")
      .upsert([{ list_id: listaID, datos: data }], {
        onConflict: ["list_id"],
      });

    if (error) {
      console.error("Error al insertar datos:", error);
      Noti("error", "Error", "No se pudieron guardar los datos.", false);
    } else {
      console.log("Datos insertados con éxito:", insertedData);
      Noti("success", "Éxito", "Datos guardados correctamente.", true);
    }
  }
  console.log(datos);

  return (
    <div className="flex h-full">
      <Menu foldersID={foldersID} TuMami={TuMami} SetTuMami={SetTuMami} />
      <div className="ContenidoDash w-full p-5">
        <div className="w-full items-center">
          <div className="flex w-full items-center justify-start mb-10">
            <h1 className="text-2xl font-bold">Lista - {listName}</h1>
            <button
              className="btn btn-primary ml-6"
              onClick={() => {
                console.log(hotTableComponent.current.props.data);
                insertData2(hotTableComponent.current.props.data);
              }}
            >
              Guardar
            </button>
          </div>
          <HotTable
            ref={hotTableComponent}
            language={esMX.languageCode}
            data={datos}
            licenseKey="non-commercial-and-evaluation"
            colHeaders={true}
            rowHeaders={true}
            columnSorting={true}
            mergeCells={true}
            contextMenu={["clear_column", "cut", "copy", "undo", "redo"]}
            formulas={{
              engine: HyperFormula,
              sheetName: "Sheet1",
            }}
            readOnly={false}
          >
            <HotColumn data="name" title="Estudiante" />
            <HotColumn data="cedula" title="Cedula" />
            {[..."CDEFGHIJKLMNOPQRSTUVWXYZ"].map((col) => (
              <HotColumn key={col} data={col} title={col} />
            ))}
          </HotTable>
        </div>
      </div>
    </div>
  );
}

export default Lista;
