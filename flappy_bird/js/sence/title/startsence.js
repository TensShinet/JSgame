class StartSence extends GuaSence {
    constructor(game) {
        super(game)
        window.b = new Bird(game)
        b.x = 20
        b.y = 20
        this.cave = new GuaImage(game, "bg1")
        this.land = new Land(game, "land")
        this.cave.width = this.game.width
        this.cave.height = this.game.height
        window.P = this.pipes = new Pipes(game, "pipe")
        this.addElement(this.cave)
        this.addElement(b)
        this.addElement(this.pipes)
        this.addLands(2)

    }
    addLands(n) {
        for (var i = 0; i < n; i++) {
            let l = new Land(this.game, "land")
            l.x = i * 100
            this.addElement(l)
        }
    }
}
