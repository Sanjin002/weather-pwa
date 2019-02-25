<template>
 <div class="row">
  <b-nav class="main-nav">
    <b-nav-item  class="li a  " to="/">Home</b-nav-item>
    <b-nav-item to="/Crops">Crops</b-nav-item>
    <b-nav-item to="/Forecast">Forecast</b-nav-item>
    <b-nav-item  to="/New">New</b-nav-item>
    
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
/*.navbar {
  display: inline-block;
  float: left;*/
.main-nav{
  float: left;
  list-style: none;
  margin-top: 30px;
}

.main-nav li{
  display: inline-block;
}
.main-nav li a {
  color: white;
  text-decoration: none;
  padding: 5px 20px;
  font-family: sans-serif;
  font-size: 30px;
}
.main-nav li.active a{
  border: 1px solid white;
}
.main-nav li a:hover{
  border:1px solid white;
}
.row{
  
  margin: auto;
}
</style>