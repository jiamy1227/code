<template>
  <div>
    <div>
    <h1>Hello vue-router!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/about">About</router-link><br>
      <router-link to="/home">Home</router-link>
    </p>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
    }
</script>

<style scoped>

</style>
