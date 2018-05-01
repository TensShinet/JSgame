class GuaGame {
    constructor(images, callback) {
        this.images = images
        this.sence = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.getElementById("myCanvas")
        this.context = this.canvas.getContext("2d")
        this.height = this.canvas.height
        this.width = this.canvas.width
        this.callback = callback
        window.addEventListener("keydown", (event)=>{
            if(wrongKey(event.key)) { return }
            this.keydowns[event.key] = "down"
        })
        window.addEventListener("keyup", (event)=>{
            if(wrongKey(event.key)) { return }
            this.keydowns[event.key] = "up"
        })
        this.init()

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
            var status = o.keydowns[p]

            if(status === "down") {
                o.actions[p](status)
            } else if (status === "up") {
                o.actions[p](status)
                o.keydowns[p] = null
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
    imageByName(name) {
        var g = this
        log('image by name', g.images)
        var img = g.images[name]
        // var image = {
        //     w: img.width,
        //     h: img.height,
        //     image: img,
        // }
        return img
    }
    __start() {
        this.callback(this)
        setTimeout(() => {
            this.runLoop()
        }, 1000/window.FPS)
    }
    init() {
        var g = this
        var loads = []
        // 预先载入所有图片
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                log('load images', loads.length, names.length)
                if (loads.length == names.length) {
                    // log('load images', g.images)
                    g.__start()
                }
            }
        }
    }
}
