<template>
  
 <div>
  <b-nav class="navbar">
    <b-nav-item to="/">Home</b-nav-item>
    <b-nav-item to="/Crops">Crops</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item >Disabled</b-nav-item>
  </b-nav>

  
 </div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
.navbar {
  display: inline-block;
  float: left;
}
</style>