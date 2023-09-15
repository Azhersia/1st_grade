const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 600
canvas.style.border = '1px solid black'

// changes colors
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'green'

// places rectangle
//ctx.fillRect(350, 250, 100, 100)

// draws a line
function line(x, y, dx, dy) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(dx, dy)
  ctx.stroke()
}

//box around circle
line(400, 200, 400, 300)
line(400, 200, 300, 200)
line(400, 300, 300, 300)
line(300, 200, 300, 300)

// create circle
ctx.beginPath()
ctx.arc(350, 250, 50, 0, 2 * Math.PI)
ctx.stroke()

// circle lines
line(300, 250, 350, 300)
line(350, 200, 300, 250)
line(350, 300, 400, 250)
line(350, 200, 400, 250)
line(350, 200, 350, 300)
line(300, 250, 400, 250)

line(375, 225, 350, 250)
line(375, 275, 350, 250)
line(325, 275, 350, 250)
line(325, 225, 350, 250)

line(400, 225, 450, 250)
line(400, 275, 450, 250)

line(325, 300, 350, 350)
line(375, 300, 350, 350)

line(300, 255, 200, 350)
