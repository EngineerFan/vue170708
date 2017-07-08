import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import List from '@/components/List'
import Two from '@/components/Two'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/',
      name: 'Hello',
      component:Hello,
      redirect:'two',
      children:[
        {path:'/two',component:Two},
        {path:'/list',component:List}
      ]
    }

  ]
})
