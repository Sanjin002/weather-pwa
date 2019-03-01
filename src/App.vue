<template>
  <div id="app">
     <main>
     <Navbar></Navbar>
    
     
      
      <router-view></router-view>
        </body>
     </main>

  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
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
