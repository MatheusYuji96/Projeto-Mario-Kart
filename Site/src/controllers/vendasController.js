var vendasModel = require("../models/vendasModel");

function buscarTitulosPorUsuarios(req, res) {
  var idUsuario = req.params.idUsuario;

  vendasModel.buscarTitulosPorUsuarios(idUsuario).then((resultado) => {
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
  var NomeJogo = req.body.NomeJogo;
  var ceTitulos = req.body.ceTitulos;

  if (NomeJogoJogo == undefined) {
    res.status(400).send("vendasJogo está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("ceTitulos está undefined!");
  } else {


    vendasModel.cadastrar(NomeJogo, ceTitulos)
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
  buscarTitulosPorUsuarios,
  cadastrar
}