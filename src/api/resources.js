import Vue from 'vue'
import VueResource from 'vue-resource'
import {API_ROOT} from '../config'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.credentials = true

export default {
  CardsResource: Vue.resource(API_ROOT + 'cards.json',
                  function (data, status, request) {
                    return 5
                    // .then(response => {
                    //   console.log('get')
                    //   console.log(response)
                    //   return 5
                    // })
                    // .catch(error => {
                    //   console.error(error)
                    // })
                  }
                )
}
