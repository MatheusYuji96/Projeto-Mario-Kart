var vendasModel = require("../models/vendasModel");

function buscarVendasPorTitulos(req, res) {
  var ceTitulos = req.params.ceTitulos;

  vendasModel.buscarVendasPorTitulos(ceTitulos).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as vendas: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var vendasJogo = req.body.vendasJogo;
  var ceTitulos = req.body.ceTitulos;

  if (vendasJogo == undefined) {
    res.status(400).send("vendasJogo está undefined!");
  } else if (ceTitulos == undefined) {
    res.status(400).send("ceTitulos está undefined!");
  } else {


    vendasModel.cadastrar(vendasJogo, ceTitulos)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarVendasPorTitulos,
  cadastrar
}