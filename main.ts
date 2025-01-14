input.onButtonPressed(Button.A, function () {
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
})
input.onButtonPressed(Button.AB, function () {
    Chat_1 = 0
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Chat_1 += Chat_1 + 1
})
let Chat_1 = 0
radio.setGroup(1)
Chat_1 = 0
