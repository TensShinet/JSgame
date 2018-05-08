class Bird extends GuaAnimation {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInput()
    }
    setup() {
        this.animations = {
            fly: [],
        }
        var fl = 4
        for(var p in this.animations) {
            for(let i = 1; i <= fl; i++) {
                let t = this.game.imageByName(`${p}${i}`)
                this.animations[p].push(t)
            }
        }
        this.statusAnimation = "fly"
        this.texture = this.frame("fly")[0]
        this.framesIndex = 0
        this.height = this.texture.height
        this.width = this.texture.width
        this.flipX = false
        this.speed = 20
        this.vy = 10
        this.gy = 10
        this.rotation = 0
    }
    update() {
        super.update()
        var landHeight = 80
        this.y += this.vy
        this.vy += this.gy * 0.2
        var h = this.game.height - landHeight - this.height
        var minH = 0
        if(this.y > h) {
            this.y = h
        }
        // 更新角度
        if(this.rotation < 45) {
            this.rotation += 15
        }
    }
    draw() {
        var context = this.game.context
        context.save()
        var w2 = this.width / 2
        var h2 = this.height / 2
        context.translate(this.x + w2, this.y + h2)
        // log("his.x + w2, this.y + h2", this.x + w2, this.y + h2)
        if(this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        // context.drawImage(this.texture, -w2, -h2)

        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    move(x, keyStatus) {
        this.flipX = (x < 0)
        this.x += x
    }
    jump(y) {
        log("jump()", this.y)
        this.vy = 10

        this.y -= y
        if(this.y < 0) {
            this.y = 0
        }
        this.rotation = -45
    }
    setupInput() {
        var self = this
        self.game.registeActions("a", function(keyStatus){
            self.move(-self.speed, keyStatus)
        })
        self.game.registeActions("d", function(keyStatus){
            self.move(self.speed, keyStatus)
        })
        self.game.registeActions("j", function(keyStatus){
            self.jump(30)
        })
    }
}
