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
    }
    update() {
        // 子类去调用 父类的函数, 那么, 父类中的this 应该指向子类
        super.update()
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
