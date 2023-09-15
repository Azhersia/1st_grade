export function checkwalls(player, cW, cH, keys) {

  if (player.y < 0) {
    keys.w = false
  }
  if ((player.x) < 0) {
    keys.a = false
  } if ((player.y + player.w) > cH) {
    keys.s = false
  } if ((player.x + player.w) > cW) {
    keys.d = false
  }

}

export function checkCollisions(player, enemy, keys) {
  enemy.forEach(e => {
    if ((player.x + player.w) > e.x &&
      (player.y + player.h) > e.y &&
      player.y < (e.y + e.h) &&
      player.x < (e.x + e.w)
    ) {
      keys.d = false
    }

    if ((player.y + player.h) >= e.y &&
      (player.x + player.w) > e.x &&
      player.x < (e.x + e.w) &&
      player.y < (e.y + e.h)) {
      keys.s = false
    }

    if ((player.x) < (e.x + e.w) &&
      (player.y + player.h) > e.y &&
      player.y < (e.y + e.h) &&
      (player.x + player.w) > e.x) {
      keys.a = false
    }

    if (player.y <= (e.y + e.h) &&
      (player.x + player.w) > e.x &&
      player.x < (e.x + e.w) &&
      (player.y + player.h) > e.y) {
      keys.w = false
    }
  })

}

