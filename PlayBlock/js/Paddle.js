var Paddle = function(game) {

    var o = {
        x: 0,
        y: 350,
        speed: 10,
    }
    imageFromPath("bp.png", o)
    o.moveLeft = function() {
        if(o.x > 0) {
            o.x -= o.speed
        }

    }
    o.moveRight = function() {
        if(o.x+o.width < game.width) {
            o.x += o.speed
        }
    }
    o.collide = function(ball) {
        return innerRect(ball, o) || innerRect(o, ball)
    }

    return o
}
