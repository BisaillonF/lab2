import WelcomeMessage from './components/01-welcomeMessage.js'
import ClickCounter from './components/02-clickCounter.js'
import Calculator from './components/03-calculator.js'
import FavoriteCourse from './components/04-favoriteCourse.js'
import ColorsList from './components/05-colorsList.js'
import ColorListAdder from './components/06-colorsListAdder.js'
import CatForm from './components/07-catForm.js'
import DogSelect from './components/08-dogSelect'

document.addEventListener('DOMContentLoaded', function () {
  const welcomeMessage = new WelcomeMessage('Allo JavaScript !')
  const clickCounter = new ClickCounter()
  const calculator = new Calculator()
  const favoriteCourse = new FavoriteCourse()
  const colorList = new ColorsList(['bleu', 'blanc', 'rouge', 'jaune'])
  const catForm = new CatForm()
  const dogSelect = new DogSelect()
  const colorListAdder = new ColorListAdder(colorList)

  welcomeMessage.initialize()
  clickCounter.initialize()
  calculator.initialize()
  favoriteCourse.initialize()
  colorList.initialize()
  catForm.initialize()
  dogSelect.initialize()
  colorListAdder.initialize()
})
