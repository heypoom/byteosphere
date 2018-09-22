import Game from  '../core/Game.js'
import {Vector} from '../core/utils.js'

export default class Controllable {
  constructor() {
    this.size = 50
    this.position = Vector.of(this.size, this.size)
    this.moveBy = Math.round(this.size / 6)
  }

  up() {
    this.position.y -= this.moveBy

    if (this.position.y < 0) {
      this.position.y = 0
    }
  }

  down() {
    this.position.y += this.moveBy

    const boundary = Game.height - this.size

    if (this.position.y > boundary) {
      this.position.y = boundary
    }
  }

  left() {
    this.position.x -= this.moveBy

    if (this.position.x < 0) {
      this.position.x = 0
    }
  }

  right() {
    this.position.x += this.moveBy

    const boundary = Game.width - (this.size / 2)

    if (this.position.x > boundary) {
      this.position.x = boundary
    }
  }
}