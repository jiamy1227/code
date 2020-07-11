<template>
  <div>
    <TodoHeader :addTodo="addTodo"></TodoHeader>
    <TodoList :todos="todos" :delTodo="delTodo"></TodoList>
    <TodoFooter :selAll="selAll" :todos="todos" :delComplete="delComplete"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  export default {
    name: 'App',
    data(){
      return {
        todos:JSON.parse(window.localStorage.getItem('todos')||'[]')
      }
    },
    watch: {
      todos: {
        deep: true,
        handler: function (newValue) {
          window.localStorage.setItem('todos', JSON.stringify(newValue))
        }
      }
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo);
      },
      delTodo(index){
        this.todos.splice(index,1)
      },
      selAll(value){
        this.todos.forEach(todo =>todo.complete= value)
      },
      delComplete(){
        console.log("delComplete")
        this.todos=this.todos.filter(todo =>!todo.complete)
      }
    }
  }
</script>

<style scoped>

</style>
