import {getSnakeDirection as getSnakeDirection} from './input.js';

export const SNAKE_SPEED = 3;
const snakeBody = [
    {x: 10, y: 11}
];

export function update() {
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = {...snakeBody[i - 1]}
    }
    snakeBody[0].x += getSnakeDirection().x;
    snakeBody[0].y += getSnakeDirection().y;
};

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakePart = document.createElement("div");
        snakePart.style.gridRowStart = segment.y;
        snakePart.style.gridColumnStart = segment.x;
        snakePart.className = "snake";
        gameBoard.append(snakePart);
    });
};