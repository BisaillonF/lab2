/* eslint-env jest */
import DogSelect from '../src/components/08-dogSelect'
import manyDogs from '../src/data/manyDogs.js'
//                                   ^
//                                   |____ contient les chiens qui sont utilisés par le component.

const dogs = [...manyDogs]

beforeEach(() => {
  document.body.innerHTML = `
      <select id="dogs"></select>
      <div id="dogs-count"></div>
      <form>
        <input id="dog-name" />
        <input id="dog-age" />
        <input id="dog-breed" />
      </form>
    `
})

describe('Exercice 8', () => {
  test("À l'ouverture, la liste doit contenir tous les noms des chiens.", () => {
    // arrange
    const dogSelect = new DogSelect()
    const expectedDogs = dogs.map(dog => {
      return dog.name
    })

    // action
    dogSelect.initialize()
    const optionsEls = Array.from(document.getElementById('dogs').options)
    const loadedDogs = optionsEls.map(option => {
      return option.value
    })

    // assert
    expect(loadedDogs).toStrictEqual(expectedDogs)
  })

  test("À l'ouverture, le nombre de chien contenu dans la liste doit s'afficher", () => {
    // arrange
    const dogSelect = new DogSelect()
    const dogsCount = dogs.length.toString()

    // action
    dogSelect.initialize()

    // assert
    expect(document.getElementById('dogs-count').innerHTML).toEqual(dogsCount)
  })

  test("Sur la sélection d'un chien dans la liste, les champs doivent se remplir avec les données du chien sélectionné.", () => {
    // arrange
    const dogSelect = new DogSelect()
    const selectedDog = dogs[1]
    dogSelect.initialize()
    document.getElementById('dogs').selectedIndex = 1

    // action
    // Ci-dessous, on lance l'événement "change". C'est l'événement qui est lancé
    // lorsqu'un élément est sélectionné dans un Select.
    document.getElementById('dogs').dispatchEvent(new Event('change'))
    // Voir :
    //   dispatchEvent : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/dispatchEvent
    //   change :https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/change_event.

    // assert
    expectDogDetailsEquals(selectedDog)
  })
})

test("À l'ouverture, le premier chien de la liste doit être affiché", () => {
  // arrange
  const dogSelect = new DogSelect()
  const selectedDog = dogs[0]

  // action
  dogSelect.initialize()

  // assert
  expectDogDetailsEquals(selectedDog)
})

function expectDogDetailsEquals (selectedDog) {
  expect(document.getElementById('dog-name').value).toEqual(selectedDog.name)
  expect(document.getElementById('dog-age').value).toEqual(
    selectedDog.age.toString()
  )
  expect(document.getElementById('dog-breed').value).toEqual(selectedDog.breed)
}
