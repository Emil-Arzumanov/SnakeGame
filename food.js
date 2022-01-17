export let foodCoord = {x: 15, y: 15};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function updateFoodCoord() {
    foodCoord.x = getRandomInt(21) + 1;
    foodCoord.y = getRandomInt(21) + 1;
};

export function update() {

};

export function draw(gameBoard) {
    const food = document.createElement("div");
    food.style.gridRowStart = foodCoord.y;
    food.style.gridColumnStart = foodCoord.x;
    food.className = "food";
    gameBoard.append(food);
};