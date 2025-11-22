var database = require("../database/config");

function buscarDadosVendas(idUsuario) {

    var instrucaoSql = `SELECT
    PontFinal1,
    PontFinal2,
    idResult
                    FROM ResultadoSimulador
                    WHERE ceUsuario = ${idUsuario}
                    ORDER BY idResult DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT 
        PontFinal1, 
        PontFinal2,
        idResult
                        FROM ResultadoSimulador
                        WHERE ceUsuario = ${idUsuario}
                        ORDER BY idResult DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosVendas,
    buscarMedidasEmTempoReal
}
