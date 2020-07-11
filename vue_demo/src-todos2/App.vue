<template>
  <div>
    <!-- 绑定事件，常用： <TodoHeader @addTodo="addTodo"></TodoHeader>-->
    <TodoHeader ref="heade"></TodoHeader>
    <TodoList :todos="todos"></TodoList>
    <TodoFooter :selAll="selAll" :todos="todos" :delComplete="delComplete"></TodoFooter>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import storageUtil from './util/storageUtil'
  export default {
    name: 'App',
    data(){
      return {
        todos:storageUtil.readTodos()
      }
    },
    watch: {
      todos: {
        deep: true,
        handler: storageUtil.saveTodos
      }
    },
    mounted(){
      this.$refs.heade.$on('addTodo',this.addTodo)
      PubSub.subscribe('delTodo',(msg,index) =>{
        console.log("subscribe")
        this.delTodo(index)
      })
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
