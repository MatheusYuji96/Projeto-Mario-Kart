var database = require("../database/config");

function buscarTitulosPorUsuarios(Jogo) {

  var instrucaoSql = `SELECT * FROM Titulos WHERE idTitulos = ${Jogo}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(Jogo, VendasJogo) {
  
  var instrucaoSql = `INSERT INTO (vendasJogo, ceTitulos) Vendas VALUES (${VendasJogo}, ${Jogo})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarTitulosPorUsuarios,
  cadastrar
}
