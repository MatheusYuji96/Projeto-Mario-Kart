var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idTitulos", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idTitulos", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;
/*as medidas tem a ver com os aquarios
as vendas tem a ver com os titulos*/