import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
  atual = 0;
  historiaFinal =""; 
  telaInicial.style.display = 'none';
  caixaPerguntas.classList.remove("mostrar");
  caixaAlternativas.classList.remove("mostrar");
  caixaResultado.classList.remove("mostrar");
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

function mostraAlternativas() {
  for(const altrernativca of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", ()=> respostaSelecionadas(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecioonada){
  const afirmacoes = aleatorio(opcaoSelecioonada.afirmacao);
  historiaFinal += afirmacoes + " ";
  if(opcaoSelecioonada.proxima !== undefined) {
    atual = opcaoSelecioonada.proxima;
  }else {
    mostrarResultado();
    return;
  }
  mostraPergunta();
}

function mostrarResultado(){
  caixaPerguntas.textContent = '';
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classlist.add("mostrar");
  botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente() {
  atual = 0;
  historiaFinal "";
  caixaResultado.classList.remove("mostrar");
  mostraPergunta();
}

function substituiNome()c{
  for(const pergunta of perguntas) {
    pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
  }
}
substituiNome();