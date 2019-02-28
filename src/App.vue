<template>
  <div id="app">
     <main>
     <Navbar></Navbar>
    
     
      
      <router-view></router-view>
      <body ononline="onFunction()" onoffline="offFunction()">
        </body>
     </main>

  </div>
</template>

<script>
  function onFunction() {
  alert ("Your browser is working online.");
}

function offFunction() {
  alert ("Your browser is working offline.");
}
  import Crops from '@/components/Crops'
  //import Home from '@/components/Home'
  import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Crops,
    //Home,
	Navbar
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
