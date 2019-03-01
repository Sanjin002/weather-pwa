<template>
  <div class="home">
    <b-container>

    <img src="./assets/agro.png" alt="Vue.js PWA">
    <h1>{{ msg }}</h1>
    <p id="demo"></p>

  </b-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your AgroApp'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
