class Player extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.enemyNumber = 10
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
class Player extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.enemyNumber = 10
        this.setup()
        this.setupInput()
    }
    setup() {
        this.speed = 10
        this.x = 150
        this.y = 400
    }

    setupInput() {
        var p = this
        var g = this.game
        // 这里有一点小问题
        // 应该是 保存了, 调用它的对象
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

class Sence extends GuaSence {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.bg = new GuaImage(this.game, "img/bg1.gif")
        this.player = new Player(this.game, "img/plane.gif")
        this.cloud = new GuaImage(this.game, "img/cloud.png")
        this.cloud.x = 0
        this.cloud.y = 0

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemy()
    }
    update() {
        this.cloud.y++
    }
    addEnemy() {
        //
        for(let i = 0; i < this.enemyNumber; i++) {
            let w = randomNumberBetween(1, 3)
            let path = `img/enemy${w}.gif`
            let enemy = Enemy(this.game, path)
            this.addElement(enemy)
        }
    }
}


// var Sence = function(game) {
//
//     var s = {
//         game: game,
//     }
//
//     var paddle = Paddle(game)
//     var ball = Ball(game)
//     var blocks = loadBlocks(1)
//
//     enableDebugMode()
//     enableDrag(game, ball)
//
//     game.registeActions("a", paddle.moveLeft)
//     game.registeActions("d", paddle.moveRight)
//     game.registeActions("f", ball.fired)
//
//     window.addEventListener("keydown", function(event){
//         var n = Number(event.key)
//         if(event.key === "p") {
//             window.PAUSE = !window.PAUSE
//         } else if (n <= 3 && n >= 1) {
//             blocks = loadBlocks(n)
//         }
//     })
//     s.update = function() {
//         if(window.PAUSE) {
//             return
//         }
//         if(ball.y + ball.height >= game.height) {
//             let s = new EndSence(game)
//             game.replaceSence(s)
//         }
//         if(ball.fire) {
//             ball.move()
//         }
//         if(paddle.collide(ball)) {
//             ball.bounce()
//         }
//         for(var i = 0; i < blocks.length; i++) {
//             if(blocks[i].collide(ball) && blocks[i].alive) {
//                 ball.bounce()
//                 blocks[i].kill(blocks[i])
//             }
//         }
//
//     }
//     s.draw = function() {
//         game.context.fillStyle = "#554"
//         game.context.fillRect(0, 0, game.width, game.height)
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         for(let i = 0; i < blocks.length; i++) {
//             if(blocks[i].alive) {
//                 game.drawImage(blocks[i])
//             }
//         }
//     }
//     return s
// }
