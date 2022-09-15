const express = require ('express')

const app = express ()

app.get ('/', (req, res) => {
    res.send("Hello World!")
})

app.get ('/miarchivo', (req, res) => {
    res.sendFile("./express-logo.png", {
        root: __dirname
    })
})

app.get ('/use', (req, res) => {
    res.json({"name": "Augusto"})
})


app.listen(3000)
console.log(`Server on port ${3000}`)