export default class Calculator {
  constructor () {
    this.numberAEl = document.getElementById('number-a')
    this.numberBEl = document.getElementById('number-b')
    this.addNumberEl = document.getElementById('add-numbers')
    this.sumEl = document.getElementById('sum')
    this.sum = 0
  }

  initialize () {
    this.addNumberEl.addEventListener('click', () => this.calculateSum())
    this.renderDOM()
  }

  renderDOM () {
    this.sumEl.innerHTML = this.sum
  }

  calculateSum () {
    const numberA = parseInt(this.numberAEl.innerHTML)
    const numberB = parseInt(this.numberBEl.innerHTML)
    this.sum = numberA + numberB
    this.renderDOM()
  }
}
