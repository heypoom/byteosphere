import Keybind from './Keybind.js'
import R from './Registry.js'

import Player from '../components/Player.js'
import Backdrop from '../components/Backdrop.js'
import Pillar from '../components/Pillar.js'
import Pipe from '../components/Pipe.js';

class Game {
  R = R

  get width() {
    return visualViewport.width
  }

  get height() {
    return visualViewport.height
  }

  setup() {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.width = this.width
    this.canvas.height = this.height

    R.add(Backdrop)

    // Pillars
    R.add(Pillar, 30)
    R.add(Pillar, 60)
    R.add(Pillar, 90)

    // Pillars II
    R.add(Pillar, 500)
    R.add(Pillar, 530)
    R.add(Pillar, 560)

    // Pipes
    R.add(Pipe, 100 * 1)
    R.add(Pipe, 100 * 3)
    R.add(Pipe, 100 * 5)
    R.add(Pipe, 100 * 7)
    R.add(Pipe, 100 * 9)
    R.add(Pipe, 100 * 11)
    R.add(Pipe, 100 * 13)

    const player = R.add(Player)

    const keymap = {
      w: () => player.up(),
      s: () => player.down(),
      a: () => player.left(),
      d: () => player.right(),

      ArrowUp: () => player.up(),
      ArrowDown: () => player.down(),
      ArrowLeft: () => player.left(),
      ArrowRight: () => player.right(),
    }

    Keybind.setup(keymap)

    addEventListener('resize', () => {
      this.canvas.width = this.width
      this.canvas.height = this.height

      R.invoke('setup')
    })

    R.invoke('setup')

    this.update()
  }

  update(frame = 0) {
    R.invoke('update', frame)

    return requestAnimationFrame(frame => this.update(frame))
  }
}

const game = new Game()

export default game