<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import {mapActions} from "vuex"
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  created () {
// 异步获取 address
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    ...mapActions(['getUserInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>

