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
        var elements = this.sence.elements
        for(var i = 0; i < elements.length; i++) {
            let e = elements[i]
            if(e instanceof Bullet) {
                if(this.collide(e)) {
                    e.remove()
                    var ps = new GuaParticleSystem(this.game)
                    ps.x = this.x + this.width/2
                    ps.y = this.y + this.height/2
                    elements.push(ps)
                    this.remove()
                    // log("碰撞")
                }
            }
        }
        this.y += this.speed
    }
    collide(bullet) {
        var b = bullet
        if(b.x <= this.x+this.width && b.x >= this.x) {
            if(b.y <= this.y+this.height && b.y >= this.y) {
                return true
            }
        }
        return false
    }
    remove() {
        this.setup()
    }
}
