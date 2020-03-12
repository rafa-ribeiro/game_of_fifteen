import Piece from "/src/piece";

export default class Board {

    constructor(game) {
        this.boardSpaces = []
        this.piecesList = [];

        let pieceWidth = 80;
        let pieceHeight = 80;

        this.boardMatrix = [];

        this.emptyPiece = null;

        emptyBoard.forEach((row, rowIndex) => {

            row.forEach((pieceValue, columnIndex) => {
                let position = {x: 10 + (columnIndex * pieceWidth + (10 * columnIndex)), y: 10 + (rowIndex * pieceHeight + (10 * rowIndex))};
                this.boardSpaces.push(new Piece(pieceValue, position, pieceWidth, pieceHeight));
            });
        });

        templateBoard.forEach((row, rowIndex) => {

            row.forEach((pieceValue, columnIndex) => {
                let position = {x: 10 + (columnIndex * pieceWidth + (10 * columnIndex)), y: 10 + (rowIndex * pieceHeight + (10 * rowIndex))};
                this.piecesList.push(new Piece(pieceValue, position, pieceWidth, pieceHeight));

                if (pieceValue === 0) {
                    this.emptyPiece = {x:rowIndex, y:columnIndex};
                }
            });

            this.boardMatrix.push(Array.from(row));
        });
    }

    draw(ctx) {
        this.boardSpaces.forEach(space => {
            space.draw(ctx);
        });

        this.piecesList.forEach(piece => {
            piece.draw(ctx);
        });
    }
} 

const emptyBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const templateBoard = [
    [1, 2, 8, 5],
    [9, 7, 13, 12],
    [15, 14, 6, 11],
    [3, 0, 10, 4]
];
