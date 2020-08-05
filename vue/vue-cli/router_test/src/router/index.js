import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi_1 from '@/components/Hi1'
import Hi_2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Hi_1,
        right:Hi_2
      }
    },
    {
      path: '/hi',
      name: 'hi',
      components:{
        default:HelloWorld,
        left:Hi_2,
        right:Hi_1
      }
    }
  ]
})
