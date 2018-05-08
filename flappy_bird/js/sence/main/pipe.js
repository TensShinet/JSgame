class Pipes {
    constructor(game, imageName) {
        this.game = game
        this.imageName = imageName
        this.setup()
    }
    setup() {
        this.pipes = []
        this.pipesNum = 3
        this.verticalSpace = 100
        this.pipeSpace = 150
        this.initPipeX = 0
        for(var i = 0; i < this.pipesNum; i++) {
            let p1 = new GuaImage(this.game, this.imageName)
            let p2 = new GuaImage(this.game, this.imageName)
            this.setPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    update() {
         for (var i = 0; i < this.pipes.length; i += 2) {
            let p1 = this.pipes[i]
            let p2 = this.pipes[i+1]
            if(p1.x + p1.width*1.5 <= 0) {
                this.resetPipesPosition(p1, p2)
                continue
            }
            p1.x = p2.x = p2.x - 5
         }
    }
    drawImage(pipe) {

        var p = pipe
        var context = this.game.context
        context.save()
        var w2 = p.width / 2
        var h2 = p.height / 2
        context.translate(p.x + w2, p.y + h2)
        var scaleY = p.flipY ? -1.5 : 1.5
        context.scale(1.5, scaleY)

        context.translate(-w2, -h2)
        context.drawImage(p.texture, 0, 0)
        context.restore()
    }
    draw() {
         for (var i = 0; i < this.pipes.length; i += 2) {
            let p1 = this.pipes[i]
            let p2 = this.pipes[i+1]
            this.drawImage(p1)
            this.drawImage(p2)
         }
    }
    setPipesPosition(pipe1, pipe2) {
        var p1 = pipe1
        var p2 = pipe2

        if(this.initPipeX === 0) {
            p1.x = p2.x = this.initPipeX = 300
        } else {
            var x = this.pipes[this.pipes.length-1].x
            p1.x = p2.x = x + this.pipeSpace
        }
        //
        this.resetPipesY(p1, p2)
    }
    resetPipesPosition(pipe1, pipe2) {
        var p1 = pipe1
        var p2 = pipe2

        var x = 3 * this.pipeSpace - p1.width * 1.5
        p1.x = p2.x = x
        this.resetPipesY(p1, p2)
    }
    resetPipesY(pipe1, pipe2) {
        var p1 = pipe1
        var p2 = pipe2

        p1.y = randomNumberBetween(300, 380)
        p2.y = p1.y - this.verticalSpace - p1.height * 1.5
        p2.flipY = true

    }
}
