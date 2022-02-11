export default class WelcomeMessage {
  constructor (message) {
    // Initialisation des éléments du DOM. Par convention, utiliser El comme suffixe pour les variables du DOM
    this.welcomeMessageEl = document.getElementById('welcome-message')
    this.clearMessageEl = document.getElementById('clear-message')

    // Déclaration des données utilisées par le "component" qui ne sont pas du DOM
    this.message = message
  }

  initialize () {
    // Ajout des événements à gérer dans le DOM
    this.clearMessageEl.addEventListener('click', () => this.clearMessage())
    this.renderDOM()
  }

  renderDOM () {
    this.welcomeMessageEl.innerHTML = this.message
  }

  clearMessage () {
    this.message = ''
    this.renderDOM()
  }
}
