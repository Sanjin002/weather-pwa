<template>
<div class="container  ">
  <div class="row">
    <div class="col-2">
        
    </div>
    <div class="col-10 weather" >
       <h1>{{  forecast.city }} </h1>
          

         <h3>   {{  forecast[0].hour }} </h3> 
       <h2><img class="slika1" src="./assets/sunce.png">{{  forecast.temperature }} °C</h2>
       <h2>Sunny</h2>
          <div class="row">
            <div class="col-12  ">
            <h4>Humidity {{  forecast[0].humidity }} % </h4>
            <h4>Perticipation {{  forecast[0].perticipation }} %</h4>
            <h4>Wind {{  forecast[0].wind }} </h4>
            </div>

          </div>
           <div class="row">
             <div class="tri col">
              <h4>MONDAY</h4>
              <p>  {{  forecast[0].temperature }} °C</p>

               <img class="slika" src="./assets/kisa.png">
               <p>Partly sunny</p>  
             </div>
               

             <div class="tri col">
              <h4>TUESDAY</h4>
              <p>  {{  forecast[1].temperature }} °C</p>

              <img class="slika" src="./assets/thunder.png">
              <p>Rain</p> 
              
             </div>
             <div class="tri col">
               <h4>WEDNESDAY</h4>
              <p>  {{  forecast[2].temperature }} °C</p>
              <img class="slika" src="./assets/kisa.png">
              <p>Partly sunny</p> 
            </div>

            <div class="tri col">
               <h4>THURSDAY</h4>
              <p>  {{  forecast[3].temperature }} °C</p>

              <img class="slika" src="./assets/sunce.png">
              <p>Sunny</p> 
            </div>

            <div class="tri col">
               <h4>FRIDAY</h4>
              <p>  {{  forecast[3].temperature }} °C</p>

              <img class="slika" src="./assets/kisa.png">
              <p>Partly sunny</p> 
            </div>
           </div>
        </div>


    

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
      .then(response => (this.forecast = response.data.day_2));
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