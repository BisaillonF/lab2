/* eslint-env jest */
import FavoriteCourse from '../src/components/04-favoriteCourse'

beforeEach(() => {
  // Vous ne devriez pas modifier le code ci-dessous.
  // Pour accéder aux boutons, utilisez "querySelectorAll" qui retourne un array des boutons.
  document.body.innerHTML = `
  <div id = "component-favorite-course">  
    <button>A</button>
    <button>B</button>
    <button>C</button>
    <button>D</button>
    <p id="favorite-course"></p>
  </div>
  `
})

describe('Exercice 4', () => {
  test("À l'ouverture, le cours préféré doit être vide.", () => {
    const favoriteCourse = new FavoriteCourse()

    favoriteCourse.initialize()

    expect(document.getElementById('favorite-course').innerHTML).toEqual('')
  })
  test("Sur le clic d'un bouton, le texte du bouton doit s'afficher comme cours préféré.", () => {
    const favoriteCourse = new FavoriteCourse()

    favoriteCourse.initialize()
  })
})
