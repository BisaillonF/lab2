/* eslint-env jest */
import CatForm from '../src/components/07-catForm'
import oneCat from '../src/data/oneCat.js'
//                                 ^
//                                 |____ contient les données utilisées par le component.

const cat = { ...oneCat }

beforeEach(() => {
  document.body.innerHTML = `
    <button id="clear-cat"> 
    <input type="text" id="cat-name" />
    <input type="number" id="cat-age" />
    <input type="text" id="cat-breed" />
  `
})

// Les données du chat se trouvent dans  /data/oneCat.js (voir import ci-dessus)
describe('Exercice 7', () => {
  test("À l'ouverture, tous les champs doivent s'afficher avec les informations contenues dans le fichier oneCat.js", () => {
    // arrange
    const catForm = new CatForm()

    // action
    catForm.initialize()

    // assert
    expect(document.getElementById('cat-name').value).toEqual(cat.name)
    expect(document.getElementById('cat-age').value).toEqual(cat.age.toString())
    expect(document.getElementById('cat-breed').value).toEqual(cat.breed)
  })

  test("Sur le clic du bouton, tous les champs doivent s'effacer.", () => {
    // arrange
    const catForm = new CatForm()
    catForm.initialize()

    // action
    document.getElementById('clear-cat').click()

    // assert
    expect(document.getElementById('cat-name').value).toEqual('')
    expect(document.getElementById('cat-age').value).toEqual('')
    expect(document.getElementById('cat-breed').value).toEqual('')
  })
})
