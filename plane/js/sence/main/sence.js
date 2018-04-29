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
    }
}
class Enemy extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
    }
    setup() {
        this.speed = 2
        this.x = randomNumberBetween(0, this.game.width)
        this.y = randomNumberBetween(0, this.game.height/3)
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
        this.cloud = new GuaImage(this.game, "img/cloud.png")
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
        this.cloud.y++
        this.enemyMove()
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
    enemyMove() {
        for(let i = 0; i < this.enemyNumber; i++) {
            var e = this.enemys[i]
            e.update()
        }
    }
}
