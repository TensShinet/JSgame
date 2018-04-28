var __main = function() {

    window.FPS = 30
    window.PAUSE = false
    // 回调函数 解决问题
    var game = GuaGame(function(g){
        var sence = Sence(g)
        g.runWithSence(sence)
    })

}
__main()
