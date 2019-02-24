<template>
 <div> 

   <b-nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <b-nav-item to="/">Home</b-nav-item>
    <b-nav-item to="/Crops">Crops</b-nav-item>
    <b-nav-item to="/Forecast">Forecast</b-nav-item>
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
<style scoped>

</style>