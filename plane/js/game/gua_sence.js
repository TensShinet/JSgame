class GuaSence {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    update() {
        for(var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
    addElement(img) {
        img.sence = this
        this.elements.push(img)
    }
    draw() {
        for(var e of this.elements) {
            e.draw()
        }
    }
}
