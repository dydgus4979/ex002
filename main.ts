let Y = 0
let X = 0
let Z = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Y)
    Y += 1
})
input.onGesture(Gesture.Shake, function () {
    X = randint(0, 2)
    if (X == 0) {
        basic.showLeds(`
            # # # # #
            # # . . #
            # # # # #
            # # . . #
            # # # # #
            `)
    } else if (X == 1) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(0)
    Y = 0
    Z = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Z)
    Z += 1
})
basic.forever(function () {
	
})
