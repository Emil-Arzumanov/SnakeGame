import {SNAKE_SPEED as SNAKE_SPEED,draw as drawSnake,update as updateSnake} from './snake.js';

let previousTime = 0;

function main(currentTime) {
    let currentRenderTime = (currentTime - previousTime)/1000;
    window.requestAnimationFrame(main);
    if (currentRenderTime < 1/SNAKE_SPEED) return;
    previousTime = currentTime;

    update();
    draw();
}

function draw() {
    drawSnake(gameBoard);
};

function update() {
    updateSnake(gameBoard);
};

window.requestAnimationFrame(main);