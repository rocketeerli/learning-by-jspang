import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi_1 from '@/components/Hi1'
import Hi_2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld,
      alias: '/home'
    },{
      path:'/hi',
      component: Hi,
      children:[
        {path:'', components:{left:Hi_1, right:Hi_2}}
      ]
    },{
      path: '/params/:news_id(\\d+)/:news_title',
      component:Params,
      beforeEnter:(to, from, next)=>{
        console.log(to);
        console.log(from);
        next(true);
        // next({path:'/'});  // 跳转到根页面
      }
    },{
      path:'/goHome',
      redirect: '/'
    },{
      path:'/goParams/:id(\\d+)/:title',
      redirect: '/params/:id/:title'
    },{
      path:'/hi_1',
      name:'hi1',
      component:Hi_1,
      alias:'/hi_one'
    },{
      path: '*',
      component: Error
    }
  ]
})
