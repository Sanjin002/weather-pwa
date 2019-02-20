<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Menu</h2>
    <ul>
      <li><a href="" target="_blank" rel="noopener">Weather</a></li>
      <li><a> <router-link to="/crops">Crops Info</router-link></a></li>
      <li><a href="" target="_blank" rel="noopener">Add note</a></li>
      <li><a href="" target="_blank" rel="noopener">GDD</a></li>
      <li><a href="" target="_blank" rel="noopener">About us</a></li>
    </ul>
    <h2>Powerd by</h2>
    <ul>
      <li><a href="" target="_blank" rel="noopener">Point Jupiter</a></li>
      <li><a href="" target="_blank" rel="noopener">Kulenović Silvija</a></li>
      <li><a href="" target="_blank" rel="noopener">Paleka Marko</a></li>
      <li><a href="" target="_blank" rel="noopener">Rajković Josip</a></li>
      <li><a href="" target="_blank" rel="noopener">Traunkar Sanjin</a></li>
    </ul>
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
h1, h2 {
  color: #fff000;
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
  color: #35495E;
}
</style>
