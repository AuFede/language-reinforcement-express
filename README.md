# Express Course.

https://www.youtube.com/watch?v=JmJ1WUoUIK4

1:20:51

#### --- Métodos de petición HTTP --- HTTP Verbs --- :

1. GET: El Cliente pide algo (hace una petición) y el Servidor escucha sólo por ese tipo de peticiones.
2. POST: Es lo contrario a GET, porque el Cliente va a estar enviándole datos al Servidor y este último probablemente los almacene.
3. PUT: El Cliente está intentando actualizar algo. Ej: actualizar un dato de usuario completamente.
4. DELETE: El Cliente está intentando eliminar un dato (del Cliente) en el Servidor.
5. PATCH: Es parecido al verbo PUT, la diferencia es que sirve para actualizar una parte de los datos, no todo.
6. Las operaciones típicas que hacen estos métodos: crear, actualizar, listar y eliminar, se los conoce como CRUD.

#### Algunas consideraciones:

1. Express es un framework de NodeJS.
2. Express es un framework unopinionated: Esto quiere decir que no nos da indicaciones
de cómo escribir el código.
3. Es importante destacar que express al igual que NodeJS, usa el modelo cliente-servidor: HTTP (REQUEST-RESPONSE).
4. root: __dirname sirve para que el archivo sea leido desde su directorio inicial. __dirname sirve para ejecutar la ruta completa desde el sistema inicial hasta el proyecto (es decir, desde el disco duro).
5. 'send' está disponible sólo en express y sirve para darle más información al navegador sobre el tipo de valor que vamos a enviar.
6. Con 'status' mandamos el tipo de res que queremos que devuelva el navegador.
7. Usar la extensión de Thunder Client nos permite tener un cliente 'res' dentro de VSCode.
8. Desde el Servidor no sólo te puede devolver texto, también pueden ser imagenes, archivos, etc. Para esto, podemos usar 'sendFile'.
9. Los JSON son objetos, por eso no envían funciones.
10. 304 es una respuesta que siginifica que tu código no ha sido modificado.
11. 204 es un estado sin contenido.
12. sendStatus sirve para mandar un código de estado.
13. Las request y las response están hechas de todas las partes que conforman una petición (endpoint,header,body,etc).
14. El body es el conteido que me está enviando el cliente.
15. express.text() sirve para procesar el texto.
16. form en thunder client sirve para formularios HTML. Express usa urlencoded con extendes false para interpretarlo.