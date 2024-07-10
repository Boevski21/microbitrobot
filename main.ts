input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.beepHorn()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pause2 = 1
})
let mesure_distances = 0
let pause2 = 0
pause2 = 0
basic.forever(function () {
    mesure_distances = Kitronik_Move_Motor.measure()
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    if (mesure_distances >= 10) {
        Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Right, 60)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    } else {
        Kitronik_Move_Motor.stop()
        if (pause2 == 0) {
            for (let index = 0; index < 3; index++) {
                Kitronik_Move_Motor.beepHorn()
            }
            Kitronik_Move_Motor.stop()
        }
        if (mesure_distances <= 10) {
            basic.pause(500)
            Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 100)
        } else {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
        }
    }
})
