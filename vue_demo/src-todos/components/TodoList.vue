<template>
  <ul>
    <TodoItem v-for="(todo,index) in todos" :key="index" :index="index" :todo="todo" :delTodo="delTodo"></TodoItem>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  export default {
    name: 'TodoList',
    props:{
      todos: Array,
      delTodo:Function
    },
    components:{
      TodoItem
    }
  }
</script>

<style scoped>

</style>
