import Vector from "../core/Vector.js"

export default class Pipe {
  reverse = false
  moveBy = 5
  height = 0
  maxHeight = 500
  position = new Vector()

  constructor(x = 100) {
    this.position.x = x

    this.height = Math.floor(Math.random() * this.maxHeight)
  }

  /** @param {CanvasRenderingContext2D} ctx */
  update(ctx, game) {
    if (this.height > this.maxHeight) {
      this.reverse = true
    } else if (this.height < 0) {
      this.reverse = false
    }
    
    if (this.reverse) {
      this.height -= this.moveBy
    } else {
      this.height += this.moveBy
    }

    this.position.y = game.height - this.height

    const {x, y} = this.position

    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, 30, this.height)
  }
}