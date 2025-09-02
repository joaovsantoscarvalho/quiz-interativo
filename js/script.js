import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelctor(".caixa-perguntas");
const caixaPerguntas = document.querySelctor(".caixa-alternativas");
const caixaPerguntas = document.querySelctor(".caixa-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;

botaoIniciar.addEventListener('click', iniciarJogo);

function iniciarJogo() {
  atual = 0;
  telaInicial.style.display = 'none';
  caixaPreguntas.classList.remove(".mostrar");
  caixaAlternativas.calssList.remove(".mostrar");
  caixaResultado.classlist.remove(".mostrar");
  mostraPergunta();
}

function mostraPergunta() {};
