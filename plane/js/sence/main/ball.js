var Ball = function(game) {

    var o = {
        x: 1,
        y: 1,
        speedX: 5,
        speedY: 5,
        fire: false,
    }
    imageFromPath("img/basb.png", o)
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
    var innerRect = function(p1, p2, p3) {
        return p1 >= p2 && p1 <= p3
    }
    o.hasPoint = function(x, y, OBall) {
        return innerRect(x, this.x, this.x + this.width) &&
                innerRect(y, this.y, this.y + this.height)
    }
    return o
}
