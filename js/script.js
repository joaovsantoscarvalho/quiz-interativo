import {aleatorio} from './aleatorio';
import {perguntas} from './perguntas';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const botaoIniciar =document.querySelector(".iniciar-bnt");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntasAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
  atual = 0;
  telaInicial.style.display = 'none';
  caixaPerguntas.classList.remove(".mostrar");
  caixaAlternativas.classList.remove(".mostrar");
  caixaResultado.classList.remove(".mostrar");
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
  caixaPerguntas.textContent = '';
  textoResultado.textContent = historiaFinal
  caixaAlternativas.textContent = "";
  caixaResultado.classlist.add(".mostrar");
  botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {}
