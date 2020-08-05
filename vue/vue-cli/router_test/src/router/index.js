import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi_1 from '@/components/Hi1'
import Hi_2 from '@/components/Hi2'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },{
      path: '/params/:news_id(\\d+)/:news_title',
      component:Params
    },{
      path:'/goHome',
      redirect: '/'
    },{
      path:'/goParams/:id(\\d+)/:title',
      redirect: '/params/:id/:title'
    }
  ]
})
