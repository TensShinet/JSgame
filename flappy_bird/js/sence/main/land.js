class Land extends GuaImage {
    constructor(game, name) {
        super(game, name)
        this.setup()
    }
    setup() {
        this.x = 0
        this.landHeight = 80
        this.y = this.game.height - this.landHeight
        this.slideCount = 3
    }
    update() {
        this.x -= 10
        this.slideCount--
        if(this.slideCount <= 0) {
            this.slideCount = 3
            this.x += 30
        }
    }
}
