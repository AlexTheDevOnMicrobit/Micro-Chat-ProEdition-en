enum RadioMessage {
    message1 = 49434,
    switchradio = 52629
}
input.onButtonPressed(Button.A, function () {
    Chat_1 += Chat_1 + 1
})
input.onButtonPressed(Button.AB, function () {
    if (Chat_1 == -1) {
        radio.sendMessage(RadioMessage.switchradio)
        radio.setGroup(Chat_2 + 2)
        basic.showString("GS")
        basic.showNumber(Chat_2)
        basic.clearScreen()
    }
    if (Chat_1 == 0) {
        radio.sendString("Hello")
    }
    if (Chat_1 == 1) {
        radio.sendString("How are you ?")
    }
    if (Chat_1 == 2) {
        radio.sendString("Yes")
    }
    if (Chat_1 == 3) {
        radio.sendString("No")
    }
    if (Chat_1 == 4) {
        radio.sendString("Good")
    }
    if (Chat_1 == 5) {
        radio.sendString("More later ...")
    }
    if (Chat_1 < -2) {
        Chat_1 = -1
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Chat_1 += Chat_1 - 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.South)
    radio.setTransmitPower(Power_Radio - 1)
})
radio.onReceivedMessage(RadioMessage.switchradio, function () {
    radio.setGroup(Chat_2)
    basic.showString("GS")
    basic.showNumber(Chat_2)
    basic.clearScreen()
})
let Chat_2 = 0
let Power_Radio = 0
let Chat_1 = 0
Chat_1 = 0
Power_Radio = 0
radio.setTransmitPower(7)
radio.setGroup(1)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
    basic.pause(150)
}
basic.showIcon(IconNames.Yes)
basic.clearScreen()
