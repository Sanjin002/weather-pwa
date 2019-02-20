import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Crops from '@/components/Crops'


Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Hello',
     	component: Hello,
    },
    {
    	path: '/crops',
    	name: 'Crops',
    	component: Crops,
    }
  ]
})
