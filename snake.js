import {getSnakeDirection as getSnakeDirection} from './input.js';
import {foodCoord as foodCoord, updateFoodCoord as changeFoodCoords} from './food.js';

export const SNAKE_SPEED = 8;
export const SNAKE_GROWS = 3;
export let snakeLength = 1;
export let snakeBody = [{x: 10, y: 11}];
let newSnakePart = {x: 0, y: 0};

export function update() {
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = {...snakeBody[i - 1]}
    }

    snakeBody[0].x += getSnakeDirection().x;
    snakeBody[0].y += getSnakeDirection().y;

    if (foodCoord.x == snakeBody[0].x && foodCoord.y == snakeBody[0].y) {
        for (let i = 0; i < SNAKE_GROWS; i++) {
            newSnakePart = {
                x: snakeBody[snakeBody.length - 1].x - getSnakeDirection.x,
                y: snakeBody[snakeBody.length - 1].y - getSnakeDirection.y
            };
            snakeBody.push(newSnakePart);
        }
        snakeLength += SNAKE_GROWS;
        changeFoodCoords(snakeBody);
    }
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