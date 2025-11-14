var database = require("../database/config");

function buscarPistasPorTitulos(Titulosid) {

  var instrucaoSql = `SELECT * FROM Pistas WHERE ceTitulos = ${Titulosid}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarPistasPorTitulos,
  cadastrar
}
