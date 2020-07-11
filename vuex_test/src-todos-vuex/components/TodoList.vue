<template>
  <ul>
    <TodoItem v-for="(todo,index) in todos" :key="index" :index="index" :todo="todo"></TodoItem>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem.vue'
  import {mapState} from 'vuex'
  import storageUtil from "../util/storageUtil";
  export default {
    name: 'TodoList',
    computed:{
      ...mapState(['todos'])
    },
    watch:{
      todos:{
        deep:true,
        handler:storageUtil.saveTodos
      }
    },
    components:{
      TodoItem
    }
  }
</script>

<style scoped>

</style>
