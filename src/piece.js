CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    this.beginPath();
    this.moveTo(x + radius, y);
    this.arcTo(x + width, y, x + width, y + height, radius);
    this.arcTo(x + width, y + height, x, y + height, radius);
    this.arcTo(x, y + height, x, y, radius);
    this.arcTo(x, y, x + width, y, radius);
    this.closePath();
    return this;
  }

export default class Piece {

    constructor(game, value, rowIndex, columnIndex) {
        this.game = game;
        this.value = value;

        this.width = game.settings.pieceWidth;
        this.height = game.settings.pieceHeight;
        this.gapBetweenPieces = game.settings.gapBetweenPieces;

        // Piece`s position on board
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;

        this.position = null;
        this.updateCanvasPosition();

        // To move piece
        this.speed = 0;
        this.maxSpeed = game.settings.pieceMaxSpeed;

        this.isMovingX = false;
        this.isMovingY = false;
    }

    updateCanvasPosition() {
        this.position = {
            x: this.gapBetweenPieces + (this.columnIndex * this.width + (this.gapBetweenPieces * this.columnIndex)), 
            y: this.gapBetweenPieces + (this.rowIndex * this.height + (this.gapBetweenPieces * this.rowIndex))
        };
    }

    draw(ctx, emptySpace) {
        let isEmptySpace = emptySpace === 'undefined' ? false : emptySpace

        if (isEmptySpace) {
            ctx.roundRect(this.position.x, this.position.y, this.width, this.height, 12);
            ctx.fillStyle = this.game.settings.emptyPieceColor;
            ctx.fill();
            return;
        }

        let isZero = this.value === 0;
        if (!isZero) {
            ctx.roundRect(this.position.x, this.position.y, this.width, this.height, 10);
            ctx.fillStyle = this.game.settings.pieceColor;
            ctx.fill();

            ctx.font = this.game.settings.fontPieceType;
            ctx.fillStyle = this.game.settings.fontPieceColor;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            let x = this.position.x + (this.width / 2);
            let y = this.position.y + (this.height * 0.50);
            ctx.fillText(this.value, x, y);
        }   
    }

    moveLeft() {
        this._moveHorizontally();
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this._moveHorizontally();
        this.speed = this.maxSpeed;
    }

    _moveHorizontally() {
        this.isMovingX = true;
        this.isMovingY = false; 
    }

    moveDown() {
        this._moveVertically();
        this.speed = this.maxSpeed;
    }

    moveUp() {
        this._moveVertically();
        this.speed = -this.maxSpeed;
    }

    _moveVertically() {
        this.isMovingX = false;
        this.isMovingY = true; 
    }

    _stopMoving() {
        this.isMovingX = false;
        this.isMovingY = false;
        this.speed = 0;
    }

    update(deltaTime) {

        let hasArrived = false;

        if (this.isMovingX) {
            let emptySpace = this.game.board.emptySpace;

            this.position.x = this.position.x + this.speed;

            if (this.speed > 0) {
                hasArrived = this.position.x >= emptySpace.position.x;
            } else if (this.speed < 0) {
                hasArrived = this.position.x <= emptySpace.position.x;
            }

        } else if (this.isMovingY) {
            let emptySpace = this.game.board.emptySpace;

            this.position.y = this.position.y + this.speed;

            if (this.speed > 0) {
                hasArrived = this.position.y >= emptySpace.position.y;
            } else if (this.speed < 0) {
                hasArrived = this.position.y <= emptySpace.position.y;
            }
        }

        if (hasArrived) {
            this._stopMoving();
            this.game.board.updateBoard(this);
        }
    }
}