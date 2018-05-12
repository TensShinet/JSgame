class Bullet extends GuaImage {
    constructor(game, imageName) {
        super(game, imageName)
        this.setup()
    }
    setup() {
        this.speed = config.bullet_speed
    }
    update() {
        if(this.y < 0) {
            removeFromArray(this, this.sence.elements)
        }
        this.y -= this.speed
    }
    remove() {
        removeFromArray(this, this.sence.elements)
    }
}
