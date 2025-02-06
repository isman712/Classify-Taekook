import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";

function Inicio({ setModal7 }) {
  const { user } = useUser();

  return (
    <>
      <section className="hadow-sm bg-base-200" style={{ textAlign: "center" }}>
        <h1
          className="text-5xl font-bold  text-color-base-100 mt-20"
          style={{ textShadow: "0px 0px 30px #ffff" }}
        >
          Classify{" "}
          <span
            style={{ color: "#37F2B9", textShadow: "0px 0px 30px #37F2B9" }}
          >
            Taekook
          </span>
        </h1>
        <p className="py-6">
          Crea listas de estudiantes, registra notas y utiliza herramientas
          avanzadas de hoja de cálculo.
        </p>
        <div className="flex gap-3 items-center justify-center mb-20">
          {user ? (
            <div>
              <Link
                to={"/panel/" + user?.details?.default_folder_id}
                className="btn btn-primary"
              >
                Ver listas
              </Link>
            </div>
          ) : (
            <div>
              {" "}
              <button
                className="btn btn-primary"
                onClick={() => {
                  setModal7("modal-open");
                }}
              >
                Iniciar sesion
              </button>
            </div>
          )}

          <Link to="/docs" className="btn btn-secondary ">
            Documentación
          </Link>
        </div>
      </section>

      <section className="hadow-sm bg-base-200">
        <h2 className="text-primary text-2xl font-bold">
          {" "}
          📚 ¿Qué es Classify Taekook?
        </h2>
        <br />
        <p>
          Classify Taekook es una herramienta web innovadora que combina la
          flexibilidad de una hoja de cálculo avanzada con un sistema intuitivo
          de gestión académica. Crea listas de estudiantes, registra notas,
          aplica fórmulas personalizadas y organiza todo en carpetas temáticas,
          ¡todo en un solo lugar!
        </p>
      </section>
      <section className="hadow-sm bg-base-200">
        <h2 className="text-primary text-2xl font-bold">
          🚀 Características Principales
        </h2>
        <br />
        <ul>
          <li>
            <p className="text-secondary  ">
              📝 Hojas de Cálculo Inteligentes:
            </p>{" "}
            Copia y pega celdas, arrastra datos y usa fórmulas avanzadas.
          </li>{" "}
          <br />
          <li>
            <p className="text-secondary ">
              🗂️ Sistema de Carpetas Jerárquico:
            </p>{" "}
            Organiza tus clases de manera eficiente y accede desde cualquier
            dispositivo.
          </li>
          <br />
          <li>
            <p className="text-secondary">
              🎓 Gestión de Estudiantes Simplificada:
            </p>{" "}
            Importa listas desde Excel (en desarrollo) o crea grupos fácilmente.
          </li>
          <br />
          <li>
            <p className="text-secondary  ">
              🔒 Seguridad y Colaboración (en desarrollo):
            </p>{" "}
            Comparte carpetas con otros profesores y accede a historial de
            cambios.
          </li>
          <br />
          <li>
            <p className="text-secondary ">
              📊 Reportes Profesionales (en desarrollo):
            </p>{" "}
            Genera boletines, gráficos y exporta datos a PDF o Excel.
          </li>
          <br />
        </ul>
      </section>

      <section className="hadow-sm bg-base-200 mb-20">
        <h2 className="text-primary text-2xl font-bold">
          ✨ ¿Por Qué Elegir Classify Taekook?
        </h2>
        <br />
        <ul>
          <li>
            <p className="text-secondary ">💎 ¡Cero complicaciones!</p> Interfaz
            limpia y fácil de usar, incluso para los menos tecnológicos.
          </li>
          <br />
          <li>
            <p className="text-secondary ">⏰ Ahorra tiempo</p> con
            automatizaciones que eliminan el trabajo repetitivo.
          </li>
          <br />
          <li>
            <p className="text-secondary ">☁️ 100% en la nube</p> Accede desde
            tu computadora, tableta o móvil.
          </li>
          <br />
        </ul>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Inicio;
