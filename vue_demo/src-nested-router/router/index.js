import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../view/About'
import Home from '../view/Home'
import News from '../view/News'
import Message from '../view/Message'
import MessageDetail from '../view/MessageDetail'

Vue.use(VueRouter)

const routes = [
  { path:'/about',
    component:About,
  },
  {
    path:'/home',
    component:Home,
    children:[
      {path:'news',component:News},
      {path:'message',
        component:Message,
        children:[
          {path:'detail/:id',component:MessageDetail}
        ]
      },
    ]
  },
  { path:'/',redirect: '/home'}
]

export default new VueRouter({
  routes:routes,
  linkActiveClass:'active'
})
