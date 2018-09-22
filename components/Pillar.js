import Vector from "../core/Vector.js"

export default class Pillar {
  reverse = false
  moveBy = 5
  position = new Vector()

  constructor(x = 30) {
    this.position.x = x
  }

  /** @param {CanvasRenderingContext2D} ctx */
  update(ctx, game) {
    const {x, y} = this.position

    if (x > game.width) {
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
    ctx.fillRect(x, y, 10, game.height)
  }
}