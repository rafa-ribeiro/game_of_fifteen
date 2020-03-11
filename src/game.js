import Board from "/src/board";

export default class Game {

    constructor() {
        this.board = new Board();
    }

    draw(ctx) {
        this.board.pieces.forEach(piece => {
            piece.draw(ctx);
        });

    }

}