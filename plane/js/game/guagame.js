class GuaGame {
    constructor(callback) {
        this.sence = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.getElementById("myCanvas")
        this.context = this.canvas.getContext("2d")
        this.height = this.canvas.height
        this.width = this.canvas.width

        window.addEventListener("keydown", (event)=>{
            if(wrongKey(event.key)) { return }
            this.keydowns[event.key] = true
        })
        window.addEventListener("keyup", (event)=>{
            if(wrongKey(event.key)) { return }
            this.keydowns[event.key] = false
        })
        setTimeout(() => {
            callback(this)
            this.runLoop()
        }, 1000/window.FPS)
    }
    registeActions(key, callback) {
        var key = key.toLowerCase()
        this.actions[key] = callback
        var key = key.toUpperCase()
        this.actions[key] = callback
    }
    drawImage(OImage) {
        this.context.drawImage(OImage.texture, OImage.x, OImage.y)
    }
    update() {
        this.sence.update()
    }
    draw() {
        this.sence.draw()
    }

    replaceSence(sence) {
        this.sence = sence
    }
    runLoop() {
        var o = this
        for (var p in o.keydowns) {
            if(o.keydowns[p]) {
                o.actions[p]()
            }
        }
        o.update()
        o.context.clearRect(0, 0, o.width, o.height)
        o.draw()

        setTimeout(function(){
            o.runLoop()
        }, 1000/window.FPS)
    }
    runWithSence(sence) {
        this.sence = sence
    }
}
