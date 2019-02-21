<template>
  <div id="app">
     
     <Navbar></Navbar>
     <Navbar2></Navbar2>
    
     <main>
      
      <router-view></router-view>
     </main>

  </div>
</template>

<script>
  import Crops from '@/components/Crops'
  //import Home from '@/components/Home'
  import Navbar from '@/components/Navbar'
  import Navbar2 from '@/components/Navbar2'
export default {
  name: 'App',
  components: {
    Crops,
    //Home,
    Navbar,
    Navbar2
  }
}
</script>

<style>
body {
  margin: 0;
}



main {
  text-align: center;
  margin-top: 40px;
  
}




</style>
