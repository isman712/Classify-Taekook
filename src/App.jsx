import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import NotFound from "./page/NotFound";
import Inicio from "./page/Inicio";
import Login from "./components/Login";
import Dash from "./page/dash";
import Lista from "./page/List";

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  
  const [modal7, setModal7] = useState("modal-close");
  return (
    
    <Router>
      <Login modal7={modal7} setModal7={setModal7}></Login>
      <Navbar setModal7={setModal7}></Navbar>
      <Routes>
        <Route path="/" element={<Inicio setModal7={setModal7}/>} />
        <Route path="/panel/" element={<Dash />} />
        <Route path="/panel/:folderId/" element={<Dash />} />
        <Route path="/panel/:folderId/:listaID" element={<Lista />} />
      </Routes>
    </Router>
  );
}

export default App;
