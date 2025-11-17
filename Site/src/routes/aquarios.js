var express = require("express");
var router = express.Router();

var vendasController = require("../controllers/vendasController");

router.get("/:Jogo", function (req, res) {
  vendasController.buscarUsuariosPorTitulos(req, res);
});

router.post("/cadastrar", function (req, res) {
  vendasController.cadastrar(req, res);
})

module.exports = router;