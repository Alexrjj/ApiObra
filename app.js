const express = require("express");
const app = express();
const port = 3000;
const sobRouter = require("./Routes/SobRouter");

// JSON, View Engine & Routes
app.use(express.json());
app.set("view engine", "ejs");
app.use(sobRouter);

// Rota Index
app.get("/", (req, res) => {
  res.render('pages/index')
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Server running at port http://localhost:${port}`);
});
