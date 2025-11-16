var database = require("../database/config");

function buscarVendasPorTitulos() {

  var instrucaoSql = `SELECT * FROM Vendas WHERE ceTitulos = ${ceTitulos}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(ceTitulos, VendasJogo) {
  
  var instrucaoSql = `INSERT INTO (vendasJogo, ceTitulos) Vendas VALUES (${VendasJogo}, ${ceTitulos})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarVendasPorTitulos,
  cadastrar
}
