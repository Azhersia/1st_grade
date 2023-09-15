import { checkwalls } from './physics.js'
import { checkCollisions } from './physics.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let dx = 2
let speed = 5
const enemyArray = []

canvas.width = 800
canvas.height = 600
canvas.style.border = '1px solid black'

// player1
let player = {
  x: 200,
  y: 300,
  w: 50,
  h: 50,
  color: 'blue'
}

function createEnemy(x, y, w, h, color) {
  let enemy = {
    x: Math.floor(Math.random() * (canvas.width - 50)),
    y: Math.floor(Math.random() * (canvas.height - 50)),
    w: 50,
    h: 50,
    color: color
  }

  enemyArray.push(enemy)
}

createEnemy('purple')
createEnemy('green')

console.log(enemyArray)
function drawEnemies() {
  for (let i = 0; i < enemyArray.length; i++) {
    ctx.fillStyle = enemyArray[i].color
    ctx.fillRect(enemyArray[i].x, enemyArray[i].y, enemyArray[i].w, enemyArray[i].h)
  }
}

let keys = {
  w: false,
  a: false,
  s: false,
  d: false
}

function gameLoop() {
  logic()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  circle()
  drawPlayer(player.x, player.y, player.w, player.h, player.color)
  drawEnemies()

}
function circle() {
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red'
  ctx.fill()
}


function drawPlayer(x, y, w, h, color) {
  // places rectangle
  ctx.fillRect(x, y, w, h)
  ctx.fillStyle = color
}
function logic() {
  checkwalls(player, canvas.width, canvas.height, keys)

  checkCollisions(player, enemyArray, keys)
  movePlayer()
}




function movePlayer() {
  if (keys.w) {
    player.y -= speed
  }
  if (keys.a) {
    player.x -= speed
  }
  if (keys.s) {
    player.y += speed
  }
  if (keys.d) {
    player.x += speed
  }
}

// checks if key is pressed
window.addEventListener('keydown', (e) => {
  if (e.key == 'w') {
    keys.w = true
  }
  if (e.key == 'a') {
    keys.a = true
  }
  if (e.key == 's') {
    keys.s = true
  }
  if (e.key == 'd') {
    keys.d = true
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key == 'w') {
    keys.w = false
  }
  if (e.key == 'a') {
    keys.a = false
  }
  if (e.key == 's') {
    keys.s = false
  }
  if (e.key == 'd') {
    keys.d = false
  }
});

/*function moveSideToSide() {
  if (player.x > canvas.width - player.w || player.x < 0) {
    dx = - dx
  }
  player.x += dx
}*/




setInterval(gameLoop, 1000 / 60)


