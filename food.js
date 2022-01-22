import {growSnake,onSnake,increaseScore,SNAKE_GROWS,compareCoords} from './snake.js';

export let foodCoord = {x: 15, y: 15};

function changeFoodCoord() {
    let newFoodCoord;
    while (newFoodCoord == null || onSnake(newFoodCoord)) {
        newFoodCoord = randomPosition();
    }
    return newFoodCoord;
}

function randomPosition() {
    return {
        x: Math.floor(Math.random() * 21)+1,
        y: Math.floor(Math.random() * 21)+1
    }
};

export function update() {
    if (onSnake(foodCoord)) {
        growSnake(foodCoord);
        foodCoord = changeFoodCoord();
    }
};

export function draw(gameBoard) {
    const food = document.createElement("div");
    food.style.gridRowStart = foodCoord.y;
    food.style.gridColumnStart = foodCoord.x;
    food.className = "food";
    gameBoard.append(food);
};