function mouseUp() {
    cancelAnimationFrame(animate)
}

function mouseRightUp() {
    cancelAnimationFrame(animate2)
}

function mouseLeftUp() {
    cancelAnimationFrame(animate3)
}

function mouseReverseUp() {
    cancelAnimationFrame(animate4)
}
document.querySelector(".buttonDrive").addEventListener("mousedown", mouseDown), document.querySelector(".buttonDrive").addEventListener("mouseup", mouseUp), document.querySelector(".buttonReverse").addEventListener("mousedown", mouseReverseDown), document.querySelector(".buttonReverse").addEventListener("mouseup", mouseReverseUp), document.querySelector("#arrowright").addEventListener("mousedown", mouseRightDown), document.querySelector("#arrowright").addEventListener("mouseup", mouseRightUp), document.querySelector("#arrowleft").addEventListener("mousedown", mouseLeftDown), document.querySelector("#arrowleft").addEventListener("mouseup", mouseLeftUp), document.querySelector(".buttonDrive").addEventListener("mouseout", mouseUp), document.querySelector(".buttonReverse").addEventListener("mouseout", mouseReverseUp), document.querySelector("#arrowright").addEventListener("mouseout", mouseRightUp), document.querySelector("#arrowleft").addEventListener("mouseout", mouseLeftUp);
var canvas, animate, animate2, animate3, animate4, alerted = !1;

function parkingLot(t) {
    ctx.fillRect(590, 0, 10, canvas.height), ctx.fillRect(450, 0, 140, 10), ctx.fillRect(450, 90, 140, 10), ctx.fillRect(450, 180, 140, 10), ctx.fillStyle = "#00FF00", ctx.fillRect(450, 270, 20, 10), ctx.fillRect(480, 270, 20, 10), ctx.fillRect(510, 270, 20, 10), ctx.fillRect(540, 270, 20, 10), ctx.fillRect(570, 270, 20, 10), ctx.fillStyle = "#00FF00", ctx.fillRect(450, 360, 20, 10), ctx.fillRect(480, 360, 20, 10), ctx.fillRect(510, 360, 20, 10), ctx.fillRect(540, 360, 20, 10), ctx.fillRect(570, 360, 20, 10)
}

function parkDetector() {
    280 < y && y < 300 && 460 < x ? alert("You Parked!") : alert("You didn't park")
}

function mouseDown() {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.rect(x, y, 110, 65), ctx.rect(x + 5, y + 58, 30, 10), ctx.rect(x + 75, y + 58, 30, 10), ctx.rect(x + 5, y - 3, 30, 10), ctx.rect(x + 75, y - 3, 30, 10), ctx.fillStyle = "#000000", ctx.fill(), x += 5, animate = requestAnimationFrame(mouseDown), 500 < x && GameOver(), parkingLot()
}

function mouseRightDown(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.rect(x, y, 110, 65), ctx.rect(x + 5, y + 58, 30, 10), ctx.rect(x + 75, y + 58, 30, 10), ctx.rect(x + 5, y - 3, 30, 10), ctx.rect(x + 75, y - 3, 30, 10), ctx.fillStyle = "#000000", ctx.fill(), y += 1.5, x += .3, y > canvas.height - 66 && GameOver(), animate2 = requestAnimationFrame(mouseRightDown), parkingLot()
}

function mouseLeftDown(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.rect(x, y, 110, 65), ctx.rect(x + 5, y + 58, 30, 10), ctx.rect(x + 75, y + 58, 30, 10), ctx.rect(x + 5, y - 3, 30, 10), ctx.rect(x + 75, y - 3, 30, 10), ctx.fillStyle = "#000000", ctx.fill(), y += -1.5, x += .3, y < -1 && GameOver(), animate3 = requestAnimationFrame(mouseLeftDown), parkingLot()
}

function mouseReverseDown(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height), ctx.beginPath(), ctx.rect(x, y, 110, 65), ctx.rect(x + 5, y + 58, 30, 10), ctx.rect(x + 75, y + 58, 30, 10), ctx.rect(x + 5, y - 3, 30, 10), ctx.rect(x + 75, y - 3, 30, 10), ctx.fillStyle = "#000000", ctx.fill(), x += -4, x < -2 && GameOver(), animate4 = requestAnimationFrame(mouseReverseDown), parkingLot()
}

function GameOver() {
    !0 === alerted || (alert("You crashed!"), alerted = !1)
}
canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d"), last = performance.now(), x = 0, y = 20, parkingLot();