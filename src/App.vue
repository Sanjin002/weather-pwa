<template>
  <div id="app">
     
     <Navbar></Navbar>
    
     <main>
      
      <router-view></router-view>
     </main>

  </div>
</template>

<script>
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
 background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url("./components/drama.jpg");
 height: 100vh;
 background-size: cover;
 background-position: center;
}


 main {
  text-align: center;
  margin-top: 40px;
  
}
 



</style>
