import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../view/About'
import Home from '../view/Home'

Vue.use(VueRouter)

const routes = [
  { path:'/about',component:About},
  { path:'/home',component:Home},
  { path:'/',redirect: '/home'}
]

export default new VueRouter({
  routes:routes,
  linkActiveClass:'active'
})
