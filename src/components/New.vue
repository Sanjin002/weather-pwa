<template>
  <div class="new">
  	{{ info.comments[1].body }}
  	<div v-for="i in info.posts">
  {{ i.id }}
  {{ i.title}}
</div>
<div v-for="c in info.comments">
  {{ c.id }}
  {{ c.body }}
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
      .get('https://my-json-server.typicode.com/typicode/demo/db')
      .then(response => (this.info = response.data));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>