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
//metodo que cria numeros aleatorios para reposicionar a comida da cobra

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}


//funcao de define o canvas , desenha e define cor
function criarBG() {
    context.fillStyle = "white";//background
    context.fillRect(0, 0, 16 * box, 16 * box);//desenha o retangulo onde acontece o jogo
}//quatro parametros x,y , altura, largura



//cobrinha sera um array de coordenadas , adiciona um elemento e retira o ultimo

function criarCobrinha() { 
    for (i=0; i < snake.length; i++){//FOR VAR PERCORRER TODO TAMANHO DO ARRAY, INCREMENTANDO
        context.fillStyle = "darkcyan";
    context.fillRect(snake[i].x, snake[i].y, box, box);
    } 
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update);//evento de clique no teclado passando o codigo para variavel uptade

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";   
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}


function iniciarJogo() {
    
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    //loop for que verifica se a posicao zero cabeca se chocar com posicao 1 corpo , jogo ira parar=fim de jogo

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert("Game Over :(");
        }
    }
    
    criarBG();//chamando a funcao
    criarCobrinha();
    drawFood();
    let snakeX = snake[0].x;//criar a posicao da cobrinha x,y, para setar os movimentos e ter um ponto de partida
    let snakeY = snake[0].y;


    if (direction == "right") snakeX += box;//criando as coordenadas da cobrinha determinando o seu caminho, passando as condicionais
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;
    
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }
       
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead); //metodo acrescenta no primeiro elemento
}

let jogo = setInterval (iniciarJogo,200);//passando intervalo de 100milisegundos, pra iniciar jogo renovar e dar continuidade sem travar 

//iniciarJogo();
