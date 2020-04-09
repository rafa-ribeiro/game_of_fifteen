import Game from "/src/game";
import Scoreboard from "./scoreboard";


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

let scoreboardCanvas = document.getElementById("scoreboard");
let scoreboardCtx = scoreboardCanvas.getContext("2d");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const SCOREBOARD_WIDTH = scoreboardCanvas.width;
const SCOREBOARD_HEIGHT = scoreboardCanvas.height;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let scoreboard = new Scoreboard(game, SCOREBOARD_WIDTH, SCOREBOARD_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // clearRect faz com que ao se redesenhar um novo rect na tela, os anteriores do mesmo sejam limpos da tela
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // game.update(deltaTime);
    game.draw(ctx);
    game.update(deltaTime);

    scoreboardCtx.clearRect(0, 0, SCOREBOARD_WIDTH, SCOREBOARD_HEIGHT);
    scoreboard.draw(scoreboardCtx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);