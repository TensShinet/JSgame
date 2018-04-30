class Bullet extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
    }
    setup() {
        this.speed = 1
    }
    update() {  
        this.y -= this.speed
    }
}
class Player extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
        this.setupInput()
    }
    setup() {
        this.speed = 10
        this.x = 150
        this.y = 400
    }
    moveRight() {
        this.x += this.speed
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        var path = "img/bullet.gif"
        // 由于素材不行, this.x + this.width / 2 不是中间值
        var x = this.x + this.width / 2 - 5
        var y = this.y
        var b = new Bullet(this.game, path)
        b.x = x
        b.y = y
        // 在加入飞机的时候, 给飞机 阈值一个 sence 的值 这个值是指向 调用飞机的场景
        this.sence.addElement(b)
    }
    setupInput() {
        var p = this
        var g = this.game
        // 这里有一点小问题
        // 应该是 保存了, 调用它的对象
        //
        g.registeActions("a", function(){
            p.moveLeft()
        })
        g.registeActions("d", function(){
            p.moveRight()
        })
        g.registeActions("s", function(){
            p.moveDown()
        })
        g.registeActions("w", function(){
            p.moveUp()
        })
        g.registeActions("f", function(){
            p.fire()
        })
    }
}

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
        this.y += this.speed
    }

}
class Cloud extends GuaImage {
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
        this.y += this.speed
    }
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
        this.cloud.x = 0
        this.cloud.y = 0

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemy()
    }
    update() {
        // 子类去调用 父类的函数, 那么, 父类中的this 应该指向子类
        super.update()
        this.cloud.y++
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
