var __main = function() {

    window.FPS = 30
    window.PAUSE = false
    // 回调函数 解决问题
    var game = new GuaGame(function(g){
        var sence = new StartSence(g)
        g.runWithSence(sence)
    })

}
__main()
