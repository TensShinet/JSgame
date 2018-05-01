class GuaAnimation {
    constructor(game) {
        this.game = game
        this.animations = {
            idle: [],
            run: [],
        }
        for(let i = 1; i <= 3; i++) {
            let t = this.game.imageByName(`run${i}`)
            this.animations["run"].push(t)
        }
        for(let i = 1; i <= 2; i++) {
            let t = this.game.imageByName(`idle${i}`)
            this.animations["idle"].push(t)
        }
        this.statusAnimation = "idle"
        this.texture = this.frame("idle")[0]
        this.framesCount = 3
        this.framesIndex = 0
        this.hieght = this.texture.height
        this.width = this.texture.width
        this.flipX = false
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
        var context = this.game.context
        if(this.flipX) {

            context.save()
            var x = this.x + this.width / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture, this.x, this.y)
            context.restore()
        } else {
            context.drawImage(this.texture, this.x, this.y)
        }
    }
    move(x, keyStatus) {
        this.flipX = (x > 0)
        this.x += x
        // if else 的重构
        var animationsName = {
            down: "run",
            up: "idle",
        }
        var name = animationsName[keyStatus]
        // 等价于 if else 的重构
        // if(keyStatus === "down") {
        //     this.changeAnimation("run")
        // } else if(keyStatus === "idle") {
        //     this.changeAnimation("up")
        // }
        this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.statusAnimation = name
    }
}
