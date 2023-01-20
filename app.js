let pontosDoUsuario = 0
let pontosDoComputador = 0

const USUARIO = 'Usuário';
const COMPUTADOR = 'Computador';
const PAPEL = "paper";
const PEDRA = "rock";
const TESOURA = "scissors";
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

function quemEstaGanhando(resultadoUsuario, resultadoComputador) {
  
  if(resultadoUsuario > resultadoComputador){
    return USUARIO;
  } else if ( resultadoUsuario < resultadoComputador) {
    return COMPUTADOR
  } else {
    return undefined;
  }

}

function alertarVitoriaDoUsuario(){
  audioDaVitoria.pause();
  audioDaVitoria.currentTime = 0;
  audioDaVitoria.play();
};

function alertarVitoriaDoComputador(){
  audioDaDerrota.pause();
  audioDaDerrota.currentTime = 0;
  audioDaDerrota.play();
};

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

function mostrarUsuarioVencendo(){
  pPlacar.classList = ""
  pPlacar.classList.add('green-glow')
  pPlacar.style.color = "#26ff63"
}

function mostrarComputadorVencendo(){
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

function jokenpo(jogadaDoUsuario) {

  const jogadaDoComputador = jogadaAleatoria();
  mostrarJogadaDoComputador(jogadaDoComputador);

  let vencedor = quemVenceu(jogadaDoUsuario, jogadaDoComputador)
  
  if(vencedor == USUARIO){
    pontosDoUsuario++;
    alertarVitoriaDoUsuario();
  } else if(vencedor == COMPUTADOR) {
    pontosDoComputador++;
    alertarVitoriaDoComputador();
  } else {
    alertarEmpate();
  }

  if(pontosDoUsuario > pontosDoComputador){
    mostrarUsuarioVencendo();
  } else if(pontosDoComputador > pontosDoUsuario){
    mostrarComputadorVencendo();
  } else {
    mostrarJogoEmpatado();
  }

  atualizarPlacar(pontosDoUsuario, pontosDoComputador);

}

function quemVenceu(jogadaDoUsuario, jogadaDoComputador){

  const combinacao = jogadaDoUsuario + jogadaDoComputador;

  switch(combinacao){
    
    // vitória do usuário: paperrock; rockscissors; scissorspaper
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      return USUARIO;
    
      // derrota do usuário: rockpaper, scissorsrock, paperscissors
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      return COMPUTADOR

    // empates
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      return undefined;
    
  }
}

function jogadaAleatoria(){
  let n = (Math.floor(Math.random() * 3));
  return jogadasPossiveis[n];
}

function onPaperImgClick(){
  jokenpo(PAPEL);
}

function onRockImgClick(){
  jokenpo(PEDRA);
}

function onScissorsImgClick(){
  jokenpo(TESOURA);
}

imgPapel.addEventListener("click", onPaperImgClick);
imgPedra.addEventListener("click", onRockImgClick);
imgTesoura.addEventListener("click", onScissorsImgClick);

