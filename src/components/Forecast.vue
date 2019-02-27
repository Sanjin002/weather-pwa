<template>
<div class="container  ">
  <div class="row">
    <div class="col-2">
        
    </div>
    <div class="col-10 weather" >
       <h1>{{  forecast.city }} </h1>
          
         <h4>   {{  forecast.date }} </h4> 
       <h3><img class="slika1" src="./assets/sunce.png">{{  forecast.temperature }} °C</h3>
       <h2>Sunny</h2>
          <div class="row">
            <div class="col-12  ">
            <h5>Humidity {{  forecast.humidity }} % </h5>
            <h5>Perticipation {{  forecast.perticipation }} %</h5>
            <h5>Wind {{  forecast.wind }} </h5>
            </div>

          </div>
   
        <div class="row ">
             <div class="tri col">
              <h6>MONDAY</h6>
              <p>  {{  forecast.temperature }} °C</p>
               <img class="slika" src="./assets/kisa.png">
               <p>Partly sunny</p>  
             </div>
               
             <div class="tri col">
              <h6>TUESDAY</h6>
              <p>  {{  forecast.temperature }} °C</p>
              <img class="slika" src="./assets/thunder.png">
              <p>Rain</p> 
              
             </div>
             
             <div class="tri col">
               <h6>WEDNESDAY</h6>
              <p>  {{  forecast.temperature }} °C</p>
              
              <img class="slika"  src="./assets/kisa.png">
              <p>Partly sunny</p> 
            </div>

            <div class="tri col">
               <h6>THURSDAY</h6>
              <p>  {{  forecast.temperature }} °C</p>
              <img class="slika" src="./assets/sunce.png">
              <p>Sunny</p> 
            </div>

            <div class="tri col">
               <h6>FRIDAY</h6>
              <p>  {{  forecast.temperature }} °C</p>
              <img class="slika" src="./assets/kisa.png">
              <p>Partly sunny</p> 
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
          "city":"Rijeka, Croatia",
          "date":"14:00  25.2.2019",
          "perticipation":'10',
          "temperature": "28",
          "humidity": "28",
          "tstorm": "-",
          "wind": "SW 1m/s ",
          "barometar": " "
          
        }
       
    }
  }
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