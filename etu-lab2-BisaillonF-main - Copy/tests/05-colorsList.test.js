/* eslint-env jest */
import ColorsList from '../src/components/05-colorsList'

beforeEach(() => {
  // Vous ne devriez pas modifier le code ci-dessous.
  document.body.innerHTML = `
    <ul id="colors"></ul>
    <button id="get-colors">
    `
})

describe('Exercice 5', () => {
  test("À l'ouverture, la liste doit contenir des couleurs", () => {
    // arrange
    const colors = ['bleu', 'blanc', 'rouge']
    const colorList = new ColorsList(colors)
    colorList.initialize()

    // action

    // assert
    const liEls = Array.from(document.querySelectorAll('li'))
    const colorsResult = liEls.map(li => li.innerHTML)
    expect(colorsResult).toEqual(colors)
  })

  test("Sur le clic d'un bouton, la liste doit s'inverser", () => {
    // arrange
    const colors = ['bleu', 'blanc', 'rouge']
    const colorsList = new ColorsList([...colors])
    colors.reverse()
    colorsList.initialize()

    // action
    document.getElementById('get-colors').click()

    // assert
    const liEls = Array.from(document.querySelectorAll('li'))
    const colorsResult = liEls.map(li => li.innerHTML)
    expect(colorsResult).toEqual(colors)
  })

  test("Sur réception de l'événement global addColorEvent, une couleur doit s'ajouter à la liste", () => {
    // Méthode qui est utilisée par ColorsListAdder (question #8).
    const colors = ['bleu', 'blanc', 'rouge']
    const colorsList = new ColorsList([...colors])
    const colorToAdd = 'jaune'
    colorsList.initialize()

    // action : On lance l'événement global addColorEvent
    // Voir explication de CustomEvent : https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    document.body.dispatchEvent(
      new CustomEvent('addColorEvent', {
        detail: {
          color: colorToAdd
        }
      })
    )

    // assert
    const liEls = document.querySelectorAll('li')
    expect(liEls[colors.length].innerHTML).toEqual(colorToAdd)
  })
})
