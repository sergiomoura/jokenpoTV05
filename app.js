let pontosDoUsuario = 0
let pontosDoComputador = 0

const USUARIO = 'Usuário';
const COMPUTADOR = 'Computador';
const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";
const jogadasPossiveis = [PAPER, ROCK, SCISSORS];

const userScore = document.getElementById('userScore')
const compChoice = document.getElementById('compChoice');
const computerScore = document.getElementById('compScore')
const paperImg = document.getElementById('paperImg') 
const rockImg = document.getElementById('rockImg') 
const scissorsImg = document.getElementById('scissorsImg')
const result_p = document.getElementById('result')
const scores_p = document.getElementById('scores')
const somDaVitoria = document.getElementById('somDaVitoria');
const somDaDerrota = document.getElementById('somDaDerrota');

function quemEstaGanhando(resultadoUsuario, resultadoComputador) {
  
  if(resultadoUsuario > resultadoComputador){
    return USUARIO;
  } else if ( resultadoUsuario < resultadoComputador) {
    return COMPUTADOR
  } else {
    return undefined;
  }

}


function alertarVitoriaDoUsuario(jogadaDoUsuario, jogadaDoComputador){
  somDaVitoria.pause();
  somDaVitoria.currentTime = 0;
  somDaVitoria.play();
};

function alertarVitoriaDoComputador(){
  somDaDerrota.pause();
  somDaDerrota.currentTime = 0;
  somDaDerrota.play();
};

function alertarEmpate(){};

function mostrarJogadaDoComputador(jogadaDoComputador){
  let img = document.createElement('img');
  if (jogadaDoComputador == PAPER) {
    img.src = './images/paper.png';
  } else if (jogadaDoComputador == ROCK) {
    img.src = './images/rock.png';
  } else {
    img.src = './images/scissors.png';
  }
  compChoice.innerHTML = '';
  compChoice.appendChild(img);
}

function mostrarUsuarioVencendo(){
  scores_p.classList = ""
  scores_p.classList.add('green-glow')
  scores_p.style.color = "#26ff63"
}

function mostrarComputadorVencendo(){
  scores_p.classList = ""
  scores_p.classList.add('red-glow')
  scores_p.style.color = "#fc121b";
}

function mostrarJogoEmpatado(){
  scores_p.classList = ""
  scores_p.style.color = "#ffffff";
}

function atualizarPlacar(pontosDoUsuario, pontosDoComputador){
  userScore.innerHTML = pontosDoUsuario;
  computerScore.innerText = pontosDoComputador;
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
  jokenpo(PAPER);
}

function onRockImgClick(){
  jokenpo(ROCK);
}

function onScissorsImgClick(){
  jokenpo(SCISSORS);
}

paperImg.addEventListener("click", onPaperImgClick);
rockImg.addEventListener("click", onRockImgClick);
scissorsImg.addEventListener("click", onScissorsImgClick);

