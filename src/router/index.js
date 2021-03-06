import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Crops from '@/components/Crops'
import Forecast from '@/components/Forecast'
import New from '@/components/New'
import Dropdown from 'vue-simple-search-dropdown'


Vue.use(BootstrapVue)
Vue.use(Router)
Vue.use(Dropdown)


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
    },
    {
      path: '/forecast',
      name: 'Forecast',
      component: Forecast,
    },
    {
      path: '/new',
      name: 'New',
      component: New,
    },
    

  ]
})



