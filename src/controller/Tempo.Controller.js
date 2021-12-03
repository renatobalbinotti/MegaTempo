function setClimaSemanal(apiResponse){
    montaGraficoClima(apiResponse)
}

function montaGraficoClima(responseJson){
    const containerGraficoCidadeSelec = getContainerGraficoCidadeSelec();
    containerGraficoCidadeSelec.textContent = responseJson.city_name;

    for(let i = 1; i <= 7; i++){
        const previsaoClima = responseJson.forecast[i-1];
 
        const containerGraficoDiaSemana = getContainerGraficoDiaSemana(i);
        const containerGraficoData = getContainerGraficoData(i);
        const containerGraficoDescricao = getContainerGraficoDescricao(i)
        const containerGraficoTempMax = getContainerTempMax(i);
        const containerGraficoTempMin = getContainerTempMin(i);
        
        containerGraficoDiaSemana.textContent = getDiaSemanaJson(previsaoClima.weekday);
        containerGraficoData.textContent = previsaoClima.date;
        containerGraficoTempMax.textContent = previsaoClima.max ;
        containerGraficoTempMin.textContent = previsaoClima.min;
        containerGraficoDescricao.textContent = previsaoClima.description;
    }
}

function getContainerGraficoCidadeSelec(){
    return document.getElementById('cidade-buscada');
}

function getContainerGraficoDiaSemana(position){
    return document.getElementById('container-grafico-dia-'+ position);
}

function getContainerGraficoData(position){
    return document.getElementById('container-grafico-data-'+ position)
}

function getContainerGraficoDescricao(position){
    return document.getElementById('container-grafico-descricao-'+ position)
}

function getContainerTempMax(position){
    return document.getElementById('container-grafico-tempMax-'+ position)
}

function getContainerTempMin(position){
    return document.getElementById('container-grafico-tempMin-'+ position)
}

function adicionaEventosCampos(){
    document.getElementById('search-city').addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            api.getSearchCity(document.getElementById('search-city').value);
        }
        
    })
}

function getDiaSemanaJson(diaSemana){
    switch(diaSemana){
        case "Seg": return 'Segunda';
        case "Ter": return 'Terça';
        case "Qua": return 'Quarta';
        case "Qui": return 'Quinta';
        case "Sex": return 'Sexta';
        case "Sáb": return 'Sábado';
        case "Dom": return 'Domingo';
    }
}

function limpaCampos() {
    document.getElementById('contato-nome').value = '';
    document.getElementById('contato-email').value = '';
    document.getElementById('contato-telefone').value = '';
    document.getElementById('contato-mensagem').value = '';
}

async function gravaContatos(){
    try {   
        const nome = document.getElementById('contato-nome').value;
        const email = document.getElementById('contato-email').value;
        const telefone = document.getElementById('contato-telefone').value;
        const mensagem = document.getElementById('contato-mensagem').value;
        const data = new Date().toGMTString();

        const contato = {nome, email, telefone, mensagem, data}
        const tempoRepository = new TempoRepository();
        await tempoRepository.create(contato).then((resultado) => {
            contato.id = resultado;
            limpaCampos();
        }).catch((error) => {
            console.log(error);
        })
    }catch(e){
        console.log(e)
    }
}