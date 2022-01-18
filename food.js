export let foodCoord = {x: 15, y: 15};
let arrayOfSnakeFreeY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let arrayOfSnakeFreeX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let snakeCoordsX = [];
let snakeCoordsY = [];

function getRandomWithManyExclusions(originalArray, arrayOfIndexesToExclude) {
    var rand = null;
    while (rand === null || arrayOfIndexesToExclude.includes(rand)) {
        rand = Math.round(Math.random() * (originalArray.length - 1) + 1);
    }
    return rand;
}

export function updateFoodCoord(snakeBody) {
    for (let i = 0; i < snakeBody.length; i++) {
        snakeCoordsX.push(snakeBody[i].x);
        snakeCoordsY.push(snakeBody[i].y);
    }
    foodCoord.x = getRandomWithManyExclusions(arrayOfSnakeFreeX, snakeCoordsX);
    foodCoord.y = getRandomWithManyExclusions(arrayOfSnakeFreeY, snakeCoordsY);
};

export function update() {

};

export function draw(gameBoard) {
    const food = document.createElement("div");
    food.style.gridRowStart = foodCoord.y;
    food.style.gridColumnStart = foodCoord.x;
    food.className = "food";
    gameBoard.append(food);
    snakeCoordsX = [];
    snakeCoordsY = [];
};