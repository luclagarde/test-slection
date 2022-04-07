
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
        music.setTempo(tempo)
        E()
        for (let index = 0; index < 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(196, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(165, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(247, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(233, music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Half))
            music.playTone(196, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(247, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 2; index++) {
            a()
            B()
            a()
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Half))
            a()
            B()
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        D()
        c()
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        D()
        E()

        function c() {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
        }
        function D() {
            c()
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.playTone(196, music.beat(BeatFraction.Whole))
        }
        function E() {
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(196, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
            function B() {
            music.playTone(208, music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
            music.playTone(220, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Quarter))
        }
        function a() {
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(370, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Quarter))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.rest(music.beat(BeatFraction.Quarter))
        }
        function Super() {
           
        }
    }
}
