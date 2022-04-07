input.onButtonPressed(Button.A, function () {
    if (Choix == 0 || Choix == 3) {
        Choix = 1
        basic.showNumber(Choix)
    } else if (Choix == 1) {
        Choix = 2
        basic.showNumber(Choix)
    } else {
        Choix = 3
        basic.showNumber(Choix)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    if (Choix == 1) {
        extra.Super(138)
    } else if (Choix == 2) {
        extra.Star(120)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
    }
    basic.showNumber(Choix)
})
let Choix = 0
music.setVolume(255)
Choix = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
extra.fleche()
