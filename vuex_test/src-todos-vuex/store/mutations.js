import {ADD_TODO,DEL_TODO,SEL_ALL,DEL_COMP,REQ_TODOS} from './mutation-types'

export default {
  [ADD_TODO] (state,{todo}) {
    state.todos.unshift(todo)
  },
  [DEL_TODO] (state,{index}){
    state.todos.splice(index,1)
  },
  [SEL_ALL] (state,{value}){
    state.todos.forEach(todo =>todo.complete= value)
  },
  [DEL_COMP] (state){
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [REQ_TODOS] (state,{todos}){
    state.todos = todos
  }
}
