class StartSence extends GuaSence {
    constructor(game) {
        super(game)
        var w = new GuaAnimation(game)
        this.w = w
        w.x = 100
        w.y = 400
        this.cave = new GuaImage(game, "bg1")
        this.addElement(this.cave)
        this.addElement(w)
        this.setupInput()
    }
    setupInput() {
        var self = this
        self.game.registeActions("a", function(keyStatus){
            self.w.move(-3, keyStatus)
        })
        self.game.registeActions("d", function(keyStatus){
            self.w.move(3, keyStatus)
        })
    }
}
