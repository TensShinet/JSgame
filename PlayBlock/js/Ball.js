var Ball = function(game) {

    var o = {
        x: 1,
        y: 1,
        speedX: 5,
        speedY: 5,
        fire: false,
    }
    imageFromPath("basb.png", o)
    o.fired = function() {
        o.fire = true
    }
    o.move = function() {
        if(o.x+o.width >= game.width || o.x <= 0) {
            o.speedX *= -1
        }
        if(o.y+o.height >= game.height || o.y <= 0) {
            o.speedY *= -1
        }
        o.x += o.speedX
        o.y += o.speedY
    }
    o.bounce = function() {
        o.speedY *= -1
    }
    return o
}
