const express = require ('express');

const app = express();

app.get('/search', (req, res) => {
    if (req.query.q === 'javascript books') {
        res.send('lista de libros de Javascript')
    } else {
        res.send('página normal')
    }
})

app.get('/hello/:username', (req, res) => {
    // Para reflejar querys en consola.
    // console.log (req.query.user)
    // console.log (req.query.edad)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)} `)  
})

app.get('/users/:username/photo', (req, res) => {
    if (req.params.username === "Augusto") {
        return res.sendFile('./express-logo.png', {
            root: __dirname
        })
    } 
res.send ('El usuario no tiene acceso')
})

app.get('/name/:nombre/age/:age', (req, res) => {
    console.log(req.params)
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})


app.listen(3000)
console.log(`Server on port ${3000}`)