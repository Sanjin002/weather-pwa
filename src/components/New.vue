<template>
  <div class="new">
  	{{ info[5].temperature }}
  	<div v-for="city in info">
  {{ city.humidity }}
  {{ city.temperature}}
</div>
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name: 'new',
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/weather/Rijeka/5')
      .then(response => (this.info = response.data.day_1));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new {
  color: white;
}
</style>