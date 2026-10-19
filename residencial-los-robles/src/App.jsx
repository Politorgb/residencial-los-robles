import { useState } from 'react'

const servicios = [
  {
    id: 1,
    titulo: 'Alumbrado público',
    descripcion:
      'Reporte de luminarias apagadas o dañadas dentro de la colonia.',
  },
  {
    id: 2,
    titulo: 'Recolección de residuos',
    descripcion:
      'Avisos relacionados con la recolección y el manejo de residuos.',
  },
  {
    id: 3,
    titulo: 'Áreas comunes',
    descripcion:
      'Solicitudes de mantenimiento, limpieza y conservación de espacios.',
  },
  {
    id: 4,
    titulo: 'Seguridad vecinal',
    descripcion:
      'Comunicación de situaciones que requieren atención comunitaria.',
  },
]

const datosIniciales = {
  nombre: '',
  correo: '',
  servicio: '',
  descripcion: '',
}

export default function App() {
  const [datos, setDatos] = useState(datosIniciales)
  const [errores, setErrores] = useState({})
  const [confirmacion, setConfirmacion] = useState('')
  const [solicitudes, setSolicitudes] = useState([])

  function manejarCambio(evento) {
    const { name, value } = evento.target

    setDatos((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }))

    setErrores((erroresAnteriores) => ({
      ...erroresAnteriores,
      [name]: '',
    }))

    setConfirmacion('')
  }

  function validarFormulario() {
    const nuevosErrores = {}

    if (!datos.nombre.trim()) {
      nuevosErrores.nombre = 'Ingresa tu nombre.'
    }

    if (!datos.correo.trim()) {
      nuevosErrores.correo = 'Ingresa tu correo electrónico.'
    } else if (!datos.correo.includes('@')) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido.'
    }

    if (!datos.servicio) {
      nuevosErrores.servicio = 'Selecciona un servicio.'
    }

    if (!datos.descripcion.trim()) {
      nuevosErrores.descripcion =
        'Describe brevemente la solicitud.'
    }

    return nuevosErrores
  }

  function manejarEnvio(evento) {
    evento.preventDefault()

    const nuevosErrores = validarFormulario()

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      setConfirmacion('')
      return
    }

    const nuevaSolicitud = {
      id: Date.now(),
      nombre: datos.nombre,
      correo: datos.correo,
      servicio: datos.servicio,
      descripcion: datos.descripcion,
      estado: 'Recibida',
    }

    setSolicitudes((solicitudesAnteriores) => [
      ...solicitudesAnteriores,
      nuevaSolicitud,
    ])

    setErrores({})
    setConfirmacion(
      `Solicitud procesada correctamente para ${datos.nombre}.`,
    )
    setDatos(datosIniciales)
  }

  return (
    <>
      <header className="encabezado" id="inicio">
        <div className="barra">
          <a className="marca" href="#inicio">
            Residencial Los Robles
          </a>

          <nav aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#solicitudes">Solicitudes</a>
            <a href="#seguimiento">Seguimiento</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        <div className="presentacion">
          <p className="etiqueta">Comunidad organizada</p>

          <h1>
            Servicios comunitarios de Residencial Los Robles
          </h1>

          <p>
            Consulta los servicios disponibles y registra una solicitud
            de atención relacionada con las áreas comunes de la colonia.
          </p>

          <a className="boton-principal" href="#solicitudes">
            Registrar una solicitud
          </a>
        </div>
      </header>

      <main>
        <section className="seccion" id="servicios">
          <div className="titulo-seccion">
            <p className="etiqueta">Servicios disponibles</p>
            <h2>¿En qué podemos ayudarte?</h2>

            <p>
              Selecciona el servicio correspondiente cuando registres
              una solicitud comunitaria.
            </p>
          </div>

          <div className="cuadricula">
            {servicios.map((servicio) => (
              <article className="tarjeta" key={servicio.id}>
                <span className="numero">
                  {String(servicio.id).padStart(2, '0')}
                </span>

                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>

                <a href="#solicitudes">
                  Solicitar atención
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="seccion seccion-formulario"
          id="solicitudes"
        >
          <div className="titulo-seccion">
            <p className="etiqueta">Atención comunitaria</p>
            <h2>Registrar una solicitud</h2>

            <p>
              Completa los campos obligatorios. Si falta información,
              la aplicación mostrará los mensajes correspondientes.
            </p>
          </div>

          <form
            className="formulario"
            onSubmit={manejarEnvio}
            noValidate
          >
            <div className="grupo-campos">
              <div className="campo">
                <label htmlFor="nombre">
                  Nombre completo
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={datos.nombre}
                  onChange={manejarCambio}
                  aria-describedby="error-nombre"
                />

                {errores.nombre && (
                  <span className="error" id="error-nombre">
                    {errores.nombre}
                  </span>
                )}
              </div>

              <div className="campo">
                <label htmlFor="correo">
                  Correo electrónico
                </label>

                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={datos.correo}
                  onChange={manejarCambio}
                  aria-describedby="error-correo"
                />

                {errores.correo && (
                  <span className="error" id="error-correo">
                    {errores.correo}
                  </span>
                )}
              </div>
            </div>

            <div className="campo">
              <label htmlFor="servicio">
                Tipo de servicio
              </label>

              <select
                id="servicio"
                name="servicio"
                value={datos.servicio}
                onChange={manejarCambio}
                aria-describedby="error-servicio"
              >
                <option value="">
                  Selecciona una opción
                </option>

                {servicios.map((servicio) => (
                  <option
                    key={servicio.id}
                    value={servicio.titulo}
                  >
                    {servicio.titulo}
                  </option>
                ))}
              </select>

              {errores.servicio && (
                <span className="error" id="error-servicio">
                  {errores.servicio}
                </span>
              )}
            </div>

            <div className="campo">
              <label htmlFor="descripcion">
                Descripción de la solicitud
              </label>

              <textarea
                id="descripcion"
                name="descripcion"
                rows="5"
                placeholder="Describe la situación y el lugar donde ocurre"
                value={datos.descripcion}
                onChange={manejarCambio}
                aria-describedby="error-descripcion"
              />

              {errores.descripcion && (
                <span className="error" id="error-descripcion">
                  {errores.descripcion}
                </span>
              )}

              <button className="boton-principal" type="submit">
                Enviar solicitud
              </button>
            </div>

            {confirmacion && (
              <div className="confirmacion" role="status">
                {confirmacion}
              </div>
            )}
          </form>
        </section>

        <section className="seccion" id="seguimiento">
          <div className="titulo-seccion">
            <p className="etiqueta">Seguimiento</p>
            <h2>Solicitudes registradas</h2>

            <p>
              Las solicitudes de esta demostración permanecen visibles
              mientras la página se encuentre abierta.
            </p>
          </div>

          {solicitudes.length === 0 ? (
            <div className="sin-solicitudes">
              Todavía no hay solicitudes registradas.
            </div>
          ) : (
            <div className="contenedor-tabla">
              <table className="tabla-solicitudes">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Servicio</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                  </tr>
                </thead>

                <tbody>
                  {solicitudes.map((solicitud) => (
                    <tr key={solicitud.id}>
                      <td>{solicitud.nombre}</td>
                      <td>{solicitud.servicio}</td>
                      <td>{solicitud.descripcion}</td>
                      <td>
                        <span className="estado">
                          {solicitud.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="contacto" id="contacto">
          <div>
            <p className="etiqueta">Contacto</p>
            <h2>Participación y comunicación vecinal</h2>
          </div>

          <p>
            Utiliza el formulario para comunicar necesidades
            relacionadas con los servicios y espacios comunes de la
            colonia. Las solicitudes de esta versión son una
            demostración académica y no se almacenan en una base de
            datos.
          </p>
        </section>
      </main>

      <footer>
        <p>
          Residencial Los Robles © 2026 · Proyecto académico
          desarrollado con React
        </p>
      </footer>
    </>
  )
}