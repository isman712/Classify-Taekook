import NewFolderModal from "../components/NewModal";
import FolderPage from "./FolderPage";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css";
import React, { useEffect, useState, useRef } from "react";
import { HyperFormula } from 'hyperformula';
import Noti from "../util/Noti";
//import frFR from 'hyperformula/i18n/languages/esES';

registerAllModules();
registerLanguageDictionary(esMX);
//HyperFormula.getLanguage('esES', frFR);
function Dash() {
    const [usuarios, setUsuarios] = useState([]);

    const hotTableComponent = useRef(null);
    useEffect(() => {
        function getData() {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsuarios(data));
        }
    
        getData();
      }, []);
      const descargarArchivo = () => {
        const pluginDescarga =
          hotTableComponent.current.hotInstance.getPlugin("exportFile");
    
        pluginDescarga.downloadFile("csv", {
          filename: "usuarios",
          fileExtension: "csv",
          mimeType: "text/csv",
          columnHeaders: true,
        });
      };
    return ( <div>
        Dash
        {usuarios && (
        <HotTable
          ref={hotTableComponent}
          language={esMX.languageCode}
          data={usuarios}
          licenseKey="non-commercial-and-evaluation"
          colHeaders={true}
          rowHeaders={true}
          columnSorting={true}
          mergeCells={true}
          contextMenu={true}
          formulas={{
            engine: HyperFormula,
            sheetName: 'Sheet1',
            
          }}
          readOnly={false}
        >
          <HotColumn data="id" readOnly={true} />
          <HotColumn data="name" title="Nombre" />
          <HotColumn data="username" title="Usuario" />
          <HotColumn data="email" />
          <HotColumn data="address.street" />
          <HotColumn data="address.city" />
        </HotTable>
      )}
        <FolderPage></FolderPage>
    </div> );
}

export default Dash;


<div className="skeleton h-full w-60 "></div>
