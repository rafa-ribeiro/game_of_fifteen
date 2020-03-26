export default class InputHandler {

    constructor(game) {
        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
                case 32:
                    // SPACEBAR
                    game.start();
                    break;

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
                    game.board.moveUp();
                    break;

                case 40:
                    // down arrow
                    game.board.moveDown();
                    break;

                default:
                    console.log(event.keyCode);
            }

        });
    }

}