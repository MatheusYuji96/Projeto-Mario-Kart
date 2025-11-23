var resultadosModel = require("../models/resultadosModel");

function buscarResultadosPorUsuarios(req, res) {
  var idUsuario = req.params.idUsuario;

  resultadosModel.buscarResultadosPorUsuarios(idUsuario).then((resultado) => {
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
  var PontFinal1 = req.body.PontFinal1;
  var PontFinal2 = req.body.PontFinal2;
  var ceUsuario = req.body.ceUsuario;
  var VitoriaP1 = req.body.VitoriaP1;
  var VitoriaP2 = req.body.VitoriaP2;
console.log(PontFinal1)
console.log(PontFinal2)
console.log(ceUsuario)
  if (PontFinal1 == undefined) {
    res.status(400).send("PontFinal1 está undefined!");
  } else if (PontFinal2 == undefined) {
    res.status(400).send("PontFinal2 está undefined!");
  } else if (VitoriaP1 == undefined) {
    res.status(400).send("PontFinal2 está undefined!");
  } else if (VitoriaP2 == undefined) {
    res.status(400).send("VitoriaP2 está undefined!");
  } else if (ceUsuario == undefined) {
    res.status(400).send("ceUsuario está undefined!");
  } else {


    resultadosModel.cadastrar(PontFinal1, PontFinal2, VitoriaP1, VitoriaP2, ceUsuario)
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
  buscarResultadosPorUsuarios,
  cadastrar
}