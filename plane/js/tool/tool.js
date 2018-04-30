var log = function() {
    console.log.apply(console, arguments)
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
    var allKey = ["a", "d", "w", "s", "f", ]
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
