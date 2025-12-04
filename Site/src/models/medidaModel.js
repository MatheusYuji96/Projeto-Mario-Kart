var database = require("../database/config");

function buscarDadosResultados(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT
    PontFinal1,
    PontFinal2,
    idResult,
    VitoriaP1,
    VitoriaP2
                    FROM ResultadoSimulador
                    WHERE ceUsuario = ${idUsuario}
                    ORDER BY idResult DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarResultadosEmTempoReal(idUsuario) {

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

function buscarIndicadoresEmTempoReal(idUsuario) {

    var instrucaoSql = `SELECT
    round(sum(VitoriaP1), 0) as sumVitoria1,
    round(sum(VitoriaP2), 0) as sumVitoria2,
    round(avg(PontFinal1), 0) as avgMedia1,
    round(avg(PontFinal2), 0) as avgMedia2
                    FROM ResultadoSimulador
                    WHERE ceUsuario = ${idUsuario}
                    ORDER BY idResult;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosResultados,
    buscarResultadosEmTempoReal,
    buscarIndicadoresEmTempoReal
}
