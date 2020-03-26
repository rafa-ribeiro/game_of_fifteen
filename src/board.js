import Piece from "/src/piece";

export default class Board {

    constructor(game) {
        this.game = game;
        this.boardSpaces = []
        this.piecesList = [];

        let pieceWidth = 80;
        let pieceHeight = 80;

        this.boardMatrix = [];
        this.moves = 0;

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
            let pieceToMove = this._getPieceToMoveBy(this.emptySpace.rowIndex, newEmptySpaceColumn);

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
            let pieceToMove = this._getPieceToMoveBy(this.emptySpace.rowIndex, newEmptySpaceColumn);

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
            let pieceToMove = this._getPieceToMoveBy(rowIdxPieceToMove, this.emptySpace.columnIndex);

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
            let pieceToMove = this._getPieceToMoveBy(rowIdxPieceToMove, this.emptySpace.columnIndex);

            if (pieceToMove) {
                pieceToMove.moveDown();
            } else {
                this.isMoving = false;
            }
        }
    }

    _getPieceToMoveBy(rowIndex, columnIndex) {
        let pieceToMove = null;

        let rowsSize = this.boardMatrix.length;
        let columnsSize = this.boardMatrix[0].length;

        let rowIdxOk = rowIndex >= 0 && rowIndex < rowsSize;
        let columnIdxOk = columnIndex >= 0 && columnIndex < columnsSize;

        if (rowIdxOk && columnIdxOk) {
            pieceToMove = this.boardMatrix[rowIndex][columnIndex];
        }

        return pieceToMove;
    }

    updateBoard(pieceToUpdate) {
        this.updateBoardMatrix(pieceToUpdate);
        this.moves += 1;
        this.evaluateGame();
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

    evaluateGame() {
        let isWinner = isWinnerBoard(this.boardMatrix);

        if (isWinner) {
            this.game.win();
        }
    }
}

function isWinnerBoard(currentBoard) {

    if (!currentBoard) {
        return false;
    }

    if (currentBoard.length !== winnerBoard.length) {
        return false;
    }

    let rowsLength = winnerBoard.length;
    let columnsLength = winnerBoard[0].length;

    for (let rowIdx = 0; rowIdx < rowsLength; rowIdx++) {
        for (let colIdx = 0; colIdx < columnsLength; colIdx++) {
            let currentPiece = currentBoard[rowIdx][colIdx];
            let valueWinnerPiece = winnerBoard[rowIdx][colIdx];

            if (currentPiece.value !== valueWinnerPiece) {
                return false;
            }
        }
    }
    return true;
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

const winnerBoard = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];
