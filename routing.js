const express = require ('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
}) 

app.get('/about', (req, res) => {
    res.send('About')
}) 

app.get('/Weather', (req, res) => {
    res.send('The current weather is really nice!')
}) 

// Con "app.use" estamos haciendo que siempre que se vaya a una ruta que no especificamos, entonces por default express mande siempre el mismo mensaje y siempre envie al usuario a una ruta final.

app.use((req, res) => {
res.status(404).send('No se encontró tu página!')
})

app.listen(3000)
console.log(`Escuchando en el puerto ${3000}`)