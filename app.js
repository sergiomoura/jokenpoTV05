let pontosDoUsuario = 0
let pontosDoComputador = 0

const USUARIO = 'Usuário';
const COMPUTADOR = 'Computador';
const PAPEL = "papel";
const PEDRA = "pedra";
const TESOURA = "tesoura";
const jogadasPossiveis = [PAPEL, PEDRA, TESOURA];

// CAPTURA DE ELEMENTOS ------------------------------------
const imgPapel = document.getElementById('imgPapel') 
const imgPedra = document.getElementById('imgPedra') 
const imgTesoura = document.getElementById('imgTesoura')
const imgJogadaDocuputador = document.getElementById('compChoice');
const spanPlacarUsuario = document.getElementById('userScore')
const spanPlacarComputador = document.getElementById('compScore')
const pPlacar = document.getElementById('scores')
const audioDaVitoria = document.getElementById('audioDaVitoria');
const audioDaDerrota = document.getElementById('audioDaDerrota');
console.log(spanPlacarUsuario);
/**
 * 
 * A função deve atualizar o placar na tela
 * 
 * @param {number} pontosDoUsuario 
 * @param {number} pontosDoComputador 
 */
function atualizarPlacar(pontosDoUsuario, pontosDoComputador){
    spanPlacarUsuario.innerText = pontosDoUsuario;
    spanPlacarComputador.innerText = pontosDoComputador;
}

