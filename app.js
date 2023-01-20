let pontosDoUsuario = 0
let pontosDoComputador = 0

const USUARIO = 'Usuário';
const COMPUTADOR = 'Computador';
const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";
const jogadasPossiveis = [PAPER, ROCK, SCISSORS];

const userScore = document.getElementById('userScore')
const computerScore = document.getElementById('compScore')
const paperImg = document.getElementById('paperImg') 
const rockImg = document.getElementById('rockImg') 
const scissorsImg = document.getElementById('scissorsImg')
const result_p = document.getElementById('result')
const scores_p = document.getElementById('scores')

function quemEstaGanhando(resultadoUsuario, resultadoComputador) {
  
  if(resultadoUsuario > resultadoComputador){
    return USUARIO;
  } else if ( resultadoUsuario < resultadoComputador) {
    return COMPUTADOR
  } else {
    return undefined;
  }

}


function alertarVitoriaDoUsuario(){};

function alertarVitoriaDoComputador(){};

function alertarEmpate(){};

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

function quemVenceu(escolhaUsuario, escolhaComp){

  const combinacao = escolhaUsuario + escolhaComp;

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

// function destaqueBotao(jogado, resultado){
  
//   // Capturo o botão clicado...
//   const botaoClicado = document.getElementById(jogado + 'Button');
  
//   if(resultado == 1){
//     botaoClicado.classList.add("green-glow");
//     // setTimeout(() => {
//     //   botaoClicado.classList.remove("green-glow")
//     // }, 500);
//   } else if(resultado == -1){
//     botaoClicado.classList.add("red-glow");
//     // setTimeout(() => {
//     //   botaoClicado.classList.remove("red-glow")
//     // }, 500);
//   }
// }






