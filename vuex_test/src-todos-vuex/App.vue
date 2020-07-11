<template>
  <div>
    <!-- 绑定事件，常用： <TodoHeader @addTodo="addTodo"></TodoHeader>-->
    <TodoHeader></TodoHeader>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  export default {
    name: 'App',
    mounted(){
        this.$store.dispatch('reqTodos')
    },
    components:{
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style scoped>

</style>
