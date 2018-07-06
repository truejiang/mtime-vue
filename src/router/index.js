import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Ticket from '@/components/ticket/ticket'
import Mall from '@/components/mall/mall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/Mall',
      name: 'Mall',
      component: Mall
    }
  ]
})
