class GuaSence {
    constructor(game) {
        this.game = game
        this.element = []
    }
    update() {
        for(var i = 0; i < this.element.length; i++) {
            var e = this.element[i]
            if(e.y < 0 && e instanceof Bullet) {
                this.element.splice(i, 1)
                continue
            }
            e.update()
        }
    }
    addElement(img) {
        img.sence = this
        this.element.push(img)
    }
    draw() {
        for(var i = 0; i < this.element.length; i++) {
            var e = this.element[i]
            this.game.drawImage(e)
        }
    }
}
