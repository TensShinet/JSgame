class GuaImage {
    constructor(game, imageName) {
        this.game = game
        this.x = 0
        this.y = 0
        this.texture = this.game.imageByName(imageName)
        this.width = this.texture.width
        this.height = this.texture.height
        this.flipX = this.flipY = false

    }
    update() {

    }
    draw() {
        this.game.drawImage(this)
    }
}
