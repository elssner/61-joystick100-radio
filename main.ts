input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(a[0])
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    a = qwiicjoystick.readArray(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20), qwiicjoystick.eBereich.D_100_100)
    basic.showNumber(a[0])
})
let a: number[] = []
radio.setTransmitPower(7)
radio.setFrequencyBand(1)
radio.setGroup(220)
qwiicjoystick.beimStart(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20))
a = qwiicjoystick.readArray(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20), qwiicjoystick.eBereich.D_100_100)
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    # # # # #
    . # . # .
    `)
let ready = true
loops.everyInterval(500, function () {
    if (ready) {
        a = qwiicjoystick.readArray(qwiicjoystick.qwiicjoystick_eADDR(qwiicjoystick.eADDR.Joystick_x20), qwiicjoystick.eBereich.D_100_100)
        radio.sendNumber(a[0])
    }
})
