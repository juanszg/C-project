# C++ // POO LAB

Laboratorio educativo en español para aprender fundamentos de C++ y programación orientada a objetos. Está hecho con HTML, CSS y JavaScript moderno sin frameworks ni backend.

## Ejecutar

Abre `index.html` en un navegador moderno. Como la aplicación usa módulos ES, algunos navegadores restringen módulos al abrir `file://`; si ocurre, sirve la carpeta con cualquier servidor estático local (por ejemplo, `python -m http.server 8000`) y abre `http://localhost:8000`. No requiere instalación ni compilación.

## Arquitectura

- `index.html`: estructura global, header, navegación, región principal y footer.
- `css/style.css`: tokens visuales y componentes.
- `css/responsive.css`: disposición tablet/móvil e impresión.
- `css/animations.css`: movimiento suave y respeto a `prefers-reduced-motion`.
- `js/data.js`: catálogo de temas, roadmap, ejercicios y ejemplos.
- `js/app.js`: renderizado de páginas y navegación ligera.
- `js/navigation.js`: navegación temática.
- `js/progress.js`: cálculo y presentación del progreso.
- `js/storage.js`: persistencia local con `localStorage`.
- `js/search.js`: búsqueda sobre temas.
- `js/exercises.js`: ejercicios y registro de misiones completadas.
- `js/playground.js`: editor y vista previa didáctica.

## Contenido

Cada tema se declara como un objeto en `topics` dentro de `js/data.js`: incluye `id`, `group`, `name`, `category`, `description`, `definition`, `syntax`, `explanation` y `exercise`. Para agregar un concepto, añade otro objeto con un `id` único. Se agrega automáticamente a la navegación, búsqueda, catálogo y porcentaje de progreso de su categoría.

Para agregar un ejercicio, añade un objeto `{title, level, topic, description, starter, check}` al arreglo `exercises` en `js/data.js`. La tarjeta de práctica se genera desde ese arreglo. El estado completado se guarda en el navegador.

Para agregar un ejemplo de playground, añade un par nombre/código al objeto `examples` en `js/data.js` y agrega su opción correspondiente en el selector de `renderPlayground()` en `js/playground.js`.

## Progreso y ajustes

El navegador conserva tema visual, temas visitados, misiones completadas, último tema y borrador de código bajo la clave `cpp-poo-lab-v1`. Puedes reiniciar los datos borrando esa clave desde las herramientas de almacenamiento del navegador. El cambio de tema se guarda localmente.

## Playground y compilador

El playground conserva y copia código, carga ejemplos y presenta una vista previa limitada de literales `cout`. No ejecuta C++ ni comprueba soluciones. Para compilar código real se puede conectar posteriormente un servicio de compilación aislado o recomendar al estudiante un compilador local/online; no se envían datos a ningún servidor en esta versión.

## Personalización visual

Los colores y radios principales están declarados como custom properties en `:root` al inicio de `css/style.css`. `css/responsive.css` contiene los breakpoints. Los datos y lecciones no dependen del estilo visual.

## Perfil de profesor

`localStorage` incluye un campo `profile` preparado para extender una futura interfaz de profesor/alumno. Esta versión no incluye autenticación ni editor de contenido, y no finge persistencia compartida entre usuarios.
