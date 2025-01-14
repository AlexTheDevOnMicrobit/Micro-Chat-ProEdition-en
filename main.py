def on_button_pressed_a():
    if Chat_1 == 0:
        radio.send_string("Hello")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

Chat_1 = 0
radio.set_group(1)
Chat_1 = 0