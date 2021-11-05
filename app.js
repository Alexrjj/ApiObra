const express = require("express");
const app = express();
const port = 3000;

// JSON & View Engine
app.use(express.json());
app.set("view engine", "ejs");

// TODO - Banco de dados
// TODO - Rotas
// TODO - Controllers
// TODO - Página Index

// Rota Index
app.get("/", (req, res) => {
  res.send("hello");
});


// Inicialização do servidor
app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
