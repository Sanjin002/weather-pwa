<template>
 <div class="container-fluid">
  <b-navbar class="crta" toggleable="lg" type="dark"  >
    

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse   is-nav id="nav_collapse">
      <b-navbar-nav class="lista  ">
        <b-nav-item class="link " to="/">HOME</b-nav-item>
        <b-nav-item  class="link" to="/Forecast">FORECAST</b-nav-item>
        <b-nav-item class="link"  to="/Crops">CROPS</b-nav-item>
        <b-nav-item  class="link " to="/New">NEW</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav>
         <select v-model="selected">
          <option>Select the city</option>
          <option v-for="city in cities"> 
            {{city.name}}</option>
          </select>
        <span>Selected: {{ selected }}</span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import axios from 'axios'
import Forecast from '@/components/Forecast'
export default {
  name: 'navbar',
  data () {
    return {
     cities: [],
     selected:''

    }
  },
  mounted () {
    axios
      .get('http://meteo.pointjupiter.co')
      .then(response => {
        (this.cities = response.data.cities);
      });
  },
  methods: {
        model: function(){
          this.$emit('changeSelected','Zagreb');
        }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/*.navbar {
  display: inline-block;
  float: left;
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
}*/
.lista {
  font-size: 25px;
  color: white;
  font-family: sans-serif;
   
}

.lista.active .link {

  border: 1px solid white;

}
.lista .link:hover {
  
  border: 1px solid white;
  border-radius: 0px
  /*font-weight: bold;*/
   
}
.lista .link {
  padding: 3px 20px;
}
.crta {
  border-bottom:1px solid white;
  padding-bottom:5px;
  

}
.span {
  color: white;
}

span {
  color: white;
}

</style>