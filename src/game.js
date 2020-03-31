import Board from "/src/board";
import InputHandler from "/src/input"

const GAMESTATE = {
    MENU: 0,
    RUNNING: 1,
    FINISHED: 2
};

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.board = null;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAMESTATE.MENU ;

        new InputHandler(this);
    }

    start() {
        if (this.gameState !== GAMESTATE.MENU && this.gameState !== GAMESTATE.FINISHED) {
            return;
        }

        this.gameState = GAMESTATE.RUNNING;
        this.board = new Board(this);
    }

    win() {
        if (this.gameState !== GAMESTATE.RUNNING) {
            return;
        }
        this.gameState = GAMESTATE.FINISHED;
    }

    draw(ctx) {
        if (this.gameState === GAMESTATE.MENU) {
            this._drawMenuGame(ctx);
        } else if (this.gameState === GAMESTATE.RUNNING) {
            this._drawRunningGame(ctx);
        } else if (this.gameState === GAMESTATE.FINISHED) {
            this._drawMenuWinnerGame(ctx);
        }
    }

    _drawRunningGame(ctx) {
        // black = rgba(27, 38, 44, 1)
        // blue = rgba(15, 76, 129, 1)
        // orange = rgba(237, 102, 99, 1)
        // cool orange = rgba(255, 163, 114, 1)

        this.board.draw(ctx);
    }

    _drawMenuGame(ctx) {
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(27, 38, 44, 1)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(
            "Press SPACEBAR To Start",
            this.gameWidth / 2,
            this.gameHeight / 2
        );
    }

    _drawMenuWinnerGame(ctx) {
        ctx.rect(0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(27, 38, 44, 1)";
        ctx.fill();

        ctx.font = "60px Arial";
        ctx.fillStyle = "gold";
        ctx.textAlign = "center";
        ctx.fillText(
            "You Win!",
            this.gameWidth / 2,
            this.gameHeight / 2
        );

        ctx.font = "16px Arial";
        ctx.fillStyle = "white";

        let movesToWin = this.board !== null ? this.board.moves : 0;

        ctx.fillText(
            "Moves .................................... " + movesToWin,
            this.gameWidth - (this.gameWidth / 2),
            this.gameHeight - (this.gameHeight / 4)
        );

        ctx.font = "12px Arial";
        ctx.fillStyle = "lime";
        ctx.fillText(
            "(Press SPACEBAR to play again)",
            this.gameWidth - (this.gameWidth / 2),
            this.gameHeight - (this.gameHeight / 8)
        );
    }

    update(deltaTime) {
        if (this.gameState === GAMESTATE.RUNNING) {
            this.board.update(deltaTime);
        }
    }
}