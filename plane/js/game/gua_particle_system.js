class Particle extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
    }
    setup() {
        this.range = 3
        this.life = 10
        var a = randomAngleBetween(0, 360)
        this.vx = Math.sin(a) * this.range
        this.vy = Math.cos(a) * this.range
    }
    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
    }
}
class GuaParticleSystem {
    constructor(game) {
        this.game = game
        this.particles = []
        this.setup()
    }
    setup() {
        this.x = 100
        this.y = 100
        this.particleNumber = 100
        this.existTime = 10
    }
    update() {
        if(this.existTime < 1) {
            removeFromArray(this, this.game.sence.elements)
        }
        this.existTime--
        // 每一个 particle 都是 逐渐更新进去的
        if(this.particles.length < this.particleNumber) {
            var p = new Particle(this.game, "img/sp.png")
            p.x = this.x
            p.y = this.y
            this.particles.push(p)
        }
        // 更新 每一个 小火花
        for (var p of this.particles) {
            p.update()
        }
        this.particles = this.particles.filter(p => p.life > 0)
    }
    draw() {
        for (var p of this.particles) {
            p.draw()
        }
    }
}
