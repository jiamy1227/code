<template>
  <div>
    <input type="text" v-model="searchName" placeholder="用户名">
    <button @click="search">搜索</button>
  </div>
</template>

<script>
  import PubSub from 'PubSub-js'
  export default {
    name: 'Search',
    data(){
      return{
      searchName:''
      }
    },
    methods:{
      search(){
        PubSub.publish('search',this.searchName)
      }
    }
  }
</script>

<style scoped>

</style>
