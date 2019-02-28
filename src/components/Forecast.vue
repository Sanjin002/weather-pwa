<template>
<div class="container  ">
  <div class="row">

<div v-for="f in forecast">
  <h5>{{f}}</h5>
  </div>

    <!-- <div v-for="fore in forecast">
      <h5>{{fore[2]}}</h5>
      <div v-for="f in fore">
        <h5>{{f.hour}}</h5>
      </div>
    </div> -->

<!-- 
    <div v-for="fore in forecast">
    <div class="col-10 weather" >       
           <div class="row">
             <div class="tri col">
              <h4>{{fore[0].hour}}</h4>
              <p>  {{  fore[0].temperature }} °C</p>

               <img class="slika" src="./assets/kisa.png">
               <p>Partly sunny</p>
             </div>
             </div>
             </div>0

           </div>
           <div v-for="fore in forecasts">
    <div class="col-10 weather" >       
           <div class="row">
             <div class="tri col">
              <h4>{{fore.hour}}</h4>
              <p>  {{  fore.temperature }} °C</p>

               <img class="slika" src="./assets/kisa.png">
               <p>Partly sunny</p>
             </div>
             </div>
             </div>
           </div> -->
  </div>
</div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'forecast',
  data () {
    return { 
      forecast: []
       
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/weather/Rijeka/5')
      .then(response => (this.forecast = response.data));
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tri  {
  
    
   padding: 25px; 
  background: rgba(255,255,255,.05);
  box-shadow: 0 5px 15px rgba(0,0,0,.5);
}
 
/
.weather {

  width: 500px;
  height: 600px;
  
  
  /*border: 1px solid black;*/
  justify-content: center;
  background: rgba(255,255,255,.05);
  box-shadow: 0 5px 15px rgba(0,0,0,.5);
  
}
.tri {
  
  margin-top: 20px;
  /*width: 30%;*/
  height: 300px;
  
}
.slika {
  width: 100px;
  height: 100px;
  background-image: transparent;
}
img {
  width: 100%;
  height: auto;
}
.slika1 {
  width: 150px;
  height: 150px;
  background-image: transparent;
}
p,h1,h2,h3,h4,h5,h6 {
  color: white;
}
.row {
  padding-top: 40px;
}
 

</style>