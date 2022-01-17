export const foodCoord = {x: 15, y: 15};

export function update() {

};

export function draw(gameBoard) {
    const food = document.createElement("div");
    food.style.gridRowStart = foodCoord.y;
    food.style.gridColumnStart = foodCoord.x;
    food.className = "food";
    gameBoard.append(food);
};