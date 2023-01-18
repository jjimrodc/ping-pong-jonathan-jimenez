input.onButtonPressed(Button.A, function () {
    if (posicion_de_la_paleta > 0) {
        paleta_1.move(-1)
        paleta_2.move(-1)
        posicion_de_la_paleta += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (posicion_de_la_paleta < 3) {
        paleta_1.move(1)
        paleta_2.move(1)
        posicion_de_la_paleta += 1
    }
})
function moverpelota () {
    basic.pause(300)
    pelota.move(1)
    pelota.ifOnEdgeBounce()
    if (pelota.isTouching(paleta_1) || pelota.isTouching(paleta_2)) {
        pelota.set(LedSpriteProperty.Direction, 0)
        azar = Math.randomBoolean()
        if (azar == true) {
            pelota.turn(Direction.Left, 45)
        } else {
            pelota.turn(Direction.Right, 45)
        }
        PUNTOS = 1
    } else {
        if (pelota.get(LedSpriteProperty.Y) == 4) {
            basic.clearScreen()
            basic.showString("GAME OVER")
            basic.showString("PUNTOS:")
            basic.showNumber(0)
        }
    }
}
let azar = false
let PUNTOS = 0
let posicion_de_la_paleta = 0
let pelota: game.LedSprite = null
let paleta_2: game.LedSprite = null
let paleta_1: game.LedSprite = null
paleta_1 = game.createSprite(2, 4)
paleta_2 = game.createSprite(3, 4)
pelota = game.createSprite(2, 0)
posicion_de_la_paleta = 2
PUNTOS = 0
pelota.turn(Direction.Right, 90)
basic.forever(function () {
    moverpelota()
    pelota.move(1)
})
basic.forever(function () {
	
})
