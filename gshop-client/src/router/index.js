import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from "../pages/Msite/Msite";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";
import Shop from "../components/shop/Shop";
import ShopGoods from "../components/shop/ShopGoods/ShopGoods";
import ShopInfo from "../components/shop/ShopInfo/ShopInfo";
import ShopRating from "../components/shop/ShopRating/ShopRating";


Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    { path:'/', redirect:'/msite'},
    { path:'/msite', component:Msite ,meta:{showFooter:true} },
    { path:'/order', component:Order ,meta:{showFooter:true} },
    { path:'/profile', component:Profile ,meta:{showFooter:true} },
    { path:'/search', component:Search ,meta:{showFooter:true} },
    { path:'/login', component:Login },
    { path:'/shop', component:Shop,
      children:[
        {path:'shopGoods', component:ShopGoods},
        {path:'shopInfo', component:ShopInfo},
        {path:'shopRating', component:ShopRating},
        {path:'', redirect:'/shop/shopGoods'}
      ] },
  ]
})
