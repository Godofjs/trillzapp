import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import homed from './views/homed.vue'
import login from './views/login.vue'
import register from './views/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/homed',
      name: 'homed',
      component: homed
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }
  ]
})