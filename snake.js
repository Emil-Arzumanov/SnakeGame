export const SNAKE_SPEED = 1;
const snakeBody = [
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}
];

export function update() {
};

export function draw (gameBoard) {
    snakeBody.forEach(segment => {
        const snakePart = document.createElement("div");
        snakePart.style.gridRowStart = segment.x;
        snakePart.style.gridColumnStart = segment.y;
        snakePart.className = "snake";
        gameBoard.append(snakePart);
    });
};