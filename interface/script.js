// Script para mudar a cor de fundo ao clicar no botão
document.getElementById("changeColorBtn").addEventListener('click', function() {
    const colors = ['#f0f0f0', '#ffcccc', '#d3ffce', '#cceeff', '#f8c0f0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
  