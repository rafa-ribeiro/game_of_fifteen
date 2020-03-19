export default class InputHandler {

    constructor(game) {
        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
                case 37:
                    // left arrow
                    game.board.moveLeft(); 
                    break;

                case 39:
                    // right arrow
                    game.board.moveRight(); 
                    break;

                case 38:
                    // up arrow
                    console.log("cima");
                    break;

                case 40:
                    // down arrow
                    console.log("baixo");
                   break;

                default:
                    console.log(event.keyCode);
            }

        });
    }

}