/*
vuex 的 actions 模块
*/
import {reqAddress, reqCategorys, reqShops,reqUser,reqLogout} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RESET_LOGIN_USER, SAVE_LOGIN_USER,GET_USER_INFO} from './mutation-types'
export default {
// 异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, {address: result.data})
  },
// 异步获取分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, {categorys: result.data})
  },
// 异步获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    commit(RECEIVE_SHOPS, {shops: result.data})
  },
  saveLoginUser({commit},user){
    commit(SAVE_LOGIN_USER,{user})
  },
  resetLoginUser({commit}){
    reqLogout();
    commit(RESET_LOGIN_USER)
  },
  async getUserInfo({commit}){
    const result = await reqUser();
    if(result.code===0){
      const user = result.data
    commit(GET_USER_INFO,{user})
    }
  }
}
