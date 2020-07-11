<template>
  <li @mouseenter="handleMouse(true)" @mouseleave="handleMouse(false)" :style="{background:backColor}">
    <input type="checkbox" v-model="todo.complete"/>
    <span>{{todo.title}}</span>
    <button v-show="isShow" @click="delItem">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name: 'TodoItem',
    props:{
      todo:Object,
      index:Number,
    },
    data(){
      return{
        isShow:false,
        backColor:'white'
      }
    },
    methods:{
      handleMouse(isShow){
        if(isShow){
          this.isShow=true;
          this.backColor='#aaaaaa'
        }else{
          this.isShow=false;
          this.backColor='white'
        }
      },
      delItem(){
        this.$store.dispatch('delTodo',this.index)
      }
    }
  }
</script>

<style scoped>

</style>
