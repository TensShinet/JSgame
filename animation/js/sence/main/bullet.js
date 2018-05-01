class Bullet extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
    }
    setup() {
        this.speed = config.bullet_speed
    }
    update() {
        this.y -= this.speed
    }
}
