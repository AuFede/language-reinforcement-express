const express = require ("express");

const app = express ();

// Estas funciones es necesario ponerlas antes porque es importante que se procesen y puedan interpretar mejor el código.
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send ('Nuevo usuario creado')
})

app.listen(3000)
console.log( `Server on port ${3000}`);