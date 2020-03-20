export default class Piece {

    constructor(game, value, width, height, rowIndex, columnIndex) {
        this.game = game;
        this.value = value;
        this.width = width;
        this.height = height;

        // Piece`s position on board
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;

        this.position = null;
        this.updateCanvasPosition();

        // To move piece
        this.speed = 0;
        this.maxSpeed = 6;

        this.isMovingX = false;
        this.isMovingY = false;
    }

    updateCanvasPosition() {
        this.position = {
            x: 10 + (this.columnIndex * this.width + (10 * this.columnIndex)), 
            y: 10 + (this.rowIndex * this.height + (10 * this.rowIndex))
        };
    }

    draw(ctx) {
        let isEmpty = this.value === 0;

        ctx.fillStyle = "rgba(38, 79, 114)";
        if (isEmpty) {
            ctx.fillStyle = "rgba(38, 79, 114, 0.4)";
        }
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        if (!isEmpty) {
            ctx.font = "40px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            let x = this.position.x + (this.width / 2);
            let y = this.position.y + (this.height / 2);
            ctx.fillText(this.value, x, y);
        }   
    }

    moveLeft() {
        this.isMovingX = true;
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.isMovingX = true;
        this.speed = this.maxSpeed;
    }

    update(deltaTime) {

        if (this.isMovingX) {
            let emptySpace = this.game.board.emptySpace;

            this.position.x = this.position.x + this.speed;

            let hasArrived = false;
            if (this.speed > 0) {
                hasArrived = this.position.x >= emptySpace.position.x;
            } else if (this.speed < 0) {
                hasArrived = this.position.x <= emptySpace.position.x;
            }

            if (hasArrived) {
                this.isMovingX = false;
                this.speed = 0;
                this.game.board.updateBoardMatrix(this);
                console.log(this.game.board.boardMatrix);
            }
        }
        
    }

}