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

        let boardGame = generateBoardGame(4, 4);

        boardGame.forEach((row, rowIndex) => {

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
            space.draw(ctx, true);
        });

        this.piecesList.forEach(piece => {
            piece.draw(ctx);
        });
    }

    update(deltaTime) {
        this.piecesList.forEach(piece => piece.update(deltaTime));
    }

    shuffleFromSolvedGame() {
        console.log("Chamei o shuffle");
        this.moveRight();
        this.moveRight();
        this.moveRight();
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
        this.updateMoves();
        this.evaluateGame();
    }

    updateMoves() {
        this.moves += 1;
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

function generateBoardGame(rows, columns) {
    let piecesValues = Array.from(Array(rows * columns).keys());
    let  boardGame = [];

    let min = 0;
    for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
        let values = [];
        for (let colIdx = 0; colIdx < columns; colIdx++) {
            let max = piecesValues.length;
            var randomIdx = Math.random() * (+max - +min) + min;
            let value = piecesValues.splice(randomIdx, 1)[0];

            values.push(value);
        }
        boardGame.push(values);
    }
    return boardGame;
}

const emptyBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const solvedBoard = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];

const winnerBoard = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0]
];
