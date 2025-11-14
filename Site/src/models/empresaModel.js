var database = require("../database/config");

function buscarPorIdTitulos(idTitulos) {
  var instrucaoSql = `SELECT * FROM Títulos WHERE idTitulos = '${idTitulos}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idTitulos, NomeJogo, DataLanc, Console, Mecanica, Online FROM Títulos`;

  return database.executar(instrucaoSql);
}

function buscarPorConsole(Console) {
  var instrucaoSql = `SELECT * FROM Títulos WHERE Console = '${Console}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nome, cpf) {
  var instrucaoSql = `INSERT INTO Usuarios (nome, cpf) VALUES ('${nome}', '${cpf}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorConsole, buscarPorIdTitulos, cadastrar, listar };
