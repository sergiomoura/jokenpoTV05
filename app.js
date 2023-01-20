let pontosDoUsuario = 0
let pontosDoComputador = 0

const USUARIO = 'Usuário';
const COMPUTADOR = 'Computador';
const PAPEL = "papel";
const PEDRA = "pedra";
const TESOURA = "tesoura";
const jogadasPossiveis = [PAPEL, PEDRA, TESOURA];

const imgPapel = document.getElementById('imgPapel') 
const imgPedra = document.getElementById('imgPedra') 
const imgTesoura = document.getElementById('imgTesoura')
const imgJogadaDocuputador = document.getElementById('compChoice');
const spanPlacarUsuario = document.getElementById('userScore')
const spanPlacarComputador = document.getElementById('compScore')
const pPlacar = document.getElementById('scores')
const audioDaVitoria = document.getElementById('audioDaVitoria');
const audioDaDerrota = document.getElementById('audioDaDerrota');

imgPapel.addEventListener("click", onImgPapelClick);
imgPedra.addEventListener("click", onImgPedraClick);
imgTesoura.addEventListener("click", onImgTesouraClick);

function onImgPapelClick(){
  jokenpo(PAPEL);
}

function onImgPedraClick(){
  jokenpo(PEDRA);
}

function onImgTesouraClick(){
  jokenpo(TESOURA);
}

function jokenpo(jogadaDoUsuario) {

  const jogadaDoComputador = jogadaAleatoria();
  mostrarJogadaDoComputador(jogadaDoComputador);

  let vencedor = quemVenceu(jogadaDoUsuario, jogadaDoComputador)
  
  if(vencedor == USUARIO){
    pontosDoUsuario++;
    alertarVitoria();
  } else if(vencedor == COMPUTADOR) {
    pontosDoComputador++;
    alertarDerrota();
  } else {
    // alertarEmpate();
  }

  if(pontosDoUsuario > pontosDoComputador){
    mostrarUsuarioVencendo();
  } else if(pontosDoComputador > pontosDoUsuario){
    mostrarUsuarioPerdendo();
  } else {
    mostrarJogoEmpatado();
  }

  atualizarPlacar(pontosDoUsuario, pontosDoComputador);

}

function jogadaAleatoria(){
  let n = (Math.floor(Math.random() * 3));
  return jogadasPossiveis[n];
}

function mostrarJogadaDoComputador(jogadaDoComputador){
  let img = document.createElement('img');
  if (jogadaDoComputador == PAPEL) {
    img.src = './images/paper.png';
  } else if (jogadaDoComputador == PEDRA) {
    img.src = './images/rock.png';
  } else {
    img.src = './images/scissors.png';
  }
  imgJogadaDocuputador.innerHTML = '';
  imgJogadaDocuputador.appendChild(img);
}

function quemVenceu(jogadaDoUsuario, jogadaDoComputador){

  const combinacao = jogadaDoUsuario + jogadaDoComputador;

  switch(combinacao){
    
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
    case PEDRA + PEDRA:
    case TESOURA + TESOURA:
    case PAPEL + PAPEL:
      return undefined;
    
  }
}

function alertarVitoria(){
  audioDaVitoria.pause();
  audioDaVitoria.currentTime = 0;
  audioDaVitoria.play();
};

function alertarDerrota(){
  audioDaDerrota.pause();
  audioDaDerrota.currentTime = 0;
  audioDaDerrota.play();
};

function quemEstaGanhando(resultadoUsuario, resultadoComputador) {
  
  if(resultadoUsuario > resultadoComputador){
    return USUARIO;
  } else if ( resultadoUsuario < resultadoComputador) {
    return COMPUTADOR
  } else {
    return undefined;
  }

}

function mostrarUsuarioVencendo(){
  pPlacar.classList = ""
  pPlacar.classList.add('green-glow')
  pPlacar.style.color = "#26ff63"
}

function mostrarUsuarioPerdendo(){
  pPlacar.classList = ""
  pPlacar.classList.add('red-glow')
  pPlacar.style.color = "#fc121b";
}

function mostrarJogoEmpatado(){
  pPlacar.classList = ""
  pPlacar.style.color = "#ffffff";
}

function atualizarPlacar(pontosDoUsuario, pontosDoComputador){
  spanPlacarUsuario.innerHTML = pontosDoUsuario;
  spanPlacarComputador.innerText = pontosDoComputador;
}











