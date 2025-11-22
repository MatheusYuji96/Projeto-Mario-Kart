var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var VitoriaP1 = req.body.VitoriaP1;
  var VitoriaP2 = req.body.VitoriaP2;
  var Empate = req.body.Empate;
  var idUsuario = req.body.idUsuario;

  if (VitoriaP1 == undefined) {
    res.status(400).send("VitoriaP1 está undefined!");
  } else if (VitoriaP2 == undefined) {
    res.status(400).send("VItoriaP2 está undefined!");
  } else if (Empate == undefined) {
    res.status(400).send("Empate está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    aquarioModel.cadastrar(VitoriaP1, VitoriaP2, Empate, idUsuario)
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
  buscarAquariosPorEmpresa,
  cadastrar
}