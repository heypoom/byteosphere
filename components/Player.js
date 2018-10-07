// @ts-check

import Controllable from './Controllable.js'

export default class Player extends Controllable {
  rotateBy = 0.0005
  rotating = false

  /** @param {CanvasRenderingContext2D} ctx */
  update(ctx) {
    const {size, position: {x, y}} = this
    let color = '#fff'

    if (this.checkCollision()) {
      color = '#2d2d30'
      
      ctx.globalAlpha = 0.3
      // ctx.rotate(0.001)
    } else {
      ctx.globalAlpha = 1.0
      // ctx.rotate(this.rotateBy)
    }

    if (this.rotating) {
      ctx.rotate(-this.rotateBy)
    }

    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.lineWidth = 5

    const b = 10

    ctx.fillRect(x, y, size, size)
    ctx.strokeRect(x - b, y - b, size + b * 2, size + b * 2)
  }

  setRotation(state, amount) {
    this.rotating = state || !this.rotating
    
    if (amount) this.rotateBy = amount
  }
}