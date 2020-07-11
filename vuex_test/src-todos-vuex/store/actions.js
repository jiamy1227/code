import {ADD_TODO,DEL_TODO,SEL_ALL,DEL_COMP,REQ_TODOS} from './mutation-types'
import storageUtil from "../util/storageUtil";

export default {
  addTodo({commit},todo){
    commit(ADD_TODO,{todo})
  },
  delTodo({commit},index){
    commit(DEL_TODO,{index})
  },
  selectAll({commit},value){
    commit(SEL_ALL,{value})
  },
  delComplete({commit}){
    commit(DEL_COMP)
  },
  reqTodos({commit}){
    setTimeout(()=>{
      const todos = storageUtil.readTodos()
      commit(REQ_TODOS,{todos})
    },1000)

  }
}
