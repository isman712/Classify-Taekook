import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import NotFound from "./page/NotFound";
import Inicio from "./page/Inicio";
import Login from "./components/Login";
import Dash from "./page/dash";
import Lista from "./page/List";
import Footer from "./components/Footer";
import ProtectedRoute from "./util/ProtectedRoute";
import ListaEstudiantes from "./page/ListEstudiante";
import Docs from "./page/Docs";

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
        <Route path="/" element={<Inicio setModal7={setModal7} />} />
        <Route path="/docs" element={<Docs />} />
        <Route
          path="/panel/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="/" element={<Dash />} />
                <Route path=":folderId/" element={<Dash />} />
                <Route path=":folderId/:listaID" element={<Lista />} />
                <Route path=":listaID/nota" element={<ListaEstudiantes />} />
              </Routes>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
