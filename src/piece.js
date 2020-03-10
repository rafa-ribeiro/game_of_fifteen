export default class Piece {

    constructor(value, position, width, height) {
        this.value = value;
        this.width = width;
        this.height = height;
        this.position = position;
    }

    draw(ctx) {
        debugger;
        ctx.rect(this.position.x, this.position.y, this.width, this.height, 100, true);
        ctx.fillStyle = "rgba(0, 0, 0)";
        ctx.fill();

        ctx.font = "40px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        let x = this.position.x + (this.width / 2);
        let y = this.position.y + (this.height / 2);

        ctx.fillText(this.value, x, y);
    }

}