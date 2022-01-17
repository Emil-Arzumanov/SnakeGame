import {SNAKE_SPEED as SNAKE_SPEED, draw as drawSnake, update as updateSnake} from './snake.js';
import {draw as drawFood, update as updateFood} from './food.js';

let previousTime = 0;
let snakeGridRow;
let snakeGridColumn;

function main(currentTime) {
    if (snakeGridRow < 1 || snakeGridRow > 21 || snakeGridColumn < 1 || snakeGridColumn > 21) {
        alert("You lose! :(")
        document.location.reload();
        return;
    }
    let currentRenderTime = (currentTime - previousTime) / 1000;
    window.requestAnimationFrame(main);
    if (currentRenderTime < 1 / SNAKE_SPEED) return;
    previousTime = currentTime;

    update();
    draw();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    snakeGridRow = document.querySelectorAll(".snake")[0].style.gridRowStart;
    snakeGridColumn = document.querySelectorAll(".snake")[0].style.gridColumnStart;
};

function update() {
    updateSnake(gameBoard);
    updateFood(gameBoard);
};

window.requestAnimationFrame(main);