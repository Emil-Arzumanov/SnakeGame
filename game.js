let previousRenderTime;
const SNAKE_SPEED = 2;

function main(currentTime) {
    window.requestAnimationFrame(main);
    console.log(currentTime);
}

window.requestAnimationFrame(main)