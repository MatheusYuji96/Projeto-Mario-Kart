var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idUsuario", function (req, res) {
    medidaController.buscarDadosResultados(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    medidaController.buscarResultadosEmTempoReal(req, res);
})

module.exports = router;
/*as medidas tem a ver com os aquarios
as vendas tem a ver com os titulos*/