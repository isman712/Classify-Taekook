import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

function Inicio({setModal7}) {
  const { user } = useUser()

  return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md w-full">
          <h1 className="text-5xl font-bold  text-color-base-100 " style={{textShadow: '0px 0px 30px #ffff'}}>Classify <span style={{color: '#37F2B9', textShadow: '0px 0px 30px #37F2B9'}}>Taekook</span></h1>
          <p className="py-6">
          Crea listas de estudiantes, registra notas y utiliza herramientas avanzadas de hoja de cálculo.
          </p>
            <div className="flex gap-3 items-center justify-center">
            {user ? (
         <div>
          <Link to={"/panel/" + user?.details?.default_folder_id} className="btn btn-primary">Ver listas</Link>
        
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
            <button className="btn btn-secondary ">Documentación</button>
            </div>
        </div>
      </div>
    </div>


    <div>
    <div class="features">
            <div class="feature">
                <h3>Listas Personalizadas</h3>
                <p>Organiza estudiantes en listas por clases, grupos o secciones.</p>
            </div>
            <div class="feature">
                <h3>Registro de Notas</h3>
                <p>Guarda y gestiona calificaciones fácilmente con una interfaz intuitiva.</p>
            </div>
            <div class="feature">
                <h3>Hoja de Cálculo Avanzada</h3>
                <p>Utiliza copiado, pegado, fórmulas y mucho más.</p>
            </div>
            <div class="feature">
                <h3>Sistema de Carpetas</h3>
                <p>Clasifica tus listas en carpetas para una mejor organización.</p>
            </div>
        </div>
    </div>
      </div>
  );
}

export default Inicio;
