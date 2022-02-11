/* eslint-env jest */

import ColorsListAdder from '../src/components/06-colorsListAdder'

beforeEach(() => {
  document.body.innerHTML = `
  <input id="color-to-add"/>  
  <button id="add-color">Clic</button>
    `
})

describe('Exercice 6', () => {
  test("Sur le clic d'un bouton, l'événement addColorEvent doit être lancé globalement", () => {
    // arrange
    let addColorEventHasBeenSent = false
    const colorToAdd = 'jaune'
    document.getElementById('add-color').value = colorToAdd
    const colorsListAdder = new ColorsListAdder()
    document.body.addEventListener('addColorEvent', () => {
      addColorEventHasBeenSent = true
    })

    colorsListAdder.initialize()

    // action
    document.getElementById('add-color').click()

    expect(addColorEventHasBeenSent).toBeTruthy()
  })
})
