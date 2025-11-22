var alertas = [];

function obterdados(idUsuario) {
    fetch(`/medidas/tempo-real/${idUsuario}`)
        .then(resposta => {
            if (resposta.status == 200) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idUsuario);
                });
            } else {
                console.error(`Nenhum dado encontrado para o id ${idUsuario} ou erro na API`);
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idTitulos) {
    var temp = resposta[0].temperatura;

    var grauDeAviso = '';

    var limites = {
        muito_quente: 23,
        quente: 22,
        ideal: 20,
        frio: 10,
        muito_frio: 5
    };

    var classe_temperatura = 'cor-alerta';

    if (temp >= limites.muito_quente) {
        classe_temperatura = 'cor-alerta perigo-quente';
        grauDeAviso = 'perigo quente'
        grauDeAvisoCor = 'cor-alerta perigo-quente'
        exibirAlerta(temp, idTitulos, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.muito_quente && temp >= limites.quente) {
        classe_temperatura = 'cor-alerta alerta-quente';
        grauDeAviso = 'alerta quente'
        grauDeAvisoCor = 'cor-alerta alerta-quente'
        exibirAlerta(temp, idTitulos, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp < limites.quente && temp > limites.frio) {
        classe_temperatura = 'cor-alerta ideal';
        removerAlerta(idTitulos);
    }
    else if (temp <= limites.frio && temp > limites.muito_frio) {
        classe_temperatura = 'cor-alerta alerta-frio';
        grauDeAviso = 'alerta frio'
        grauDeAvisoCor = 'cor-alerta alerta-frio'
        exibirAlerta(temp, idTitulos, grauDeAviso, grauDeAvisoCor)
    }
    else if (temp <= limites.muito_frio) {
        classe_temperatura = 'cor-alerta perigo-frio';
        grauDeAviso = 'perigo frio'
        grauDeAvisoCor = 'cor-alerta perigo-frio'
        exibirAlerta(temp, idTitulos, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (document.getElementById(`temp_aquario_${idTitulos}`) != null) {
        document.getElementById(`temp_aquario_${idTitulos}`).innerHTML = temp + "°C";
    }

    if (document.getElementById(`card_${idTitulos}`)) {
        card = document.getElementById(`card_${idTitulos}`)
        card.className = classe_temperatura;
    }
}

function exibirAlerta(temp, idTitulos, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idTitulos == idTitulos);

    if (indice >= 0) {
        alertas[indice] = { idTitulos, temp, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idTitulos, temp, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
}

function removerAlerta(idTitulos) {
    alertas = alertas.filter(item => item.idTitulos != idTitulos);
    exibirCards();
}

function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idTitulos, temp, grauDeAviso, grauDeAvisoCor }) {

    var NomeJogo = JSON.parse(sessionStorage.Titulo).find(item => item.idTitulos == idTitulos).NomeJogo;
    return `
    <div class="mensagem-alarme">
        <div class="informacao">
            <div class="${grauDeAvisoCor}">&#12644;</div> 
            <h3>${NomeJogo} está em estado de ${grauDeAviso}!</h3>
            <small>Temperatura capturada: ${temp}°C.</small>   
        </div>
        <div class="alarme-sino"></div>
    </div>
    `;
}

function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.Titulo).forEach(item => {
        obterdados(item.idTitulos)
    });
    setTimeout(atualizacaoPeriodica, 5000);
}
