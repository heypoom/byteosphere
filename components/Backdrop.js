export default class Backdrop {
  stop = 0

  update(ctx, game) {
    this.stop++
  
    ctx.fillStyle = `hsla(${this.stop}, 80%, 60%, 1.0)`
    ctx.fillRect(0, 0, game.width, game.height)

    if (this.stop > 360) {
      this.stop = 0
    }
  }
}