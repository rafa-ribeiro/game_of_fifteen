import Board from "/src/board";
import InputHandler from "/src/input"

export default class Game {

    constructor() {
        this.board = new Board();

        new InputHandler(this);
    }

    draw(ctx) {
        this.board.piecesList.forEach(piece => {
            piece.draw(ctx);
        });

    }

}