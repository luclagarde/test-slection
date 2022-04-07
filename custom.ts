
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: Flèche pointant A
     */
    //% block="Flèche"
    export function fib(): void {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
        basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        . . . . #
        . . . . .
        `)
        basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . # .
        . . . . #
        `)
        basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
        basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    }

    /**
     * TODO: Jouer mélodie Super Mario
     * @param tempo describe the beat, eg:120
     */
    //% block="Mélodie Super Mario tempo à $tempo (bmp)"
    //% tempo.min=4 tempo.max=400
    //% tempo.fieldOptions.precision=1
    export function Super(tempo: number): void {
    }
}
