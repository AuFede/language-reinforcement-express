const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./express-logo.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Augusto",
    lastname: "Rey",
    age: 20,
    points: [1, 2, 3],
    address: {
      city: "New York",
      street: "La Rue 2030",
    },
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204)
});

app.listen(3000);
console.log(`Server on port ${3000}`);
