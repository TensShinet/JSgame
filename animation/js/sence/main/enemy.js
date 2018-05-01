class Enemy extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
    }
    setup() {
        this.speed = randomNumberBetween(2, 5)
        this.x = randomNumberBetween(0, this.game.width)
        this.y = -randomNumberBetween(0, 200)
    }
    update() {
        if(this.y >= this.game.height) {
            this.setup()
            return
        }
        this.y += this.speed
    }

}
