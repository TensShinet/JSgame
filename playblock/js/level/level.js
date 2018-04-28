var loadBlocks = function(n) {
    n = n-1
    var level = loadLevels(n)
    var blocks = []
    for(var i = 0; i < level.length; i++) {
        let b = Block(level[i])
        blocks.push(b)
    }
    // 返回的是指针 把 因为 数组是一个对象
    return blocks
}
var loadLevels = function(n) {
    // 每一个 level 都是 有 不同的 数量的 blocks
    var levels = [
        [
            [50, 90, 2]
        ],
        [
            [50, 90, 1],
            [100, 200, 2],
        ],
        [
            [50, 90, 2],
            [100, 200, 2],
            [200, 200, 2],
        ]
    ]

    return levels[n]
}
