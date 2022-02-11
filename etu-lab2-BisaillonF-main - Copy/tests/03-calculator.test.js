/* eslint-env jest */

import Calculator from '../src/components/03-calculator'

beforeEach(() => {
  document.body.innerHTML = `
  <input id="number-a"/>
  <input id="number-b"/>
  <button id="add-numbers"></button>
  <output id="sum"></output>
    `
})

describe('Exercice 3', () => {
  test("À l'ouverture, le champ de saisi 'Nombre A' doit être vide", () => {
    // arrange
    const calculator = new Calculator()

    // action
    calculator.initialize()

    // assert
    expect(document.getElementById('number-a').innerHTML).toEqual('')
  })
  test("À l'ouverture, le champ de saisi 'Nombre B' doit être vide", () => {
    // arrange
    const calculator = new Calculator()

    // action
    calculator.initialize()

    // assert
    expect(document.getElementById('number-b').innerHTML).toEqual('')
  })

  test("À l'ouverture, la somme doit être de 0", () => {
    // arrange
    const calculator = new Calculator()

    // action
    calculator.initialize()
    // assert
    expect(document.getElementById('sum').innerHTML).toEqual('0')
  })

  test("Sur le clic d'un bouton, la somme des deux nombres doit s'afficher", () => {
    // arrange
    const calculator = new Calculator()
    const numberA = document.getElementById('number-a')
    const numberB = document.getElementById('number-b')

    // action
    calculator.initialize()
    numberA.innerHTML = 2
    numberB.innerHTML = 4
    document.getElementById('add-numbers').click()
    // assert
    expect(document.getElementById('sum').innerHTML).toEqual('6')
  })
})
