let contador = 0;
const contadorEl = document.getElementById("contador");
const botao = document.getElementById("botao");

window.onload = () => {
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;
  const larguraBotao = botao.offsetWidth;
  const alturaBotao = botao.offsetHeight;

  const centroEsquerda = (larguraJanela - larguraBotao) / 2;
  const centroTopo = (alturaJanela - alturaBotao) / 2;

  botao.style.left = `${centroEsquerda}px`;
  botao.style.top = `${centroTopo}px`;
};

function moverBotao(event) {
  event.stopPropagation();

  contador++;
  contadorEl.textContent = contador;

  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;
  const larguraBotao = botao.offsetWidth;
  const alturaBotao = botao.offsetHeight;

  const limiteEsquerda = 100;
  const limiteTopo = 100;
  const limiteDireita = larguraJanela - larguraBotao - 100;
  const limiteInferior = alturaJanela - alturaBotao - 100;

  const novaEsquerda = Math.random() * (limiteDireita - limiteEsquerda) + limiteEsquerda;
  const novoTopo = Math.random() * (limiteInferior - limiteTopo) + limiteTopo;

  botao.style.left = `${novaEsquerda}px`;
  botao.style.top = `${novoTopo}px`;
}

document.body.addEventListener("click", function () {
  contador = 0;
  contadorEl.textContent = contador;
}); 

window.onload = () => {
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;
  const larguraBotao = botao.offsetWidth;
  const alturaBotao = botao.offsetHeight;

  const centroEsquerda = (larguraJanela - larguraBotao) / 2;
  const centroTopo = (alturaJanela - alturaBotao) / 2;

  botao.style.left = `${centroEsquerda}px`;
  botao.style.top = `${centroTopo}px`;

};
