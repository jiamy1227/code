<template>
  <div>
    <Search></Search>
    <DataMain></DataMain>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import DataMain from './components/DataMain.vue'
  export default {
    name: 'App',
    components:{
      Search,
      DataMain
    }
  }
</script>

<style scoped>

</style>
