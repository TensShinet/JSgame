var __main = function() {

    var images = {
        // 飞行
        fly1: "img/bird/bird-01.png",
        fly2: "img/bird/bird-02.png",
        fly3: "img/bird/bird-03.png",
        fly4: "img/bird/bird-04.png",
        // 土地
        land: "img/land/land.png",
        // 背景
        bg1: "img/background/bg.png",
        // 水管
        pipe: "img/pipe/up.png"
    }
    window.PAUSE = false
    window.FPS = 30
    // 回调函数 解决问题
    var game = new GuaGame(images, function(g){
        window.sence = new StartSence(g)
        // log("回调成功", g)
        g.runWithSence(sence)
    })

}
__main()
