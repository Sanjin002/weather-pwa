<template>
	<div>
	<highcharts class="stock" :constructor-type="'stockChart'" :options="stockOptions"></highcharts>
	<div class="button-grp">
      <button @click="select('chart')" :class="{btnActive: selected === 'chart'}">Chart</button>
      <button @click="select('stockChart')" :class="{btnActive: selected === 'stockChart'}">Stock Chart</button>
      <button @click="select('mapChart')" :class="{btnActive: selected === 'mapChart'}">Map Chart</button>
    </div>
     <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      stockOptions: {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'Temperatura'
        },
        series: [{
          name: 'AAPL',
          data: [10, 12, 10, 12, 12, 13, 14, 12, 13, 12, 11, 10, 10, 12, 11],
          pointStart: Date.UTC(2019, 1, 26),
          pointInterval: 24 * 60 * 60 * 60,
          tooltip: {
            valueDecimals: 2
          }
        }]
      }
    }
  },
mounted () {
    axios
      .get('http://127.0.0.1:8000/weather/Rijeka/1/ekstra')
      .then(response => (this.stockOptions.series.data = response.data));
  }
}
</script>
<style scoped>
.stock {
  width: 70%;
  margin: 0 auto
}
</style>