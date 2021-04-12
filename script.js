const botao = document.querySelector('#criar-tarefa');
let ol = document.getElementById('lista-tarefas');
let entrada = document.getElementById('texto-tarefa');
let comandos = document.getElementById('comandos');

//cria elementos
function tags(elemento) {
  return document.createElement(elemento);
}
//cria a li e adiciona como filha de ol
function criarLi(texto) {
  let li = tags('li');
  li.setAttribute('index', texto);
  li.appendChild(document.createTextNode(entrada.value));
  ol.appendChild(li);
  return entrada.value = '';
}
//Adiciona o texto criado acionando o botao Adicionar
function adicionar() {
  if (entrada.value != '') {
    texto = entrada;
    idTexto = ol.childElementCount;
    li = criarLi(idTexto);
    
  }
}

//Contador do botão remover que busca o index a ser removido
function removeItem(idTexto) {
  for (let index = 0; index < ol.children.length; index += 1) {
    if (ol.children[index].getAttribute('itens') == idTexto) {
      ol.children[index].remove();
    }
  }
}


function botaoRemover(idTexto) {
  let botaoRemove = document.getElementById('remover');
  botaoRemove.setAttribute('onclick', 'removeItem('+idTexto+')');
  return botaoRemove;
}


window.onload = function carregar() {

};
