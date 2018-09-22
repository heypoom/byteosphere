import Game from  '../core/Game.js'
import Vector from '../core/Vector.js'
import Registry from '../core/Registry.js'

export default class Controllable {
  constructor() {
    this.size = 50
    this.position = Vector.of(this.size, this.size)
    this.moveBy = Math.round(this.size / 6)
  }

  get colliding() {
    const {size} = this
    const {x, y} = this.position

    for (let box of Registry.list) {
      if (box.collide && box.position) {
        const {x: bx, y: by} = box.position
        let {width = 0, height = 0} = box

        if (box.size) {
          width = box.size
          height = box.size
        }

        const isColliding = x < bx + width &&
          x + size > bx &&
          y < by + height &&
          y + size > by

        if (isColliding) {
          this.isColliding = true

          return true
        }
      }
    }

    this.isColliding = false

    return false
  }

  up() {
    if (this.colliding) return

    this.position.y -= this.moveBy

    if (this.position.y < 0) {
      this.position.y = 0
    }
  }

  down() {
    if (this.colliding) return

    this.position.y += this.moveBy

    const boundary = Game.height - this.size

    if (this.position.y > boundary) {
      this.position.y = boundary
    }
  }

  left() {
    if (this.colliding) return

    this.position.x -= this.moveBy

    if (this.position.x < 0) {
      this.position.x = 0
    }
  }

  right() {
    if (this.colliding) return

    this.position.x += this.moveBy

    const boundary = Game.width - (this.size / 2)

    if (this.position.x > boundary) {
      this.position.x = boundary
    }
  }
}