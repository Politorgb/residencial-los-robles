Residencial Los Robles
Aplicación web para la representación y gestión de servicios comunitarios de la colonia Residencial Los Robles.

El proyecto permite consultar servicios comunitarios, registrar solicitudes y visualizar un seguimiento básico de las solicitudes creadas durante la sesión.

Funcionalidades
Navegación entre las secciones de la aplicación.
Catálogo de servicios comunitarios.
Formulario para registrar solicitudes.
Validación de campos obligatorios.
Validación básica del correo electrónico.
Mensaje de confirmación después de enviar una solicitud válida.
Tabla de seguimiento de solicitudes.
Diseño adaptable para computadora, tableta y teléfono móvil.
Tecnologías utilizadas
React
JavaScript
CSS
Vite
HTML
Git
GitHub
Requisitos
Para ejecutar el proyecto se necesita:

Node.js 20.19 o una versión compatible con Vite.
npm.
Un navegador moderno, como Google Chrome, Microsoft Edge o Mozilla Firefox.
Git, si se desea clonar el repositorio.
Para comprobar que Node.js y npm están instalados:

node -v
npm -v
Descargar el proyecto
Opción 1: clonar con Git
Abrir una terminal y ejecutar:

git clone PEGA-AQUÍ-LA-LIGA-DE-TU-REPOSITORIO.git
Después, entrar en la carpeta del proyecto:

cd residencial-los-robles
Opción 2: descargar como archivo ZIP
Abrir el repositorio en GitHub.
Presionar el botón Code.
Seleccionar Download ZIP.
Descomprimir el archivo.
Abrir la carpeta descomprimida en Visual Studio Code.
Instalar las dependencias
Desde la carpeta que contiene el archivo package.json, ejecutar:

npm install
Este comando instalará las dependencias del proyecto dentro de la carpeta node_modules.

Ejecutar el proyecto
Después de instalar las dependencias, ejecutar:

npm run dev
La terminal mostrará una dirección local similar a:

http://localhost:5173/
Abrir esa dirección en el navegador.

El puerto puede cambiar si el puerto 5173 ya está ocupado. En ese caso, debe utilizarse la dirección indicada en la terminal.

Ejecutar el proyecto en un teléfono
La computadora y el teléfono deben estar conectados a la misma red Wi-Fi.

Ejecutar:

npm run dev -- --host
La terminal mostrará una dirección de red similar a:

http://192.168.1.75:5173/
Abrir en el teléfono la dirección que aparezca junto a Network.

Si Windows muestra una alerta del firewall, permitir el acceso solamente en redes privadas.

Crear una versión de producción
Para generar la versión optimizada del proyecto:

npm run build
Los archivos generados se guardarán en la carpeta:

dist
Para revisar localmente la versión de producción:

npm run preview
Estructura principal
residencial-los-robles/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
Uso de la aplicación
Abrir la página principal.
Consultar los servicios comunitarios.
Seleccionar la opción para registrar una solicitud.
Completar los campos obligatorios.
Presionar Enviar solicitud.
Revisar el mensaje de confirmación.
Consultar la solicitud en la sección de seguimiento.
Datos para probar el formulario
Se pueden utilizar los siguientes datos de prueba:

Nombre: Usuario de prueba
Correo: prueba@example.com
Servicio: Alumbrado público
Descripción: Luminaria apagada en el área común.
Consideraciones
Las solicitudes se conservan únicamente mientras la página permanece abierta.

Al actualizar o cerrar la página, las solicitudes desaparecen porque esta versión todavía no utiliza una base de datos ni almacenamiento permanente.

La conexión con una base de datos, la autenticación y la administración completa de solicitudes se consideran mejoras futuras.

Estado del proyecto
El proyecto corresponde a la tercera fase de progreso del desarrollo de los sprints.

Funciones terminadas:

Interfaz principal.
Navegación.
Catálogo de servicios.
Formulario de solicitudes.
Validaciones.
Confirmación de envío.
Seguimiento temporal.
Diseño adaptable.
Funciones pendientes:

Almacenamiento permanente.
Autenticación.
Roles de usuario.
Panel administrativo completo.
Actualización del estado de las solicitudes.
Autor
Paul Alfredo Benítez Arroyo

Proyecto académico desarrollado para la aplicación de React, Vite, GitHub y la metodología Scrum.       