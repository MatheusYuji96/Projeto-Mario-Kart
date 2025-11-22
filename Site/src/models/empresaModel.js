var database = require("../database/config");

function buscarPoridUsuario(ceTitulos) {
  var instrucaoSql = `SELECT * FROM Títulos WHERE idUsuario = '${ceTitulos}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT idUsuario, NomeJogo, DataLanc, Console, Mecanica, Online FROM Títulos`;

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

module.exports = { buscarPorConsole, buscarPoridUsuario, cadastrar, listar };
