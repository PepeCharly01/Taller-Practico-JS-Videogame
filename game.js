const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if (window.innerHeight >= window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('Width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = (canvasSize / 10) - 1;

    startGame();
}

function startGame() {
    game.font = (elementsSize - 12) + 'px Vendana';
    game.textAlign = "end";

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
}