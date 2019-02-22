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
  margin: 0 auto;
 

}



main {
  text-align: center;
  margin-top: 40px;
  
}




</style>
