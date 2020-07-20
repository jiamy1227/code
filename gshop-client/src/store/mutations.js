/*
vuex 的 mutations 模块
*/
import Vue from "vue"
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  SAVE_LOGIN_USER,
  RESET_LOGIN_USER,
  GET_USER_INFO,
  GET_SHOP_INFO,
  GET_RATING_INFO,
  GET_GOODS_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [SAVE_LOGIN_USER](state, {user}) {
    state.user = user
  },
  [RESET_LOGIN_USER](state) {
    state.user = {}
  },
  [GET_USER_INFO](state,{user}) {
    state.user = user
  },
  [GET_SHOP_INFO](state,{info}) {
    state.info = info
  },
  [GET_RATING_INFO](state,{rating}) {
    state.rating = rating
  },
  [GET_GOODS_INFO](state,{goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state,{food}) {
    if(food.count){
      food.count++
    }else{
      Vue.set(food,"count",1)
      state.shopCart.push(food)
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}) {
    if(food.count){
      food.count--
      if(food.count===0){
        state.shopCart.splice(state.shopCart.indexOf(food),1)
      }
    }
  }
}
