export class Vector {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  static of(...args) {
    return new Vector(...args)
  }
}