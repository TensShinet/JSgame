class Cloud extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
    }
    setup() {
        this.speed = config.cloud_speed
        this.x = randomNumberBetween(0, this.game.width)
        this.y = 0
    }
    update() {
        if(this.y >= this.game.height) {
            this.setup()
            return
        }
        this.speed = config.cloud_speed
        this.y += this.speed
    }
}
