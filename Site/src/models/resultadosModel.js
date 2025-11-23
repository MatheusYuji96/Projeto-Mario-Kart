var database = require("../database/config");

function buscarResultadosPorUsuarios(idUsuario) {

  var instrucaoSql = `SELECT * FROM Usuarios WHERE idUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(PontFinal1, PontFinal2, VitoriaP1, VitoriaP2, ceUsuario) {
  
  var instrucaoSql = `INSERT INTO ResultadoSimulador (PontFinal1, PontFinal2, VitoriaP1, VitoriaP2, ceUsuario) VALUES (${PontFinal1}, ${PontFinal2}, ${VitoriaP1}, ${VitoriaP2}, ${ceUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarResultadosPorUsuarios,
  cadastrar
}
