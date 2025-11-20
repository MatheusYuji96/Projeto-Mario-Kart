var database = require("../database/config");

function buscarDadosVendas(idTitulos) {

    var instrucaoSql = `SELECT
    VendasJogo as Vendas,
    DATE_FORMAT(Periodo, '%Y-%m') as periodo_vendas
                    FROM Vendas
                    WHERE ceTitulos = ${idTitulos}
                    ORDER BY idVendas ASC `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idTitulos) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idTitulos} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosVendas,
    buscarMedidasEmTempoReal
}
