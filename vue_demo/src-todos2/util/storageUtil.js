export default {
  readTodos(){
    return JSON.parse(window.localStorage.getItem('todos')||'[]')
  },
  saveTodos(todos){
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }
}
