class Bullet extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
    }
    setup() {
        this.speed = config.bullet_speed
    }
    update() {
        var element = this.sence.element
        for(var i = 0; i < element; i++) {
            if(element[i] instanceof Enemy) {
                if(this.collide(element[i])) {
                    var ps = new GuaParticleSystem(this.game)
                    ps.x = this.x
                    ps.y = this.y
                    element.push(ps)
                }
            }
        }
        this.y -= this.speed
    }
    collide(enemy) {
        return innerRect(enemy, this) || innerRect(this, enemy)
    }
}
