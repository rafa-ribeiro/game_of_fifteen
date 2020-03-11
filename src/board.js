import Piece from "/src/piece";

export default class Board {

    constructor(game) {
        this.piecesList = [];

        let pieceWidth = 80;
        let pieceHeight = 80;

        this.boardMatrix = [];

        this.emptyPiece = null;

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
} 

const templateBoard = [
    [1, 2, 8, 5],
    [9, 7, 13, 12],
    [15, 14, 6, 11],
    [3, 0, 10, 4]
];
