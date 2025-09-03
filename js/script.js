import {aleatorio} from './aleatorio';
import {perguntas} from './perguntas';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector()
const caixaAlternativas = document.querySelector()
const caixaResultado = document.querySelector()
const botaoIniciar =document.querySelector()
const telaInicial = document.querySelector()

let atual = 0;
let perguntasAtual;
let historiaFinal = "";


{
caixaPerguntas.classlist.remove(".mostrar");
caixaAlternativas.classlist.remove(".mostrar");
caixaResultado.classlist.remove(".mostrar");
mostraPergunta();
}


function mostraPergunta() {
  if(atual >= perguntas.length){
    mostrarResultado();
    return;
  }
  perguntasAtual = perguntas [atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas ();
}

function mostraAlternativas() {}

function mostrarResultado() {
  caixaPerguntas.textContent = crazi;
  textoResultado.textContent = historiaFinal
  caixaAlternativas.textContent = "";
  caixaResultado.classlist.add(".mostrar");
  btoaJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {}





