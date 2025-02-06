import { useState } from "react";
import { Link } from "react-router-dom";

import { useUser } from "../context/UserContext";
import { useSupabase } from "../context/SupabaseContext";
function Navbar({ setModal7 }) {

    const {user} = useUser()
    const supabase = useSupabase()
    console.log(user)
    async function signOut() {
        const { error } = await supabase.auth.signOut()
      }

  return (
    <div className="navbar bg-base-300 shadow-sm navbarStick">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link>Contacto</Link>
            </li>
            <li>
              <Link>Servicios</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="/logo.png" alt="" width="60px" />
          Classify Taekook
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link>Documentación</Link>
          </li>
          <li>
            <Link>Contacto</Link>
          </li>
          <li>
            <details>
              <summary>Temas</summary>
              <ul className="p-2 bg-base-200">
                <li>
                  <a data-set-theme="dark" data-act-class="menu-active">
                    Oscuro
                  </a>
                </li>
                <li>
                  <a data-set-theme="light" data-act-class="menu-active">
                    Claro
                  </a>
                </li>
                <li>
                  <a data-set-theme="cupcake" data-act-class="menu-active">
                    Cupcake
                  </a>
                </li>
                <li>
                  <a data-set-theme="halloween" data-act-class="menu-active">
                    Halloween
                  </a>
                </li>
                <li>
                  <a data-set-theme="dracula" data-act-class="menu-active">
                    Dracula
                  </a>
                </li>
                <li>
                  <a data-set-theme="corporate" data-act-class="menu-active">
                    Corporate
                  </a>
                </li>
                <li>
                  <a data-set-theme="night" data-act-class="menu-active">
                    Night
                  </a>
                </li>
                <li>
                  <a data-set-theme="sunset" data-act-class="menu-active">
                    Sunset
                  </a>
                </li>
                <li>
                  <a data-set-theme="black" data-act-class="menu-active">
                    Black
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
         <div>
          <Link to={"/panel/" + user?.details?.default_folder_id} className="btn btn-primary me-4">Ver listas</Link>
           <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.details?.avatar} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a> {user?.details?.name}</a>
              </li>
              <li>
                <a className="justify-between">Perfil</a>
              </li>
              <li>
                <a>Ajustes</a>
              </li>
              <li>
                <a style={{ color: "red" }} onClick={signOut}>Cerrar sesion</a>
              </li>
            </ul>
            
          </div>
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
      </div>
    </div>
  );
}

export default Navbar;
