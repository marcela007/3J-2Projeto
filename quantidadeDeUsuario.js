import { getCSS } from "./comum.js";

async function quantidadeDeUsuario(){
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const resultado  = await fetch(url);
const dados = await resultado.json();
const nomeDasRedes = Object.keys(dados);
const quantidadeDeUsuarios = Object.values(dados);

const infos = [
    {
        x: nomeDasRedes,
        y: quantidadeDeUsuarios,
        type: 'bar',
        marker: 'bar'{
            color: getCSS('--cor-primaria')
        }
    }
]

const grafico = document.createElement('div');
grafico.className = 'grafico'
document.getElementById('graficos-conterner').appendChild(grafico);
Plotly.newPlot(grafico,infos);

}

quantidadeDeUsuario()