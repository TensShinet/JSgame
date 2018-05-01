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
var textureFromURL = function(url, object) {
    var image = new Image()
    image.src = url

    return image
}

var wrongKey = function(key) {
    var allKey = ["a", "d", ]
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
var randomAngleBetween = function(s, f) {
    var n = (f - s) * Math.random()
    var result = Math.floor(n + s) * Math.PI / 180
    return result
}
var es = sel => document.querySelectorAll(sel)
var bindAll = function(sel, eventName, callback) {
    var l = es(sel)
    for(var i = 0; i < l.length; i++) {
        l[i].addEventListener(eventName, function(event){
            callback(event)
        })
    }
}
