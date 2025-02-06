import Footer from "../components/Footer";

function Docs() {
  return (
    <>
      <section className="hadow-sm bg-base-200" style={{ textAlign: "center" }}>
        <h1
          className="text-3xl font-bold  text-color-base-100 mt-10"
          style={{ textShadow: "0px 0px 30px #ffff" }}
        >
          Documentación 🚀
        </h1>
        <p className="py-6 mb-10">
          Bienvenido a la documentación de Classify{" "}
          <span
            style={{ color: "#37F2B9", textShadow: "0px 0px 30px #37F2B9" }}
          >
            Taekook Taekook
          </span>
          🎓, la herramienta web diseñada para facilitar la gestión académica a
          través de hojas de cálculo avanzadas y un sistema intuitivo de
          organización.
        </p>
      </section>

      <section className="hadow-sm bg-base-200 mb-20">
        <h2 className="text-primary text-2xl font-bold">Índice 📚</h2>

        <ul className="menu bg-base-200 rounded-box">
          <li>
            <a href="#introduccion">1.) Introducción 🎉</a>
          </li>
          <li>
            <a href="#caracteristicas-principales">
              2.) Características Principales 🚀
            </a>
          </li>
          <li>
            <a href="#flujo-de-uso-y-navegacion">
              3.) Flujo de Uso y Navegación 🧭
            </a>
            <ul>
              <li>
                <a href="#autenticacion-y-registro">
                  ° Autenticación y Registro 🔑
                </a>
              </li>
              <li>
                <a href="#acceso-al-panel-de-usuario">
                  ° Acceso al Panel de Usuario 🖥️
                </a>
              </li>
              <li>
                <a href="#gestion-de-carpetas-y-listas">
                  ° Gestión de Carpetas y Listas 📁
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#uso-de-las-listas">
              4.) Uso de las Listas (Hojas de Cálculo) 📊
            </a>
            <ul>
              <li>
                <a href="#estructura-de-la-hoja-de-calculo">
                  ° Estructura de la Hoja de Cálculo 📝
                </a>
              </li>
              <li>
                <a href="#formularios-y-operadores">
                  ° Fórmulas y Operadores 🧮
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#personalizacion-de-la-interfaz">
              5.) Personalización de la Interfaz 🎨
            </a>
          </li>
          <li>
            <a href="#acceso-diferenciado">
              6.) Acceso Diferenciado para Estudiantes y Profesores 👥
            </a>
          </li>
          <li>
            <a href="#compatibilidad-y-limitaciones">
              7.) Compatibilidad y Limitaciones Actuales ⚠️
            </a>
          </li>
          <li>
            <a href="#futuras-mejoras">8.) Futuras Mejoras y Desarrollo 🚧</a>
          </li>
          <li>
            <a href="#conclusion">9.) Conclusión 🎉</a>
          </li>
        </ul>
      </section>

      {/* Introducción */}
      <section
        id="introduccion"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">Introducción ✨</h2>
        <p className="mt-4">
          <p style={{ color: "#37F2B9" }}>Classify Taekook</p> es una
          herramienta web innovadora que combina la flexibilidad de una hoja de
          cálculo avanzada con un sistema intuitivo de gestión académica. La
          plataforma permite:
        </p>
        <ul className="list-disc ml-6 mt-4">
          <li>Crear listas de estudiantes 👩‍🎓👨‍🎓</li>
          <li>Registrar notas 📋</li>
          <li>Aplicar fórmulas personalizadas ➕➖✖️➗</li>
          <li>Organizar información en carpetas temáticas 📂</li>
        </ul>
        <p className="mt-4">
          Esta solución busca mejorar la comunicación entre estudiantes y
          profesores, permitiendo que los primeros estén siempre al tanto de sus
          calificaciones 📈.
        </p>
      </section>

      {/* Características Principales */}
      <section
        id="caracteristicas-principales"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">
          Características Principales 🚀
        </h2>
        <ul className="list-disc ml-6 mt-4">
          <li>
            <p className="text-secondary ">📝 Hojas de Cálculo Inteligentes</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Copia y pega celdas 📄</li>
              <li>Arrastra datos 📊</li>
              <li>Utiliza fórmulas avanzadas 🧮</li>
            </ul>
          </li>
          <li className="mt-4">
            <p className="text-secondary ">🗂️ Sistema de Carpetas Jerárquico</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Organiza las clases de manera eficiente</li>
              <li>Accede desde cualquier dispositivo 💻📱</li>
            </ul>
          </li>
          <li className="mt-4">
            <p className="text-secondary ">
              🎓 Gestión de Estudiantes Simplificada
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Importación de listas desde Excel (en desarrollo) 📥</li>
              <li>Creación de grupos de estudiantes 👥</li>
            </ul>
          </li>
          <li className="mt-4">
            <p className="text-secondary ">
              🔒 Seguridad y Colaboración (en desarrollo)
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Compartición de carpetas con otros profesores 🤝</li>
              <li>Historial de cambios 🕒</li>
            </ul>
          </li>
          <li className="mt-4">
            <p className="text-secondary ">
              📊 Reportes Profesionales (en desarrollo)
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Generación de boletines y gráficos 📈</li>
              <li>Exportación de datos a PDF o Excel 📤</li>
            </ul>
          </li>
          <li className="mt-4">
            <p className="text-secondary ">☁️ Interfaz 100% en la nube</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Acceso desde computadora, tableta o móvil 🌐</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Flujo de Uso y Navegación */}
      <section
        id="flujo-de-uso-y-navegacion"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">
          Flujo de Uso y Navegación 🧭
        </h2>

        {/* Autenticación y Registro */}
        <section id="autenticacion-y-registro" className="mt-6 bg-base-300">
          <h3 className=" font-bold text-primary">
            Autenticación y Registro 🔑
          </h3>
          <p className="mt-4">
            <p className="text-secondary ">Navbar:</p> En todo el sitio web, el
            Navbar incluye un botón para Iniciar Sesión.
          </p>
          <p className="mt-4">
            <p className="text-secondary ">Modal de Autenticación:</p> Al hacer
            clic en el botón, se despliega un modal con dos pestañas:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <p className="text-secondary ">Iniciar Sesión:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <p className="text-secondary ">Inputs:</p> Correo 📧 y
                  Contraseña 🔒
                </li>
                <li>Botón para iniciar sesión ▶️</li>
              </ul>
            </li>
            <li className="mt-2">
              <p className="text-secondary ">Registrarse:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <p className="text-secondary ">Inputs:</p> Nombre 📝, Cédula
                  🆔, Correo 📧 y Contraseña 🔒
                </li>
                <li>Botón para registrarse 🆕</li>
                <li>
                  <p className="text-secondary ">Importante:</p> No hay opción
                  para recuperar contraseña por el momento.
                </li>
                <li>
                  Tras registrarte, deberás verificar tu correo electrónico. Al
                  hacer clic en el enlace de verificación, se iniciará sesión
                  automáticamente ✅.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Acceso al Panel de Usuario */}
        <section id="acceso-al-panel-de-usuario" className="mt-6 bg-base-300">
          <h3 className="text-xl font-bold text-primary">
            Acceso al Panel de Usuario 🖥️
          </h3>
          <ul className="list-disc ml-6 mt-4">
            <li>Se oculta el botón de Login.</li>
            <li>
              Se muestran dos nuevos elementos en el Navbar:
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <p className="text-secondary ">Botón para el Panel:</p>{" "}
                  Redirige a <code>/panel/{"{id}"}</code> de la carpeta por
                  defecto 📂.
                </li>
                <li>
                  <p className="text-secondary ">Avatar del Usuario:</p> Al
                  hacer clic, despliega un menú con la opción para Cerrar Sesión
                  🚪.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              <p className="text-secondary ">Nota:</p> Opciones como perfil y
              ajustes están deshabilitadas por el momento ⚙️.
            </li>
          </ul>
        </section>

        {/* Gestión de Carpetas y Listas */}
        <section id="gestion-de-carpetas-y-listas" className="mt-6 bg-base-300">
          <h3 className="text-xl font-bold text-primary">
            Gestión de Carpetas y Listas 📁
          </h3>
          <p className="mt-4">
            <p className="text-secondary ">Ver Listas:</p> En la vista principal
            (<code>/panel/{"{id}"}</code>), al hacer clic en el botón Ver Listas
            verás:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <p className="text-secondary ">Dos botones:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Crear Carpeta 📂</li>
                <li>Crear Lista 📋</li>
              </ul>
            </li>
            <li className="mt-2">
              <p className="text-secondary ">Menú lateral:</p> Muestra las
              carpetas organizadas en una jerarquía 📑.
            </li>
          </ul>
          <p className="mt-4">
            Al entrar en una carpeta, la URL cambiará a{" "}
            <code>/panel/{"{id_carpeta}"}</code>. Se mostrará la misma
            estructura: botones para crear nuevas carpetas/listas, menú lateral
            y visualización de elementos contenidos.
          </p>
          <p className="mt-4">
            Al hacer clic en una lista, se accede a la URL{" "}
            <code>/panel/{"{id_carpeta}/{id_lista}"}</code>.
          </p>
        </section>
      </section>

      {/* Uso de las Listas (Hojas de Cálculo) */}
      <section
        id="uso-de-las-listas"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">
          Uso de las Listas (Hojas de Cálculo) 📊
        </h2>

        {/* Estructura de la Hoja de Cálculo */}
        <section
          id="estructura-de-la-hoja-de-calculo"
          className="mt-6 bg-base-300"
        >
          <h3 className="text-xl font-bold text-primary">
            Estructura de la Hoja de Cálculo 📝
          </h3>
          <p className="mt-4">
            La hoja de cálculo tiene la siguiente estructura:
          </p>
          <table className="table w-full mt-4">
            <thead>
              <tr>
                <th>Columna</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Nombre del estudiante 📝</td>
              </tr>
              <tr>
                <td>B</td>
                <td>Cédula (formato: 0XXXXXXXXX) 🆔</td>
              </tr>
              <tr>
                <td>C-Z</td>
                <td>
                  Columnas adicionales de la{" "}
                  <span className="text-secondary ">C</span> hasta la{" "}
                  <span className="text-secondary ">Z</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            La hoja incluye 45 filas vacías por defecto. El encabezado muestra
            el nombre de la carpeta y un botón para{" "}
            <span className="text-secondary ">Guardar</span> los cambios 💾.
          </p>
          <p className="mt-4">
            <p className="text-secondary ">Consideraciones:</p>
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>No se puede modificar el número de filas ni columnas.</li>
            <li>
              En el campo <code>Nombre</code> se introduce el nombre del
              estudiante.
            </li>
            <li>
              En el campo <code>Cédula</code> se debe ingresar el número
              correcto de cédula, ya que este sirve de identificador para que el
              estudiante acceda a sus notas.
            </li>
          </ul>
        </section>

        {/* Uso de Fórmulas */}
        <section id="formularios-y-operadores" className="mt-6 bg-base-300">
          <h3 className="text-xl font-bold text-primary">Uso de Fórmulas 🧮</h3>
          <div className="mockup-code w-full mt-4">
            <pre>
              <code>
                {`  =SUM(B2:D2)       # Suma de celdas
    =AVERAGE(C2:F2)   # Promedio
    =B2*0.3 + C2*0.7  # Cálculo ponderado`}
              </code>
            </pre>
          </div>

          <h4 className="text-lg font-bold text-primary mt-4">
            Funciones Soportadas 📚
          </h4>
          <p className="mt-4">
            Las celdas permiten el uso de fórmulas, facilitando cálculos como:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>Suma ➕</li>
            <li>Resta ➖</li>
            <li>Multiplicación ✖️</li>
            <li>División ➗</li>
            <li>Promedio 📊</li>
            <li>Entre otras funciones básicas y avanzadas.</li>
          </ul>
          <table className="table w-full mt-4">
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Básicas</td>
                <td>
                  <code>SUM</code>, <code>AVERAGE</code>, <code>MIN</code>,{" "}
                  <code>MAX</code>
                </td>
              </tr>
              <tr>
                <td>Matemáticas</td>
                <td>
                  <code>ROUND</code>, <code>SQRT</code>, <code>POWER</code>
                </td>
              </tr>
              <tr>
                <td>Lógicas</td>
                <td>
                  <code>IF</code>, <code>AND</code>, <code>OR</code>
                </td>
              </tr>
              <tr>
                <td>Texto</td>
                <td>
                  <code>CONCATENATE</code>, <code>LEN</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">
            <p className="text-secondary ">Recursos Adicionales:</p>
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <a
                href="https://hyperformula.handsontable.com/guide/types-of-operators.html#boolean-to-int-coercion-basic-arithmetic-operations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                Tipos de Operadores en HyperFormula 🔗
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://hyperformula.handsontable.com/guide/built-in-functions.html#list-of-available-functions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                Lista de Funciones Disponibles en HyperFormula 🔗
              </a>
            </li>
          </ul>
        </section>
      </section>

      {/* Personalización de la Interfaz */}
      <section
        id="personalizacion-de-la-interfaz"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">
          Personalización de la Interfaz 🎨
        </h2>
        <ul className="list-disc ml-6 mt-4">
          <li>
            <p className="text-secondary ">Tema:</p> En el Navbar, encontrarás
            la opción <span className="text-secondary ">Tema</span>. Desde allí,
            podrás cambiar los colores y la apariencia de la aplicación según
            tus preferencias 🎭.
          </li>
        </ul>
      </section>

      {/* Acceso Diferenciado para Estudiantes y Profesores */}
      <section
        id="acceso-diferenciado"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">
          Acceso Diferenciado para Estudiantes y Profesores 👥
        </h2>
        <ul className="list-disc ml-6 mt-4">
          <li>
            <p className="text-secondary ">Estudiantes:</p> Si su número de
            cédula ha sido añadido a una lista, dicha lista se mostrará en la
            carpeta de inicio por defecto 🏠. Los estudiantes{" "}
            <span className="text-secondary ">
              no verán la hoja de cálculo completa
            </span>
            ; en su lugar, verán una tabla con{" "}
            <span className="text-secondary ">solamente sus notas</span> y no
            podrán modificarlas 🔒.
          </li>
          <li className="mt-4">
            <p className="text-secondary ">Profesores y Creadores de Listas:</p>{" "}
            Tienen acceso a las listas completas y pueden modificarlas según sea
            necesario 🛠️.
          </li>
        </ul>
      </section>

      {/* Compatibilidad y Limitaciones Actuales */}
      <section
        id="compatibilidad-y-limitaciones"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">
          Compatibilidad y Limitaciones Actuales ⚠️
        </h2>
        <ul className="list-disc ml-6 mt-4">
          <li>
            <p className="text-secondary ">Acceso desde Móviles:</p> El panel de
            usuario{" "}
            <span className="text-secondary ">
              no es accesible desde vistas móviles
            </span>
            . Las modificaciones de tablas solo se pueden realizar desde una PC
            🖥️.
          </li>
          <li className="mt-4">
            Se está desarrollando una{" "}
            <span className="text-secondary ">aplicación móvil</span>:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <p className="text-secondary ">Estudiantes:</p> Podrán ver
                únicamente sus notas 📱.
              </li>
              <li>
                <p className="text-secondary ">Profesores:</p> Podrán ver y
                modificar listas en cierta medida 🛠️.
              </li>
            </ul>
          </li>
          <li className="mt-4">
            <p className="text-secondary ">Limitaciones Actuales:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>
                Por el momento, no se pueden borrar o crear carpetas (más allá
                de la funcionalidad básica para ejemplos y fórmulas) ❌.
              </li>
              <li>
                Algunas funciones y botones se encuentran en desarrollo y
                estarán disponibles en futuras actualizaciones 🔜.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Futuras Mejoras y Desarrollo */}
      <section
        id="futuras-mejoras"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">
          Futuras Mejoras y Desarrollo 🚧
        </h2>
        <ul className="list-disc ml-6 mt-4">
          <li>Implementación de la importación de listas desde Excel 📥.</li>
          <li className="mt-2">
            Funcionalidades avanzadas de seguridad y colaboración 🔒🤝.
          </li>
          <li className="mt-2">
            Ampliación de reportes profesionales y opciones de exportación 📊.
          </li>
          <li className="mt-2">
            Integración de más opciones en el menú de usuario (perfil, ajustes,
            etc.) ⚙️.
          </li>
          <li className="mt-2">
            Optimización y ampliación de la aplicación móvil 📱.
          </li>
        </ul>
      </section>

      {/* Conclusión */}
      <section
        id="conclusion"
        className="mb-10 shadow-sm bg-base-200 p-6 rounded"
      >
        <h2 className="text-2xl font-bold text-primary">Conclusión 🎉</h2>
        <p className="mt-4">
          <p className="text-secondary ">Classify Taekook</p> es una solución
          integral para la gestión académica que optimiza la organización de
          estudiantes y sus notas mediante herramientas avanzadas de hojas de
          cálculo. Aunque algunas funcionalidades se encuentran en desarrollo,
          la plataforma ya ofrece una experiencia intuitiva y eficiente para
          mejorar la comunicación y el seguimiento académico.
        </p>
        <blockquote className="mt-4 border-l-4 border-primary pl-4 italic">
          Nota: Esta documentación se actualizará conforme se implementen nuevas
          funcionalidades y mejoras en la plataforma 🔄.
        </blockquote>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Docs;
