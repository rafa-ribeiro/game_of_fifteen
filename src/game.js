import Board from "/src/board";
import InputHandler from "/src/input"

export default class Game {

    constructor() {
        this.board = new Board(this);

        new InputHandler(this);
    }

    draw(ctx) {
        this.board.draw(ctx);
    }

    update(deltaTime) {
        this.board.update(deltaTime);
    }
}