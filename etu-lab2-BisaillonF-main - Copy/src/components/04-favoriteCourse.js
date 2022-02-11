export default class FavoriteCourse {
  constructor () {
    const componentEl = document.getElementById('component-favorite-course')
    const buttonsEls = componentEl.querySelectorAll('button')
    const length = buttonsEls.length
    const favoriteCourseEl = document.getElementById('favorite-course')
    const favoriteCourse = ''
  }

  initialize () {
    for (let index = 0; index < this.length; index++) {
      this.buttonsEls[index].addEventListener('click', () =>
        this.displayMessage(index)
      )
    }
    this.renderDOM()
  }

  renderDOM () {
    this.favoriteCourseEl = this.favoriteCourse
  }

  displayMessage (index) {
    this.favoriteCourse = this.buttonsEls[index].textContent
    this.renderDOM()
  }
}
