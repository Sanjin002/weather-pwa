<template>
<div class="container">
  <div class="row">
    <div class="col-12 weather" >
       <h1>{{  forecast.city }}   {{  forecast.date }}</h1>   
           
       <p>    </p>
       <h2>Temp {{  forecast.temperature }} C</h2>
       <h2>Humidity {{  forecast.humidity }} %</h2>
           <div class="row">
             <div class="tri col-4">
              <h4>MONDAY</h4>
              <p>Temp {{  forecast.temperature }} C</p>
               <img class="slika" src="./assets/kisa.png">  
             </div>
               
             <div class="tri col-4">
              <h4>TUESDAY</h4>
              <p>Temp {{  forecast.temperature }} C</p>
              <img class="slika" src="./assets/thunder.png">
              
             </div>
             
             <div class="tri col-4">
               <h4>WEDNESDAY</h4>
              <p>Temp {{  forecast.temperature }} C</p>
              <img class="slika" src="./assets/sunce.png">
            </div>
           </div>

    </div>

  </div>
</div>



</template>

<script>
export default {
  name: 'forecast',
  data () {
    return { 
      forecast: {
          "city":"Rijeka",
          "date":"13:00  28.2.2019",
          "perticipation":'',
          "temperature": "28",
          "humidity": "88",
          "tstorm": "-",
          
        }
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-image: url("./assets/slika.jpg");
  
  background-size: cover;
  background-repeat: no-repeat;
 
}
.weather {
  width: 500px;
  height: 600px;
  padding: 50px;
  border: 1px solid black;
  justify-content: center;
}
.tri {
  padding: 20px;
  margin-top: 20px;
  width: 30%;
  height: 350px;
  
}
.slika {
  width: 150px;
  height: 150px;
  background-image: transparent;
}



</style>