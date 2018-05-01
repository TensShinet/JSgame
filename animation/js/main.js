var __main = function() {

    var images = {
        // 空闲的时候的图片
        idle1: "img/idle/1.png",
        idle2: "img/idle/2.png",
        // 动
        run1: "img/run/1.png",
        run2: "img/run/2.png",
        run3: "img/run/3.png",
        // 背景
        bg1: "img/background/bg1.jpg",
    }
    window.FPS = 30
    // 回调函数 解决问题
    var game = new GuaGame(images, function(g){
        var sence = new StartSence(g)
        // log("回调成功", g)
        g.runWithSence(sence)
    })

}
__main()
