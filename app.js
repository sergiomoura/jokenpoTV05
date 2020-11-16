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

/*
// E se o elemento não tiver um ID? Use seletores CSS!!!
// querySelector: Seleciona o primeiro elemento que satisfaz o seletor passado
// querySelectorAll: Selecionar TODOS os elementos que satisfizerem o seletor.
const buttonsContainer = document.querySelector("div");
console.log(buttonsContainer);


// Imprimindo tooodo elemento...
console.log(paperButton);

// Capturar um determinado atributo desse elemento
console.log(paperButton.getAttribute("alt"));

// Alterando um atributo
// Façam com que o src do paperButton seja o ícone de pedra (./images/rock.png)
paperButton.setAttribute("src","./images/rock.png");
*/