<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <card v-for="card in cards" :key="card.id" :info="card"></card>
  </div>
</template>

<script>
import Card from '@/components/Card'
import getCards from '../api/cards'

console.log(getCards)

export default {
  name: 'home',
  components: {
    'card': Card
  },
  data () {
    return {
      msg: 'Home page',
      // cards: [
      //   {
      //     'artikel': '',
      //     'word': 'buchstabieren',
      //     'plural': '',
      //     'translation': 'читать по складам; произносить по буквам',
      //     'description': ''
      //   },
      //   {
      //     'artikel': '',
      //     'word': 'leben',
      //     'plural': '',
      //     'translation': 'жить; существовать',
      //     'description': '▶ wie die Leute leben!— живут же люди!▶ man lebt nur einmal!— живёшь только раз!▶ sein eigenes Leben leben— жить своей жизнью'
      //   },
      //   {
      //     'artikel': '',
      //     'word': 'lesen',
      //     'plural': '',
      //     'translation': 'читать',
      //     'description': '▶ laut lesen— читать вслух▶ das Buch liest sich gut— книга легко читается▶ sich müde lesen— устать от чтения'
      //   }
      // ]
      cards: JSON.parse(getCards)
    }
  },
  getNewCards () {
    console.log(getCards)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
