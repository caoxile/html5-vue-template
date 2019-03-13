import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Generic from '@/pages/Generic'
import Elements from '@/pages/Elements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/generic',
      name: 'generic',
      component: Generic
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements
    }
  ]
})
