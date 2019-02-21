import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Crops from '@/components/Crops'


Vue.use(BootstrapVue)
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
     	component: Home,
    },
    {
    	path: '/crops',
    	name: 'Crops',
    	component: Crops,
    }
  ]
})



