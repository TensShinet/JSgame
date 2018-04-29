class StartSence extends GuaSence {
    constructor(game) {
        super(game)
        game.registeActions("k", function(){
            game.sence = Sence(game)
        })
    }
    update() {

    }
    draw() {
        this.game.context.font = "30px Georgia";
        this.game.context.textAlign = "center"
        var positionX = this.game.width / 2
        var positionY = this.game.height / 2
        this.game.context.fillText("Game Start! Press \"k\" To Start", positionX, positionY)
    }
}
