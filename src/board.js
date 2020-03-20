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

        this.emptySpace = null;

        this.isMoving = false;

        emptyBoard.forEach((row, rowIndex) => {
            row.forEach((pieceValue, columnIndex) => {
                this.boardSpaces.push(new Piece(game, pieceValue, pieceWidth, pieceHeight, rowIndex, columnIndex));
            });
        });

        templateBoard.forEach((row, rowIndex) => {

            let piecesRow = []

            row.forEach((pieceValue, columnIndex) => {
                let piece = new Piece(game, pieceValue, pieceWidth, pieceHeight, rowIndex, columnIndex);
                this.piecesList.push(piece);
                piecesRow.push(piece);

                if (pieceValue === 0) {
                    this.emptySpace = piece;
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
        if (!this.isMoving) {
            this.isMoving = true;

            let newEmptySpaceColumn = this.emptySpace.columnIndex + 1;
            let pieceToMove = this.boardMatrix[this.emptySpace.rowIndex][newEmptySpaceColumn];

            if (pieceToMove) {
                pieceToMove.moveLeft();
            } else {
                this.isMoving = false;
            }
        }
    }

    moveRight() {
        if (!this.isMoving) {
            this.isMoving = true;

            let newEmptySpaceColumn = this.emptySpace.columnIndex - 1;
            let pieceToMove = this.boardMatrix[this.emptySpace.rowIndex][newEmptySpaceColumn];

            if (pieceToMove) {
                pieceToMove.moveRight();
            } else {
                this.isMoving = false;
            }
        }
    }

    moveUp() {
        if (!this.isMoving) {
            this.isMoving = true;

            let rowIdxPieceToMove = this.emptySpace.rowIndex + 1;
            let pieceToMove = this.boardMatrix[rowIdxPieceToMove][this.emptySpace.columnIndex];

            if (pieceToMove) {
                pieceToMove.moveUp();
            } else {
                this.isMoving = false;
            }
        }
    }

    moveDown() {
        if (!this.isMoving) {
            this.isMoving = true;

            let rowIdxPieceToMove = this.emptySpace.rowIndex - 1;
            let pieceToMove = this.boardMatrix[rowIdxPieceToMove][this.emptySpace.columnIndex];

            if (pieceToMove) {
                pieceToMove.moveDown();
            } else {
                this.isMoving = false;
            }
        }
    }

    updateBoardMatrix(pieceToUpdate) {
        let emptyRowIndex = this.emptySpace.rowIndex;
        let emptyColumnIndex = this.emptySpace.columnIndex;

        let pieceRowIndex = pieceToUpdate.rowIndex;
        let pieceColumnIndex = pieceToUpdate.columnIndex;

        pieceToUpdate.rowIndex = emptyRowIndex;
        pieceToUpdate.columnIndex = emptyColumnIndex;
        this.boardMatrix[emptyRowIndex][emptyColumnIndex] = pieceToUpdate;
        pieceToUpdate.updateCanvasPosition();

        this.emptySpace.rowIndex = pieceRowIndex;
        this.emptySpace.columnIndex = pieceColumnIndex;
        this.boardMatrix[pieceRowIndex][pieceColumnIndex] = this.emptySpace;
        this.emptySpace.updateCanvasPosition();

        this.isMoving = false;
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
