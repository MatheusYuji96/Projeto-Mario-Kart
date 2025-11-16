var database = require("../database/config");

function buscarDadosVendas(ceTitulos, idVendas, Console, VendasConsole, VendasJogo) {

    var instrucaoSql = `SELECT
        ceTitulos,
        idVendas,
        Console, 
        VendasConsole as 'Vendas de Consoles',
        VendasJogo as 'Vendas do Software'
                    FROM Titulos JOIN Vendas
                    ON idTitulos = ${ceTitulos}
                    ORDER BY VendasJogo DESC`;

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
