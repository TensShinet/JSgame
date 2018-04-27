var enableDrag = function(game, ball) {
    var canvas = game.canvas
    var ballDrag = false
    canvas.addEventListener("mousedown", function(event){
        var x = event.offsetX
        var y = event.offsetY
        if(ball.hasPoint(x, y, ball)) {
            ballDrag = true
        }
    })
    canvas.addEventListener("mousemove", function(event){
        if(!ballDrag) { return }
        var x = event.offsetX
        var y = event.offsetY
        ball.x = x
        ball.y = y
    })
    canvas.addEventListener("mouseup", function(event){
        ballDrag = false
    })
}
