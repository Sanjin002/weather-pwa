<template>
  <div id="app">
    <main>
      <Navbar v-bind:selected="selected"></Navbar>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Forecast from '@/components/Forecast'

export default {
  name: 'App',
  components: {
	Navbar,
  Forecast
  },
  data(){
    return {
      selected: '',
    }
  },
  methods:{
    updateSelected: function(updatedSelected){
      this.selected = updatedSelected;
    }
  }
}
</script>

<style>
body {
 background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url("./components/drama.jpg") ;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-attachment: fixed;
}


 main {
  text-align: center;
  margin-top: 40px;
  
}
 


</style>
