var express = require("express");
var router = express.Router();

var resultadosController = require("../controllers/resultadosController");

router.get("/:idUsuario", function (req, res) {
  resultadosController.buscarResultadosPorUsuarios(req, res);
});

router.post("/cadastrar", function (req, res) {
  resultadosController.cadastrar(req, res);
})

module.exports = router;