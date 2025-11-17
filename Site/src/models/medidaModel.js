var database = require("../database/config");

function buscarDadosVendas(idTitulos, limite_linhas) {

    var instrucaoSql = `SELECT
    VendasJogo as 'Vendas do Software'
                    FROM Vendas
                    WHERE ceTitulos = ${idTitulos}
                    ORDER BY VendasJogo DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosVendas,
    buscarMedidasEmTempoReal
}
