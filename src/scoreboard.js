export default class Scoreboard {

    constructor(game, width, height) {
        this.game = game;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(
            this.game.moves,
            this.width / 2,
            this.height / 1.2
        );
    }

    update(deltaTime) {

    }

}