enum RadioMessage {
    message1 = 49434,
    switchradio = 52629,
    Recive = 33629
}
/**
 */
/**
 * Besion : -Faire fonctionner le switch groupe, -Chek MEssage
 * 
 * boot système
 */
input.onButtonPressed(Button.A, function () {
    Chat_1 += Chat_1 + 1
})
radio.onReceivedMessage(RadioMessage.Recive, function () {
    Receve = 1
})
input.onButtonPressed(Button.AB, function () {
    if (Chat_1 == -1) {
        radio.sendMessage(RadioMessage.switchradio)
        Chat_2 = Chat_2 + 1
        radio.setGroup(Chat_2)
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
        radio.sendString("What time it is ?")
    }
    if (Chat_1 == 6) {
        radio.sendString("More later ...")
    }
    if (Chat_1 < -2) {
        Chat_1 = -1
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
    if (Chat_1 > 6) {
        Chat_1 = 6
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
})
radio.onReceivedString(function (receivedString) {
    radio.sendMessage(RadioMessage.Recive)
    basic.showString(receivedString)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Chat_1 += Chat_1 - 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Power_Radio = Power_Radio - 1
    radio.setTransmitPower(Power_Radio)
    basic.showArrow(ArrowNames.South)
    basic.pause(50)
    basic.clearScreen()
    basic.showNumber(Power_Radio)
    basic.pause(50)
    basic.clearScreen()
    if (Power_Radio < 0) {
        Power_Radio = 0
        basic.showIcon(IconNames.No)
    }
})
radio.onReceivedMessage(RadioMessage.switchradio, function () {
    Chat_2 = Chat_2 + 1
    radio.setGroup(Chat_2)
    basic.showString("GS")
    basic.showNumber(Chat_2)
    basic.clearScreen()
})
let Chat_2 = 0
let Power_Radio = 0
let Chat_1 = 0
let Receve = 0
Receve = 0
let Boot = 0
Chat_1 = 0
Power_Radio = 7
radio.setTransmitPower(Power_Radio)
radio.setGroup(1)
Boot = 1
while (Boot == 0) {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
    basic.pause(75)
}
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    if (Receve == 1) {
        Receve = 0
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
    }
})
