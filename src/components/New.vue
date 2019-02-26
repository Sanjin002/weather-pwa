<template>
  <div class="new">
    <div>
  <b-dropdown id="ddown1" text="Cities" class="m-md-2">
    <div v-for="i in info">
    <b-dropdown-item>{{ i.name }}</b-dropdown-item>
  </div>
    
  </b-dropdown>
</div>
    <!-- {{ info.comments[1].body }} -->
    <div v-for="i in info">
  {{ i.name }}
  {{ i.url}}
</div>
<div v-for="c in info.comments">
  {{ c.id }}
  {{ c.body }}
  </div>
</div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'new',
  data () {
    return {
      info: []
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/weather/')
      .then(response => (this.info = response.data.cities));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>->