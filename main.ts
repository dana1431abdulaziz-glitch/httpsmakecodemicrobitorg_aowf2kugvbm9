let n = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + n + 2 ** n + "")
})
input.onButtonPressed(Button.B, function () {
    n += 0 - 1
})
