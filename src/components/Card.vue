<template>
  <div class="card">
    {{info.word}} - {{info.translation}}
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      msg: 'Card component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
