import {getSnakeDirection as getSnakeDirection} from './input.js';

export const SNAKE_SPEED = 8;
export const SNAKE_GROWS = 8;
export let snakeBody = [{x: 11, y: 11}];
export let snakeLength = 1;
export let ifSnakeAteItself = false;

export function onSnake(coords) {
    return snakeBody.some(segment => {
        return compareCoords(segment,coords);
    });
}

function ifSnakeAteItselfFunc() {
    for (let i = 1; i < snakeBody.length; i++) {
        if (compareCoords(snakeBody[0],snakeBody[i]) == true)
            return true;
    }
    return false;
};

export function compareCoords(cords1,coords2) {
    return cords1.x == coords2.x && cords1.y == coords2.y;
}


export function growSnake(foodCoord) {
    if (foodCoord.x == snakeBody[0].x && foodCoord.y == snakeBody[0].y) {
        for (let i = 0; i < SNAKE_GROWS; i++) {
            let newSnakePart = {
                x: snakeBody[snakeBody.length - 1].x - getSnakeDirection.x,
                y: snakeBody[snakeBody.length - 1].y - getSnakeDirection.y
            };
            snakeBody.push(newSnakePart);
        }
        increaseScore(SNAKE_GROWS);
    }
}

export function increaseScore(growRate) {
    snakeLength += growRate;
}

export function update() {
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = {...snakeBody[i - 1]}
    }

    snakeBody[0].x += getSnakeDirection().x;
    snakeBody[0].y += getSnakeDirection().y;
    ifSnakeAteItself = ifSnakeAteItselfFunc()
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