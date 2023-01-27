let pontosDoUsuario = 0
let pontosDoComputador = 0

const USUARIO = 'Usuário';
const COMPUTADOR = 'Computador';
const PAPEL = "papel";
const PEDRA = "pedra";
const TESOURA = "tesoura";
const jogadasPossiveis = [PAPEL, PEDRA, TESOURA];

// CAPTURA DE ELEMENTOS -----------------------------------
const imgPapel = document.getElementById('imgPapel')
const imgPedra = document.getElementById('imgPedra')
const imgTesoura = document.getElementById('imgTesoura')
const imgJogadaDoComputador = document.getElementById('compChoice');
const spanPlacarUsuario = document.getElementById('userScore')
const spanPlacarComputador = document.getElementById('compScore')
const pPlacar = document.getElementById('scores')
const audioDaVitoria = document.getElementById('audioDaVitoria');
const audioDaDerrota = document.getElementById('audioDaDerrota');

/**
 * 
 * A função deve atualizar o placar na tela
 * 
 * @param {number} pontosDoUsuario 
 * @param {number} pontosDoComputador 
 */
function atualizarPlacar(pontosDoUsuario, pontosDoComputador) {
    spanPlacarUsuario.innerText = pontosDoUsuario;
    spanPlacarComputador.innerText = pontosDoComputador;
}

/**
 * Limpa todas classe css de pPlacar e em seguida
 * atribui a classe 'green-glow' a pPlacar
 */
function mostrarUsuarioVencendo() {
    pPlacar.classList = '';
    pPlacar.classList.add('green-glow');
}

/**
 * Limpa todas classes css de pPlacar e em seguida
 * atribui a classe 'red-glow a pPlacar
 */
function mostrarUsuarioPerdendo() {
    pPlacar.classList = '';
    pPlacar.classList.add('red-glow')
}

/**
 * Limpa todas classe css de pPlacar
 */
function mostrarJogoEmpatado() {
    pPlacar.classList = ""
}

/**
 * 
 * Retorna USUARIO caso a pontosDoUsuario seja maior
 * que pontosDoComputador. Retorna COMPUTADOR caso
 * pontosDoComputador seja maior que pontosDoUsuario.
 * Retorna undefined se as pontuações forem iguais.
 * 
 * @param {number} pontosDoUsuario 
 * @param {number} pontosDoComputador 
 * @returns USUARIO | COMPUTADOR | undefined
 */
function quemEstaGanhando(pontosDoUsuario, pontosDoComputador) {
    if (pontosDoUsuario > pontosDoComputador) {
        return USUARIO;
    } else if (pontosDoUsuario < pontosDoComputador) {
        return COMPUTADOR;
    } else {
        return undefined;
    }
}

/**
 * Pausa o audioDaVitoria, volta para o instante zero e
 * toca audioDaVitoria
 */
function alertarVitoria() {
    audioDaVitoria.pause();
    audioDaVitoria.currentTime = 0;
    audioDaVitoria.play();
}

function alertarDerrota() {
    audioDaDerrota.pause();
    audioDaDerrota.currentTime = 0;
    audioDaDerrota.play();
};

/**
 * 
 * @param {string} jogadaDoUsuario 
 * @param {string} jogadaDoComputador 
 * @returns USUARIO | COMPUTADOR | undefined
 */
function quemVenceu(jogadaDoUsuario, jogadaDoComputador) {

    const combinacao = jogadaDoUsuario + jogadaDoComputador;

    switch (combinacao) {

        // VITÓRIA!
        case PAPEL + PEDRA:
        case PEDRA + TESOURA:
        case TESOURA + PAPEL:
            return USUARIO;

        // DERROTA!
        case PEDRA + PAPEL:
        case TESOURA + PEDRA:
        case PAPEL + TESOURA:
            return COMPUTADOR

        // EMPATE!
        default:
            return undefined;

    }

}

/**
 * 
 * Aleatoriamente retorna PEDRA, PAPEL ou TESOURA
 * 
 * @returns {PEDRA | PAPEL | TESOURA}
 */
function jogadaAleatoria(){
    let n = Math.floor(3 * Math.random());
    return jogadasPossiveis[n]
}

/**
 * Mostra a imagem respectiva no div imgJogadaDoComputador
 * @param {PEDRA | PAPEL | TESOURA} jogadaDoComputador 
 */
function mostrarJogadaDoComputador(jogadaDoComputador){
    
    const img = document.createElement('img');

    let src;
    if(jogadaDoComputador == PEDRA){
        src = './images/rock.png';
    } else if(jogadaDoComputador == PAPEL){
        src = './images/paper.png';
    } else if(jogadaDoComputador == TESOURA){
        src = './images/scissors.png';
    }
    img.src = src;

    imgJogadaDoComputador.innerText = '';
    imgJogadaDoComputador.appendChild(img);

}

function jokenpo(jogadaDoUsuario){
    
    let jogadaDoComputador = jogadaAleatoria();

    mostrarJogadaDoComputador(jogadaDoComputador);

    let vencedor = quemVenceu(jogadaDoUsuario, jogadaDoComputador);
    
    if(vencedor == USUARIO) {
        pontosDoUsuario++;
        alertarVitoria();
    } else if (vencedor == COMPUTADOR){
        pontosDoComputador++;
        alertarDerrota();
    }

    atualizarPlacar(pontosDoUsuario, pontosDoComputador);

    if(pontosDoUsuario > pontosDoComputador) {
        mostrarUsuarioVencendo();
    } else if(pontosDoUsuario < pontosDoComputador){
        mostrarUsuarioPerdendo();
    } else {
        mostrarJogoEmpatado();
    }

}


function onPapelClick(){
    jokenpo(PAPEL);
}

function onTesouraClick() {
    jokenpo(TESOURA);
}

function onPedraClick(){
    jokenpo(PEDRA);
}

imgPapel.addEventListener('click', onPapelClick);
imgTesoura.addEventListener('click', onTesouraClick);
imgPedra.addEventListener('click', onPedraClick);


