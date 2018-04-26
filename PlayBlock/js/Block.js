var Block = function(position) {

    var p = position
    var o = {
        x: p[0],
        y: p[1],
        speed: 10,
        alive: true,
        lifes: p[2] || 1
    }
    imageFromPath("gbo.png", o)
    o.collide = function(ball) {
        return innerRect(ball, o) || innerRect(o, ball)
    }
    o.kill = function(blockObject) {
        var bo = blockObject
        bo.lifes--
        if(bo.lifes <= 0) {
            bo.alive = false
        }
    }

    return o
}
