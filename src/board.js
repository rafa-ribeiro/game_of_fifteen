import Piece from "/src/piece";

export default class Board {

    constructor(game) {
        this.pieces = [];

        let pieceWidth = 80;
        let pieceHeight = 80;

        templateBoard.forEach((row, rowIndex) => {
            row.forEach((pieceValue, pieceIndex) => {
                let position = {x: 10 + (pieceIndex * pieceWidth + (10 * pieceIndex)), y: 10 + (rowIndex * pieceHeight + (10 * rowIndex))};
                this.pieces.push(new Piece(pieceValue, position, pieceWidth, pieceHeight));
            });
        });
    }

} 

// const templateBoard = [
//     [0, 0]
// ];

const templateBoard = [
    [1, 2, 8, 5],
    [9, 7, 13, 12],
    [15, 14, 6, 11],
    [3, 0, 10, 4]
];
