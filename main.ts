function directionnel () {
    if (posY >= 5) {
        direction = -1
    } else if (posY <= 1) {
        direction = 1
    }
    if (posY1 >= 5) {
        direction1 = -1
    } else if (posY1 <= 1) {
        direction1 = 1
    }
    if (posY2 >= 5) {
        direction2 = -1
    } else if (posY2 <= 1) {
        direction2 = 1
    }
    if (posY3 >= 5) {
        direction3 = -1
    } else if (posY3 <= 1) {
        direction3 = 1
    }
    if (posY4 >= 5) {
        direction4 = -1
    } else if (posY4 <= 1) {
        direction4 = 1
    }
}
function deplacement () {
    for (let varleur = 0; varleur <= 2; varleur++) {
        led.plotBrightness(0, posY - varleur, lum[varleur])
        led.plotBrightness(1, posY1 - varleur, lum[varleur])
        led.plotBrightness(2, posY2 - varleur, lum[varleur])
        led.plotBrightness(3, posY3 - varleur, lum[varleur])
        led.plotBrightness(4, posY4 - varleur, lum[varleur])
    }
    posY += direction
    posY1 += direction1
    posY2 += direction2
    posY3 += direction3
    posY4 += direction4
    basic.pause(200)
}
let direction4 = 0
let direction3 = 0
let direction2 = 0
let direction1 = 0
let direction = 0
let posY4 = 0
let posY3 = 0
let posY2 = 0
let posY1 = 0
let posY = 0
let lum: number[] = []
lum = [0, 255, 0]
posY = 0
posY1 = 1
posY2 = 2
posY3 = 3
posY4 = 4
direction = 1
direction1 = 1
direction2 = 1
direction3 = 1
direction4 = 1
basic.forever(function () {
    directionnel()
    deplacement()
})
