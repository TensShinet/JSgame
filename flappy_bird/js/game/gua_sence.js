class GuaSence {
    constructor(game) {
        this.game = game
        this.element = []
    }
    update() {
        for(var i = 0; i < this.element.length; i++) {
            var e = this.element[i]
            e.update()
        }
    }
    addElement(img) {
        img.sence = this
        this.element.push(img)
    }
    draw() {
        for(var e of this.element) {
            e.draw()
        }
    }
}
