// Classes have methods, outside of classes called functions.

export default class CatchGame {
    
    constructor() {
        console.log("Hello, Catch Game!");

        this.types = [
            {
                type: "A",
                value: 1,
            },
            {
                type: "B",
                value: -1,
            },
            {
                type: "C",
                value: 0,
                gameEvent: "gameover",
            },
        ];

        this.pieces = [];
        
        this.updateHandler = null;

        this.addPiece();
        this.addPiece();
        this.addPiece();
    };

    addPiece() {
        const piece = {
            type: this.types[Math.floor(Math.random()*this.types.length)],
            x: Math.random()*100,
            y: Math.random()*100,
        };

        this.pieces.push(piece);
        if (this.updateHandler) {
            this.updateHandler (this);
        }
    };

}