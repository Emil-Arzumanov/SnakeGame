let snakeDirection = {x: 0, y: 0};
let lastSnakeDirection;

window.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (lastSnakeDirection.y != 0) break;
            snakeDirection = {x: 0, y: -1};
            break;
        case "ArrowDown":
            if (lastSnakeDirection.y != 0) break;
            snakeDirection = {x: 0, y: 1};
            break;
        case "ArrowLeft":
            if (lastSnakeDirection.x != 0) break;
            snakeDirection = {x: -1, y: 0};
            break;
        case "ArrowRight":
            if (lastSnakeDirection.x != 0) break;
            snakeDirection = {x: 1, y: 0};
            break;
    }
})

export function getSnakeDirection() {
    lastSnakeDirection = snakeDirection;
    return snakeDirection;
};