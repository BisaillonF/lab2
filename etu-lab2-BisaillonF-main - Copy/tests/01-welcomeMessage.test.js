/* eslint-env jest */
import WelcomeMessage from '../src/components/01-welcomeMessage'

beforeEach(() => {
  document.body.innerHTML = `
    <div id="welcome-message"></div>
    <button id="clear-message"></button>
    `
})
describe('Exercice 1 - Message de bienvenue', () => {
  test("À l'ouverture, un message de bienvenue est affiché", () => {
    // arrange
    const welcomeMessage = 'Allo JavaScript !!!'
    const welcomeMessageComponent = new WelcomeMessage(welcomeMessage)

    // action
    welcomeMessageComponent.initialize()

    // assert
    expect(document.getElementById('welcome-message').innerHTML).toEqual(
      welcomeMessage
    )
  })
  test("Sur le clic d'un bouton, le message de bienvenue doit s'effacer'", () => {
    // arrange
    const welcomeMessageComponent = new WelcomeMessage('Bonjour')
    welcomeMessageComponent.initialize()

    // action
    document.getElementById('clear-message').click()

    // assert
    expect(document.getElementById('welcome-message').innerHTML).toEqual('')
  })
})
