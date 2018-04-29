class Sence extends GuaSence {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        this.bg = new GuaImage("img/bg1.gif")
        this.player = new GuaImage("img/plane.gif")
        this.player.x = 150
        this.player.y = 400
        this.cloud = new GuaImage("img/cloud.png")
        this.cloud.x = 0
        this.cloud.y = 0

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
    }

    update() {
        this.cloud.y++
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
