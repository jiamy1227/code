<template>
  <div>
    <div>
      <h2>Home 组件</h2>
      <router-link to="/home/news">News</router-link>
      <router-link to="/home/message">Message</router-link>
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>

</style>
