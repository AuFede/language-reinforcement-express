# Express Course.

https://www.youtube.com/watch?v=JmJ1WUoUIK4

30:42

#### --- Métodos de petición HTTP --- HTTP Verbs --- :

1. GET: El Cliente pide algo (hace una petición) y el Servidor escucha sólo por ese tipo de peticiones.
2. POST: Es lo contrario a GET, porque el Cliente va a estar enviándole datos al Servidor y este último probablemente los almacene.
3. PUT: El Cliente está intentando actualizar algo. Ej: actualizar un dato de usuario completamente.
4. DELETE: El Cliente está intentando eliminar un dato (del Cliente) en el Servidor.
5. PATCH: Es parecido al verbo PUT, la diferencia es que sirve para actualizar una parte de los datos, no todo.

#### Algunas consideraciones:

1. Express es un framework de NodeJS.
2. Express es un framework unopinionated: Esto quiere decir que no nos da indicaciones
de cómo escribir el código.
3. Es importante destacar que express al igual que NodeJS, usa el modelo cliente-servidor: HTTP (REQUEST-RESPONSE).
4. root: __dirname sirve para que el archivo sea leido desde su directorio inicial. __dirname sirve para ejecutar la ruta completa desde el sistema inicial hasta el proyecto.
5. 'send' está disponible sólo en express y sirve para darle más información al navegador sobre el tipo de valor que vamos a enviar.
6. Con 'status' mandamos el tipo de res que queremos que devuelva el navegador.