let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
//renderiza os cacontecimentos dentro do canvas
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box //APOS ISSO POSSIBILITA UTILIZAR O FOR NA FUNCAO  CRIAR COBRINHA
}
let direction = "right";
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
function iniciarJogo(){
    
    criarBG();//chamando a funcao
    criarCobrinha();
    let snakeX = snake[0] .x;//criar a posicao da cobrinha x,y, para setar os movimentos e ter um ponto de partida
    let snakeY = snake[0] .y;
    if (direction == "right") snakeX += box;//criando as coordenadas da cobrinha determinando o seu caminho, passando as condicionais 
    if (direction == "left") snakeY += box;
    if (direction == "up") snakeY += box;
    if (direction == "down") snakeY += box;
    
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval (iniciarJogo, 100);//passando intervalo de 100milisegundos, pra iniciar jogo renovar e dar continuidade sem travar 
