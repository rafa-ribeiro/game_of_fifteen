export default class Settings {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        
        // Pieces settings
        this.pieceWidth = 80;
        this.pieceHeight = 80;
        this.gapBetweenPieces = 10;
        this.pieceMaxSpeed = 10;
        this.emptyPieceColor = "#f1f3f4";
        this.pieceColor = "#79bac1";
        this.fontPieceType = "45px monospace";
        this.fontPieceColor = "#512b58";
    }

}