export default class ColorsList {
  constructor (colors) {
    this.componentEl = document.getElementById('colors')
    this.liEls = colors
    this.reverseButtonEl = document.getElementById('get-colors')
  }

  initialize () {
    this.reverseButtonEl.addEventListener('click', () => this.reverseArray())
    this.componentEl.addEventListener('addColorEvent', e =>
      this.liEls.push(e.detail.color)
    )
  }

  reverseArray () {
    this.liEls.reverse()
  }
}
