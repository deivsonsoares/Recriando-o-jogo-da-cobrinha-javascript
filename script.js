let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
//renderiza os cacontecimentos dentro do canvas
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box //APOS ISSO POSSIBILITA UTILIZAR O FOR NA FUNCAO  CRIAR COBRINHA
}
//funcao de define o canvas , desenha e define cor
function criarBG() {
    context.fillStyle = "lightgreen";//background
    context.fillRect(0, 0, 16 * box, 16 * box);//desenha o retando onde acontece o jogo
}//quatro parametros x,y , altura, largura



//cobrinha sera um array de coordenadas , adiciona um elemento e retira o ultimo

function criarCobrinha() { 
    for (i=0; i < snake.length; i++){//FOR VAR PERCORRER TODO TAMANHO DO ARRAY, INCREMENTANDO
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
criarBG();//chamando a funcao
criarCobrinha();