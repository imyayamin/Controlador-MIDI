function Bateria() {
  displayMessage("Era pra tocar Bateria.");
}

function Teclado() {
  displayMessage("Era pra tocar Teclado.");
}

function Acordeao() {
  displayMessage("Era pra tocar Acordeao.");
}

function Piano() {
  displayMessage("Era pra tocar Piano.");
}

function Violoncelo() {
  displayMessage("Era pra tocar Violoncelo.");
}

// Função para exibir a mensagem na tela
function displayMessage(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;  // Atualiza o conteúdo da div
}

// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function () {
  // Selecionando os botões pelos IDs
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');
  var button4 = document.getElementById('button4');
  var button5 = document.getElementById('button5');

  // Atribuindo os eventos onclick aos botões
  button1.onclick = Bateria;
  button2.onclick = Teclado;
  button3.onclick = Acordeao;
  button4.onclick = Piano;
  button5.onclick = Violoncelo;
});
