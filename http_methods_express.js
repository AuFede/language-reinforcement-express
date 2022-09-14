const express = require ('express')

const app = express()

// CRUD EXAMPLE.
app.get ('/products', (req, res) => {
    res.send('lista de productos')
})

app.post ('/products', (req, res) => {
    res.send('creando productos')
})

app.put ('/products', (req, res) => {
    res.send('actualizando productos')
})

app.delete ('/products', (req, res) => {
    res.send('eliminando productos')
})

app.patch ('/products', (req, res) => {
    res.send('actualizando una parte de los productos')
})

app.listen(3000)
console.log(`Escuchando en el puerto ${3000}`)