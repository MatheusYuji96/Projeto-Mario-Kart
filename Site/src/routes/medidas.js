var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idTitulos", function (req, res) {
    medidaController.buscarDadosVendas(req, res);
});

router.get("/tempo-real/:idTitulos", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;