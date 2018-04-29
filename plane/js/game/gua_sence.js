class GuaSence {
    constructor(game) {
        this.game = game
        this.element = []
    }
    update() {
        
    }
    addElement(img) {
        this.element.push(img)
    }
    draw() {
        for(var i = 0; i < this.element.length; i++) {
            var e = this.element[i]
            this.game.drawImage(e)
        }
    }
}
