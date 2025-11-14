var empresaModel = require("../models/empresaModel");

function buscarPorCpf(req, res) {
  var cpf = req.query.cpf;

  empresaModel.buscarPorCpf(cpf).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.idTitulos;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var cpf = req.body.cpf;
  var nome = req.body.nome;

  empresaModel.buscarPorCpf(cpf).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a pessoa com o cpf ${cpf} já eestá cadastrada` });
    } else {
      empresaModel.cadastrar(nome, cpf).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorCpf,
  buscarPorId,
  cadastrar,
  listar,
};
