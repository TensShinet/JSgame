var GuaGame = function(callback) {
    var o = {
        sence: null,
        actions: {},
        keydowns: {},
    }
    o.canvas = document.getElementById("myCanvas")
    o.context = o.canvas.getContext("2d")
    o.height = o.canvas.height
    o.width = o.canvas.width

    window.addEventListener("keydown", function(event){
        if(wrongKey(event.key)) { return }
        o.keydowns[event.key] = true
    })
    window.addEventListener("keyup", function(event){
        if(wrongKey(event.key)) { return }
        o.keydowns[event.key] = false
    })
    o.registeActions = function(key, callback) {
        o.actions[key] = callback
    }
    o.drawImage = function(OImage) {
        o.context.drawImage(OImage.image, OImage.x, OImage.y)
    }
    o.update = function() {
        o.sence.update()
    }
    o.draw = function() {
        o.sence.draw()
    }
    o.runWithSence = function(sence) {
        o.sence = sence
    }
    var runLoop = function() {
        for (var p in o.keydowns) {
            if(o.keydowns[p]) {
                o.actions[p]()
            }
        }
        o.update()
        o.context.clearRect(0, 0, o.width, o.height)
        o.draw()

        setTimeout(function(){
            runLoop()
        }, 1000/window.FPS)
    }
    setTimeout(function(){
        callback(o)
        runLoop()
    }, 1000/window.FPS)

    return o
}
