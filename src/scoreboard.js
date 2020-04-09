export default class Scoreboard {

    constructor(game, width, height) {
        this.game = game;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.font = "15px monospace";
        ctx.textAlign = "center";
        ctx.fillStyle = "#79bac1";
        ctx.fillText(
            "MOVES",
            this.width / 2,
            this.height * 0.25 
        );

        ctx.font = "40px monospace";
        ctx.fillStyle = "#f1f3f4";
        ctx.textAlign = "center";
        ctx.fillText(
            this.game.moves,
            this.width / 2,
            this.height / 1.2
        );
    }

}