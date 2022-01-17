import {SNAKE_SPEED as SNAKE_SPEED, draw as drawSnake, update as updateSnake} from './snake.js';
import {draw as drawFood, update as updateFood} from './food.js';

let previousTime = 0;

function main(currentTime) {
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
};

function update() {
    updateSnake(gameBoard);
    updateFood(gameBoard);
};

window.requestAnimationFrame(main);