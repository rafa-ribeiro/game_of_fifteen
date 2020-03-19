import Piece from "/src/piece";

export default class Board {

    constructor(game) {
        this.boardSpaces = []
        this.piecesList = [];

        let pieceWidth = 80;
        let pieceHeight = 80;

        this.boardMatrix = [];

        this.rowEmptyPiece = null;
        this.columnEmptyPiece = null;

        this.getEmptySpace = function() {
            return this.boardMatrix[this.rowEmptyPiece][this.columnEmptyPiece];
        }

        emptyBoard.forEach((row, rowIndex) => {

            row.forEach((pieceValue, columnIndex) => {
                let position = {x: 10 + (columnIndex * pieceWidth + (10 * columnIndex)), y: 10 + (rowIndex * pieceHeight + (10 * rowIndex))};
                this.boardSpaces.push(new Piece(game, pieceValue, position, pieceWidth, pieceHeight));
            });
        });

        templateBoard.forEach((row, rowIndex) => {

            let piecesRow = []

            row.forEach((pieceValue, columnIndex) => {
                let position = {x: 10 + (columnIndex * pieceWidth + (10 * columnIndex)), y: 10 + (rowIndex * pieceHeight + (10 * rowIndex))};
                
                let piece = new Piece(game, pieceValue, position, pieceWidth, pieceHeight);
                
                this.piecesList.push(piece);

                piecesRow.push(piece);

                if (pieceValue === 0) {
                    this.rowEmptyPiece = rowIndex;
                    this.columnEmptyPiece = columnIndex;
                }
            });

            this.boardMatrix.push(Array.from(piecesRow));
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

    update(deltaTime) {
        this.piecesList.forEach(piece => piece.update(deltaTime));
    }

    moveLeft() {
        let emptySpace = this.getEmptySpace();

        let newEmptySpaceColumn = this.columnEmptyPiece + 1;
        let pieceToMove = this.boardMatrix[this.rowEmptyPiece][newEmptySpaceColumn];

        if (pieceToMove) {
            pieceToMove.moveLeft();
        }
    }

    moveRight() {
        let emptySpace = this.getEmptySpace();

        let newEmptySpaceColumn = this.columnEmptyPiece - 1;
        let pieceToMove = this.boardMatrix[this.rowEmptyPiece][newEmptySpaceColumn];
        if (pieceToMove) {
            pieceToMove.moveRight();
        }
        
    }

    updateBoardMatrix(pieceToUpdate) {
        this.boardMatrix[this.rowEmptyPiece][this.columnEmptyPiece] = pieceToUpdate;

        // TODO: Continuar amanhã, colocar a posição na matriz dentro de Piece tbm ->[row][column] para facilitar a atualização da matriz principal do jogo

        this.boardMatrix[this.rowEmptyPiece][this.newEmptySpaceColumn] = emptySpace;
        this.columnEmptyPiece = newEmptySpaceColumn;
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
