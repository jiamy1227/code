<template>
  <div>
    <ul>
      <li v-for="(news ,index) in newsArray" :key="index">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data () {
      return {
        newsArray:['news1','news2','news3','news4']
      }
    }
  }
</script>

<style scoped>

</style>
