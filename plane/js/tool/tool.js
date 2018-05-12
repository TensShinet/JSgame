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
var innerRect = function(p1, p2, p3) {
        return p1 >= p2 && p1 <= p3
}
var removeFromArray = function(element, array) {
    var e = element
    var a = array
    for (var i = 0; i < a.length; i++) {
        if(e == a[i]) {
            log("shanchu")
            a.splice(i, 1)
            break
        }
    }
}
