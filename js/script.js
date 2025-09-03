import {aleatorio} from './aleatorio';
import {perguntas} from './perguntas';




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
  caixaPerguntas.textContent = 
}

function jogarNovamente() {}





