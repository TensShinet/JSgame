class GuaImage {
    constructor(game, path) {
        this.game = game
        this.x = 0
        this.y = 0
        textureFromPath(path, this)
    }
    update() {

    }
    draw() {
        this.game.drawImage(this)
    }
}
