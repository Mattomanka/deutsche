import CardsResource from './resources'

export default {
  getCards: function () {
    return CardsResource.get()
    .then(response => {
      return response
    })
    .catch(error => {
      console.error(error)
    })
  }
}
