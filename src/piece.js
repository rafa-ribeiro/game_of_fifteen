export default class Piece {

    constructor(value, position, width, height) {
        this.value = value;
        this.position = position;
        this.width = width;
        this.height = height;
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

}