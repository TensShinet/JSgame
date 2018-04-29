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
var textureFromPath = function(url, object) {
    var image = new Image()
    image.src = url
    object.texture = image

    image.onload = function() {
        object.height = image.height
        object.width = image.width
    }

}
var wrongKey = function(key) {
    var allKey = ["a", "d", "w", "s", ]
    var keyLowerCase = key.toLowerCase()
    for (var i = 0; i < allKey.length; i++) {
        if(keyLowerCase === allKey[i]) { break }
    }
    return i >= allKey.length
}
var randomNumberBetween = function(s, f) {
    var n = (f - s) * Math.random()
    var result = Math.floor(n + s)
    return result
}
var enableDebugMode = function() {
    var input = document.getElementById("id-input-range")
    input.addEventListener("input", function(event){
        var value = input.value
        window.FPS = Number(value+1)
    })
}
