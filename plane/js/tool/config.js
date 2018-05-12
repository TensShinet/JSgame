var config = {
    player_speed: 10,
    player_colddown: 4,
    cloud_speed: 0,
    bullet_speed: 50,
}
// <div>
//         <label>
//             <input type="range" class="gua-auto-slider"
//                 value=""
//                 max="20"
//                 min="0"
//                 data-value="config.player_speed"
//             >
//             玩家速度<span calss="gua-label">10</span>
//         </label>
// </div>
var insertAfter = function(newElement, targetElement) {
    var parent = targetElement.parentNode

    if(parent.lastChild === targetElement) {
        parent.appendChild(newElement)
    } else {
        var brother = targetElement.nestSibling
        parent.insertBefore(newElement, brother)
    }
}
var templateHTML = function(key) {
    var t = `
        <br>
        <label>
            <input type="range" class="gua-auto-slider"
                value=""
                max="20"
                min="0"
                data-value="config.${key}"
            >
            ${key}<span calss="gua-label">&nbsp;${config[key]}</span>
        </label>
    `
    return t
}

var __configMain = function() {
    var div = document.createElement("div")
    var canvas = document.querySelector("#myCanvas")
    log("canvas", canvas)
    var configHTML = ""
    for(var key in config) {
        var t = templateHTML(key)
        configHTML += t
    }
    div.innerHTML = configHTML
    insertAfter(div, canvas)
}
__configMain()
