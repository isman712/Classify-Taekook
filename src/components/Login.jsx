import { useState, useEffect } from "react";

import { useSupabase } from "../context/SupabaseContext";
import Noti from "../util/Noti";

function Login({ modal7, setModal7 }) {
  
    const supabase = useSupabase()
    const [log, setLog] = useState("login");

    
  function LoginRegis() {
    const [alerOn, setAlerOn] = useState(false);
    const [dis, setDis] = useState("");

    const [err4, setErr4] = useState("");
    const [err5, setErr5] = useState("");

    const [err1, setErr1] = useState("");
    const [err2, setErr2] = useState("");
    const [err3, setErr3] = useState("");
    const [err8, setErr8] = useState("");
    const [correoil, setCorreoil] = useState("");
    const [contrail, setContrail] = useState("");

    const [name, setName] = useState("");
    const [cedula, setCedula] = useState("");
    const [correoir, setCorreoir] = useState("");
    const [contrair, setContrair] = useState("");

    const correoIL = (e) => {
      setCorreoil(e.target.value);
    };
    const contaIL = (e) => {
      setContrail(e.target.value);
    };

    const nameIR = (e) => {
      setName(e.target.value);
    };
    const correoIR = (e) => {
      setCorreoir(e.target.value);
    };
    const contraIR = (e) => {
      setContrair(e.target.value);
    };
    const cedulaE = (e) => {
        setCedula(e.target.value);
      };

    async function loginFecht() {
      if (correoil.length < 3) {
        setErr4("Debes colocar un correo!");
        setTimeout(() => {
          setErr4("");
        }, 2500);
        return;
      }

      if (contrail.length < 3) {
        setErr5("Debes colocar una contraseña!");
        setTimeout(() => {
          setErr5("");
        }, 2500);
        return;
      }

      let { data, error } = await supabase.auth.signInWithPassword({
        email: correoil,
        password: contrail,
      });
      if (error) {
        if (error.message == "Email not confirmed") {
          setErr4("Debes verificar el correo!");
          setTimeout(() => {
            setErr4("");
          }, 2500);
          return;
        }
        if (error.message == "Invalid login credentials") {
          setErr4("Error! credenciales invalidas");
          setTimeout(() => {
            setErr4("");
          }, 2500);
          return;
        }
      }
      if (!(data.user == null)) {
        setModal7("modal-close");
      }
    }

    async function RegisterFecht() {
        if (cedula.length < 3) {
            setErr8("Debes colocar un N° cedula!");
            setTimeout(() => {
              setErr8("");
            }, 2500);
            return;
          }
      if (name.length < 3) {
        setErr1("Debes colocar un nombre!");
        setTimeout(() => {
          setErr1("");
        }, 2500);
        return;
      }
      if (correoir.length < 3) {
        setErr2("Debes colocar un correo!");
        setTimeout(() => {
          setErr2("");
        }, 2500);
        return;
      }
      if (contrair.length < 3) {
        setErr3("Debes colocar una contraseña!");
        setTimeout(() => {
          setErr3("");
        }, 2500);
        return;
      }

      let { data, error } = await supabase.auth.signUp({
        email: correoir,
        password: contrair,
      });

      //     setErr1('Listo! Verifica tu correo electron')
      setAlerOn(true);
      setDis("btn-disabled");
      const dat = data.user;
      if (dat) {
        // Primero, insertar los detalles del usuario
        const { data: userDetails, error: userError } = await supabase
          .from("user_details")
          .insert([
            {
              name: name,
              user_id: dat.id,
              cedula: cedula,
              avatar:
                "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
            },
          ]);
      
        if (userError) {
          console.error('Error registrando los detalles del usuario:', userError);
          Noti("error", "Vaya...", "Hubo un error registrando los detalles del usuario", false);
          return;
        }
      
        const { data: defaultFolder, error: folderError } = await supabase
          .from('folders')
          .insert([
            {
              name: 'Default Folder',
              user_id: dat.id, 
              parent_id: null, 
            }
          ])
          .select('*');
      
        if (folderError) {
          console.error('Error creando la carpeta por defecto:', folderError);
          Noti("error", "Vaya...", "Hubo un error registrando los detalles del usuario", false);
          return;
        }
      console.log(defaultFolder[0]?.id)
        const { data: updateUser, error: updateError } = await supabase
          .from('user_details')
          .update({ default_folder_id: defaultFolder[0]?.id })
          .eq('user_id', dat.id);
      
        if (updateError) {
          console.error('Error actualizando el usuario con la carpeta por defecto:', updateError);
          Noti("error", "Vaya...", "Hubo un error registrando los detalles del usuario", false);
        } else {
          console.log('Usuario registrado y carpeta por defecto creada con éxito');
        }
      }
    }

    if (log == "login") {
      return (
        <>
          <label>
            <div className="label">
              <span className="label-text"></span>
            </div>

            <label className="floating-label">
              <span className="labelInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  {" "}
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />{" "}
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />{" "}
                </svg>
                Correo
              </span>

              <input
                type="text"
                placeholder="Correo"
                onChange={correoIL}
                className="input input-md w-full"
              />
            </label>

            <div className="label">
              <span className="label-text-alt text-error">{err4}</span>
            </div>
          </label>

          <label>
            <div className="label">
              <span className="label-text"></span>
            </div>

            <label className="floating-label">
              <span className="labelInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />{" "}
                </svg>
                Contraseña
              </span>

              <input
                type="password"
                placeholder="Contraseña"
                onChange={contaIL}
                className="input input-md w-full"
              />
            </label>

            <div className="label">
              <span className="label-text-alt text-error">{err5}</span>
            </div>
          </label>

          <button
            className="btn bg-primary w-full BTNMODALLOGIN"
            onClick={loginFecht}
          >
            Login
          </button>
        </>
      );
    } else {
      return (
        <>
          {alerOn && (
            <div role="alert" className="alert alert-success new-alert-op" style={{marginTop: '16px'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />{" "}
              </svg>
              <span>Se enviará un correo electrónico de verificación</span>
            </div>
          )}
   <label>
            <div className="label">
              <span className="label-text"></span>
            </div>
<label className="floating-label">
              <span className="labelInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  {" "}
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />{" "}
                </svg>
                N° de cedula
              </span>

              <input
                type="number"
                placeholder="N° de cedula"
                onChange={cedulaE}
                className="input input-md w-full"
              />
            </label>

            <div className="label">
              <span className="label-text-alt text-error">{err8}</span>
            </div>
          </label>
          <label>
            <div className="label">
              <span className="label-text"></span>
            </div>

            <label className="floating-label">
              <span className="labelInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  {" "}
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />{" "}
                </svg>
                Nombre de usuario
              </span>

              <input
                type="text"
                placeholder="Nombre de usuario"
                onChange={nameIR}
                className="input input-md w-full"
              />
            </label>

            <div className="label">
              <span className="label-text-alt text-error">{err1}</span>
            </div>
          </label>

          <label>
            <div className="label">
              <span className="label-text"></span>
            </div>

            <label className="floating-label">
              <span className="labelInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  {" "}
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />{" "}
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />{" "}
                </svg>
                Correo electrónico
              </span>

              <input
                type="text"
                placeholder="Correo"
                onChange={correoIR}
                className="input input-md w-full"
              />
            </label>
            <div className="label">
              <span className="label-text-alt text-error">{err2}</span>
            </div>
          </label>

          <label>
            <div className="label">
              <span className="label-text"></span>
            </div>

            <label className="floating-label">
              <span className="labelInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />{" "}
                </svg>
                Contraseña
              </span>

              <input
                type="password"
                placeholder="Contraseña"
                onChange={contraIR}
                className="input input-md w-full"
              />
            </label>
            <div className="label">
              <span className="label-text-alt text-error">{err3}</span>
            </div>
          </label>

          <button
            className={"btn bg-primary w-full BTNMODALLOGIN" + dis}
            onClick={RegisterFecht}
          >
            Registrarte
          </button>
        </>
      );
    }
  }

  return (
    <>
      <div className={"modal " + modal7} role="dialog">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              onClick={() => {
                setModal7("modal-close");
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg base-100 text-base-100">.</h3>
          <div className="join grid grid-cols-2">
            <input
              className="join-item btn btn-outline"
              type="radio"
              name="options"
              aria-label="Iniciar sesion"
              defaultChecked
              onClick={() => {
                setLog("login");
              }}
            />
            <input
              className="join-item btn btn-outline"
              type="radio"
              name="options"
              aria-label="Registrarse"
              onClick={() => {
                setLog("register");
              }}
            />
          </div>
          <div>
          <LoginRegis />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
}

export default Login;
