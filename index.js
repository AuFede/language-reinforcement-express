// http.createServer() crea un Servidor básico.
// fs.createReadStream() permite leer el archivo de a poco.
// pipe sirve para conectar uno o más streams.

// ----- PRIMER MÉTODO -----

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//    const read = fs.createReadStream('./static/index.html')
//    read.pipe(res)
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

//   ----- SEGUNDO MÉTODO: MÁS UTILIZADO. -----

const express = require ('express')

const app = express()

app.get('/', (req, res) => {
   res.sendFile ('./static/index.html', {
      root: __dirname
   })
}) 

app.listen(3000)
console.log(`Escuchando en el puerto ${3000}`)