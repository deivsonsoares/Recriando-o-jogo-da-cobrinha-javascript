let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
//renderiza os cacontecimentos dentro do canvas
let box = 32;
//funcao de define o canvas , desenha e define cor
function criarBG() {
    context.fillStyle = "lightgreen";//background
    context.fillRect(0, 0, 16 * box, 16 * box);//desenha o retando onde acontece o jogo
}//quatro parametros x,y , altura, largura

criarBG();//chamando a funcao