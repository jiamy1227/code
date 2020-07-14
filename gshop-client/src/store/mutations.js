/*
vuex 的 mutations 模块
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  SAVE_LOGIN_USER,
  RESET_LOGIN_USER
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
}
