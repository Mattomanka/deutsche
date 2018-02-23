import CardsResource from './resources'

export default {
  getCards: function () {
    return CardsResource.get()
    .then(response => {
      console.log('get')
      console.log(response)
      return 5
    })
    .catch(error => {
      console.error(error)
    })
  }
}
