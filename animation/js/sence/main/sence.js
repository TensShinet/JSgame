var config = {
    player_speed: 10,
    player_colddown: 4,
    cloud_speed: 0,
    bullet_speed: 50,
}


class Sence extends GuaSence {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.bg = new GuaImage(this.game, "img/bg1.gif")
        this.player = new Player(this.game, "img/plane.gif")
        this.cloud = new Cloud(this.game, "img/cloud.png")
        this.enemys = []
        this.enemyNumber = 10
        this.duration = 30
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemy()
        this.ps = new GuaParticleSystem(this.game)
        this.addElement(this.ps)
    }
    update() {
        // 子类去调用 父类的函数, 那么, 父类中的this 应该指向子类
        super.update()
        this.duration--
        if(this.duration <= 0) {
            // 删除 ps
            for(var i = 0; i < this.element.length; i++) {
                if(this.element[i] instanceof GuaParticleSystem) { break }
            }
            this.element.splice(i, 1)
        }
    }
    addEnemy() {
        //
        for(let i = 0; i < this.enemyNumber; i++) {
            let w = randomNumberBetween(1, 3)
            let path = `img/enemy${w}.gif`
            let enemy = new Enemy(this.game, path)
            this.enemys.push(enemy)
            this.addElement(enemy)
        }
    }
}
