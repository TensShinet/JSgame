var log = function() {
    console.log.apply(console, arguments)
}
var imageFromPath = function(url, object) {
    var onloadImage = null
    var image = new Image()
    image.src = url
    image.onload = function() {
        object.image = image
        object.height = image.height
        object.width = image.width
    }
}
var wrongKey = function(key) {
    return key != "a" && key != "d" && key != "f"
}
var innerRect = function(r1, r2) {
    // 只写 上下交
    if(r1.x >= r2.x && r1.x <= r2.x+r2.width) {
        if(r1.y >= r2.y && r1.y <= r2.y+r2.height) {
            return true
        }
    }
    return false
}

var __main = function() {

    var PAUSE = false
    var game = GuaGame(30)
    var paddle = Paddle(game)
    var ball = Ball(game)
    var blocks = loadBlocks(1)

    game.registeActions("a", paddle.moveLeft)
    game.registeActions("d", paddle.moveRight)
    game.registeActions("f", ball.fired)

    window.addEventListener("keydown", function(event){
        var n = Number(event.key)
        if(event.key === "p") {
            PAUSE = !PAUSE
        } else if (n <= 3 && n >= 1) {
            blocks = loadBlocks(n)
        }
    })

    game.update = function() {
        if(PAUSE) {
            return
        }
        if(ball.fire) {
            ball.move()
        }
        if(paddle.collide(ball)) {
            ball.bounce()
        }
        for(var i = 0; i < blocks.length; i++) {
            if(blocks[i].collide(ball) && blocks[i].alive) {
                ball.bounce()
                blocks[i].kill(blocks[i])
            }
        }

    }
    game.draw = function() {
        game.drawImage(paddle)
        game.drawImage(ball)
        for(let i = 0; i < blocks.length; i++) {
            if(blocks[i].alive) {
                game.drawImage(blocks[i])
            }
        }
    }
}
__main()
