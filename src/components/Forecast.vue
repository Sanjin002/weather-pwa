<template>
<div class="container">
  <h5>{{datum.location}}</h5>
  <div class="row">
    <div v-for="datum in datum">
      <h5>{{datum[0].weekday}}  {{datum[0].date}} </h5>
    </div>
    <div v-for="hour in forecast">
      <div class="col-10 weather">       
        <div class="row">
          <div class="tri col">
            <h4>{{hour.hour}}h</h4>
              <p> {{hour.temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{hour.weather}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div v-for="datum in datum">
      <h5>{{datum[1].weekday}}  {{datum[1].date}}</h5>
    </div>
      <div class="col-10 weather">       
        <div class="row">
          <div class="tri col">
            <h4>{{forecast2[0].hour}}h</h4>
              <p> {{forecast2[0].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast2[0].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast2[6].hour}}h</h4>
              <p> {{forecast2[6].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast2[6].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast2[12].hour}}h</h4>
              <p> {{forecast2[12].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast2[12].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast2[18].hour}}h</h4>
              <p> {{forecast2[18].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast2[18].weather}}</p>
          </div>
        </div>
      </div>
  </div>
  <div class="row">
    <div v-for="datum in datum">
      <h5>{{datum[2].weekday}}  {{datum[2].date}}</h5>
    </div>
    <div class="col-10 weather">       
        <div class="row">
          <div class="tri col">
            <h4>{{forecast3[0].hour}}h</h4>
              <p> {{forecast3[0].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast3[0].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast3[6].hour}}h</h4>
              <p> {{forecast3[6].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast3[6].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast3[12].hour}}h</h4>
              <p> {{forecast3[12].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast3[12].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast3[18].hour}}h</h4>
              <p> {{forecast3[18].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast3[18].weather}}</p>
          </div>
        </div>
      </div>
  </div>
  <div class="row">
    <div v-for="datum in datum">
      <h5>{{datum[3].weekday}}  {{datum[3].date}}</h5>
    </div>
    <div class="col-10 weather">       
        <div class="row">
          <div class="tri col">
            <h4>{{forecast4[0].hour}}h</h4>
              <p> {{forecast4[0].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast4[0].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast4[6].hour}}h</h4>
              <p> {{forecast4[6].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast4[6].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast4[12].hour}}h</h4>
              <p> {{forecast4[12].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast4[12].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast4[18].hour}}h</h4>
              <p> {{forecast4[18].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast4[18].weather}}</p>
          </div>
        </div>
      </div>
  </div>
  <div class="row">
    <div v-for="datum in datum">
      <h5>{{datum[4].weekday}}  {{datum[4].date}}</h5>
    </div>
    <div class="col-10 weather">       
        <div class="row">
          <div class="tri col">
            <h4>{{forecast5[0].hour}}h</h4>
              <p> {{forecast5[0].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast5[0].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast5[6].hour}}h</h4>
              <p> {{forecast5[6].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast5[6].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast5[12].hour}}h</h4>
              <p> {{forecast5[12].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast5[12].weather}}</p>
          </div>
          <div class="tri col">
            <h4>{{forecast5[16].hour}}h</h4>
              <p> {{forecast5[16].temperature}} °C</p>
                <img class="slika" src="./assets/kisa.png">
               <p>{{forecast5[16].weather}}</p>
          </div>
        </div>
      </div>  
  </div>
  <h5>{{city}}</h5>
</div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar'
export default {
  name: 'forecast',
  components: {
    Navbar
  },
  props: ['selected'],
  data () {
    return { 
      datum:[],
      forecast: [],
      forecast2: [],
      forecast3: [],
      forecast4: [],
      forecast5: [],
      city: '',
       
    }
  },
  mounted () {
    var x = 'http://meteo.pointjupiter.co/'+this.city;
    axios
      .get('http://127.0.0.1:8000/weather/Rijeka/5')
      .then(response => {(this.forecast = response.data.day_1);
        (this.forecast2 = response.data.day_2);
        (this.forecast3 = response.data.day_3);
        (this.forecast4 = response.data.day_4);
        (this.forecast5 = response.data.day_5);});
  
    axios
      .get(x)
      .then(response => {(this.datum = response.data);
      });
  },
  methods: {
        doSomenthing ( data ) {
            this.city = data;
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