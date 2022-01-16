let previousTime = 0;
const SNAKE_SPEED = 1;

function main(currentTime) {
    let currentRenderTime = (currentTime - previousTime)/1000;
    window.requestAnimationFrame(main);
    if (currentRenderTime < 1/SNAKE_SPEED) return;
    console.log(currentTime);
    previousTime = currentTime;
}

window.requestAnimationFrame(main)