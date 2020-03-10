import Board from "/src/board";

export default class Game {

    constructor() {
        console.log("Game construtor");
        this.board = new Board();
    }

    // start() {

    // }

    draw(ctx) {
        this.board.pieces.forEach(piece => {
            piece.draw(ctx);
        });

    }

}