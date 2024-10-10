const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarDadosGlobais(){
 const res = await fetch(url);
 const secao = document.querySelector('.graficos-container')
 const dados = await res.json();
 const totalPessoasMundo = dados.total_pessoas_mundo
 const totalPessoasConectadas = dados.total_pessoas_conectadas
 const tempoMedio = dados.tempo_medio
 console.log(dados)
 console.log(dados.tempo_medio)
 console.log(dados.total_de_pessoas)
 const paragrafo = document.createElement('p');
 paragrafo.classList.add('graficos-texto')
 paragrafo.innerHTML = `Voce sabia que no mundo tem <span>${totalPessoasMundo}</span> de habitantes e destes <span>${totalPessoasConectadas}</span> estao conectadas a alguma rede social e ficam em média <span>${tempoMedio}</span> conectadas.`
 secao.appendChild(paragrafo);


}

visualizarDadosGlobais();