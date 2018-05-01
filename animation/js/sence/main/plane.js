
class Player extends GuaImage {
    constructor(game, path) {
        super(game, path)
        this.setup()
        this.setupInput()
    }
    setup() {
        this.colddown = config.player_colddown
        this.speed = config.player_speed
        this.x = 150
        this.y = 400
    }
    update() {
        this.speed = config.player_speed
        this.colddown--
    }
    moveRight() {
        this.x += this.speed
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        if(this.colddown > 0) { return }
        this.colddown = config.player_colddown
        var path = "img/bullet.gif"
        // 由于素材不行, this.x + this.width / 2 不是中间值
        var x = this.x + this.width / 2 - 5
        var y = this.y
        var b = new Bullet(this.game, path)
        b.x = x
        b.y = y
        // 在加入飞机的时候, 给飞机 阈值一个 sence 的值 这个值是指向 调用飞机的场景
        this.sence.addElement(b)
    }
    setupInput() {
        var p = this
        var g = this.game
        // 这里有一点小问题
        // 应该是 保存了, 调用它的对象
        //
        g.registeActions("a", function(){
            p.moveLeft()
        })
        g.registeActions("d", function(){
            p.moveRight()
        })
        g.registeActions("s", function(){
            p.moveDown()
        })
        g.registeActions("w", function(){
            p.moveUp()
        })
        g.registeActions("f", function(){
            p.fire()
        })
    }
}
