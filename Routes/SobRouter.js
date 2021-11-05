const express = require("express");

const SobController = require("../Controllers/SobController");

const routes = express.Router();

routes.get("/programacao", SobController.index);
routes.post("/programacao", SobController.create);

module.exports = routes;
