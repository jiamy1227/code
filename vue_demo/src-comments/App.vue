<template>
  <div>
    <Add :addComment="addComment"></Add>
    <List :comments="comments" :delComment="delComment"></List>
  </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'
  export default {
    name: 'App',
    data(){
      return {
        comments:[
          {
            name:'Bob',
              content:'Vue 还不错'
          },
          {
            name:'cat',
            content:'Vue 有点难'
          },
          {
            name:'dog',
            content:'Vue 很难'
          },
        ]
      }
    },
    components:{
      Add,
      List
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment);
      },
      delComment(index){
        console.log("delComment方法");
        console.log(index);
        this.comments.splice(index,1);
      }
    }
  }
</script>

<style scoped>

</style>
