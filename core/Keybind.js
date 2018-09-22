export default class Keybind {
  static setup(keymap) {
    addEventListener('keydown', ({key, keyCode}) => {
      console.log('Key Pressed:', key, keyCode)

      const handle = keymap[key]

      if (handle) handle()
    })
  }
}