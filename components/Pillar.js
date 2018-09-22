import Game from "../core/Game.js"
import Vector from "../core/Vector.js"

export default class Pillar {
  moveBy = 5
  reverse = false
  position = new Vector()

  width = 10
  height = Game.height

  collide = true

  constructor(x = 30) {
    this.position.x = x
  }

  /** @param {CanvasRenderingContext2D} ctx */
  update(ctx) {
    const {x, y} = this.position

    if (x > Game.width) {
      this.reverse = true
    } else if (x < 0) {
      this.reverse = false
    }
    
    if (this.reverse) {
      this.position.x -= this.moveBy
    } else {
      this.position.x += this.moveBy
    }

    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, this.width, this.height)
  }
}