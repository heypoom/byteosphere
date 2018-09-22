// @ts-check

import Controllable from './Controllable.js'

export default class Player extends Controllable {
  /** @param {CanvasRenderingContext2D} ctx */
  update(ctx) {
    const {size, position: {x, y}} = this
    let color = '#fff'

    if (this.isColliding) {
      color = '#2d2d30'
    }

    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.lineWidth = 5

    const b = 10

    ctx.fillRect(x, y, size, size)
    ctx.strokeRect(x - b, y - b, size + b * 2, size + b * 2)
  }
}