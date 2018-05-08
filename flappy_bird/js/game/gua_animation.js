class GuaAnimation {
    constructor(game) {
        this.game = game
        this.framesCount = 3
    }
    frame(statusAnimation) {
        return this.animations[this.statusAnimation]
    }
    update() {
        this.framesCount--
        if(this.framesCount < 0) {
            this.framesCount = 3
            //
            this.framesIndex = (this.framesIndex + 1) % (this.frame().length)
            this.texture = this.frame()[this.framesIndex]
        }
    }

    draw() {

    }
    changeAnimation(name) {
        this.statusAnimation = name
    }
}
