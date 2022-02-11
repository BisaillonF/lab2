export default class ClickCounter {
  constructor () {
    this.counterEl = document.getElementById('counter')
    this.clickCounterEl = document.getElementById('increment-counter')
    this.counter = ''
  }

  initialize () {
    this.clickCounterEl.addEventListener('click', () => this.incrementCounter())
    this.counter = 0
    this.renderDOM()
  }

  renderDOM () {
    this.counterEl.innerHTML = this.counter
  }

  incrementCounter () {
    this.counter += 1
    this.renderDOM()
  }
}
