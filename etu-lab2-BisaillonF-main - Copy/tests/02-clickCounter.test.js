/* eslint-env jest */
import ClickCounter from '../src/components/02-clickCounter'

beforeEach(() => {
  document.body.innerHTML = `
    <p id="counter"></p>
    <button id="increment-counter">Clic</button>
    `
})

describe('Exercice 2 - Compteur', () => {
  test("À l'ouverture, le texte du compteur doit être initialisé à 0 ", () => {
    // arrange
    const clickCounter = new ClickCounter()

    // action
    clickCounter.initialize()

    // assert
    expect(document.getElementById('counter').innerHTML).toEqual('0')
  })
  test("Sur le clic d'un bouton, le compteur doit incrémenter de 1", () => {
    // arrange
    const clickCounter = new ClickCounter()
    clickCounter.initialize()

    // action
    document.getElementById('increment-counter').click()

    // assert
    expect(document.getElementById('counter').innerHTML).toEqual('1')
  })
})
