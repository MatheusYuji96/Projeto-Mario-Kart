var express = require("express");
var router = express.Router();

var vendasController = require("../controllers/vendasController");

router.get("/ceTitulos", function (req, res) {
  vendasController.buscarVendasPorTitulos(req, res);
});

router.post("/cadastrar", function (req, res) {
  vendasController.cadastrar(req, res);
})

module.exports = router;