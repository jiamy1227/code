<template>
  <div>
    <input type="checkbox" v-model="isAllCheck"/>
    <label>总共{{todos.length}}件，已完成{{completedNum}}件</label>
    <button @click="delComplete" v-show="completedNum">删除已完成</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoFooter',
    props:{
      todos:Array,
      delComplete:Function,
      selAll:Function
    },
    computed:{
      completedNum (){
        return this.todos.reduce((preTotal,todo) =>preTotal+ (todo.complete?1:0) , 0)
      },
      isAllCheck:{
        get (){
          return this.todos.length===this.completedNum &&this.completedNum>0
        },
        set (value){
          return this.selAll(value)
        }
      }
    }
  }
</script>

<style scoped>

</style>
