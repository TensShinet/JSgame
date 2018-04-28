class EndSence extends GuaSence {
    constructor(game) {
        super(game)
        game.registeActions("r", function(){
            game.sence = new StartSence(game)
        })
    }
    update() {

    }
    draw() {
        this.game.context.font = "30px Georgia";
        this.game.context.textAlign = "center"
        var positionX = this.game.width / 2
        var positionY = this.game.height / 2
        this.game.context.fillText("Game Over! Press \"r\" to Restart", positionX, positionY)
    }
}
