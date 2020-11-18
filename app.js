// Capturem:
// - Os três botões
// - Os containers de numeros do placar
// - O container do placar
// - O botão de reset

const paperButton = document.getElementById('paperButton');
const rockButton =  document.getElementById('rockButton');
const scissorsButton = document.getElementById('scissorsButton');
const scores = document.getElementById("scores");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const resetButton = document.getElementById("resetButton");


paperButton.onclick = onButtonClick;
rockButton.onclick = onButtonClick;
scissorsButton.onclick = onButtonClick;

let nVitoriasUsuario = 0;
let nVitoriasComputador = 0;

function onButtonClick(evento){
  
  // Capturar em forma de string a jogada do usuário
  let jogadaDoUsuario = evento.target.getAttribute('id').replace('Button','');
  console.log('Jogada usuário:', jogadaDoUsuario);

  // Gerar uma jogada do computador (aleatório)
  let nAleatorio = Math.floor(3*Math.random());
  let jogadasPossiveis = ["paper", "rock", "scissors"];
  let jogadaDoComputador = jogadasPossiveis[nAleatorio]
  console.log('Jogada computador:', jogadaDoComputador);

  // Descobrir quem ganhou e guardar em variável o número de vitorias de cada um
  // nVitoriasUsuario x nVitoriasComputador
  switch (jogadaDoUsuario + jogadaDoComputador) {

    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      nVitoriasUsuario++;
      console.log("USUÁRIO GANHOU");
      break;

    case "paperscissors":
    case "rockpaper":
    case "scissorsrock":
      nVitoriasComputador++;
      console.log("COMPUTADOR GANHOU");
      break;
  
    default:
      console.log("DEU EMPATE!");
      break;
  }

  // Exibir o placar do jogo
  userScore.innerText = nVitoriasUsuario;
  compScore.innerText = nVitoriasComputador;

}

/*
switch (diaDaSemana) {
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
  case "sexta":
    console.log("tem aula");
    break;

  case "sábado":
  case "domingo":
    console.log("NÃO TEM AULA");
    break;

  default:
    console.log("Erro: não é um dia válido")
    break;
}


// E se o elemento não tiver um ID? Use seletores CSS!!!
// querySelector: Seleciona o primeiro elemento que satisfaz o seletor passado
// querySelectorAll: Selecionar TODOS os elementos que satisfizerem o seletor.
const buttonsContainer = document.querySelector("div.azul");
console.log(buttonsContainer);


// Imprimindo tooodo elemento...
console.log(paperButton);

// Capturar um determinado atributo desse elemento
console.log(paperButton.getAttribute("alt"));

// Alterando um atributo
// Façam com que o src do paperButton seja o ícone de pedra (./images/rock.png)
paperButton.setAttribute("src","./images/rock.png");

// Alterando a cor do fundo da página quando ela é clicada
document.querySelector('body').onclick = () => {
  document.querySelector('body').style.backgroundColor = "#F00";
}

*/