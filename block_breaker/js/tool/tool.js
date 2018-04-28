var log = function() {
    console.log.apply(console, arguments)
}
var imageFromPath = function(url, object) {
    var image = new Image()
    image.src = url
    object.image = image

    image.onload = function() {
        object.height = image.height
        object.width = image.width
    }
}
var wrongKey = function(key) {
    var allKey = ["a", "d", "f", "r", "k"]
    var keyLowerCase = key.toLowerCase()
    for (var i = 0; i < allKey.length; i++) {
        if(keyLowerCase === allKey[i]) { break }
    }
    return i >= allKey.length
}
var innerRect = function(r1, r2) {
    // 只写 上下交
    if(r1.x >= r2.x && r1.x <= r2.x+r2.width) {
        if(r1.y >= r2.y && r1.y <= r2.y+r2.height) {
            return true
        }
    }
    return false
}
var enableDebugMode = function() {
    var input = document.getElementById("id-input-range")
    input.addEventListener("input", function(event){
        var value = input.value
        window.FPS = Number(value+1)
    })
}
