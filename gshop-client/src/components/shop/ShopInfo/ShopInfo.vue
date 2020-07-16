<template>
  <div>
    ShopInfo
  </div>
</template>

<script>
    export default {
      name: "ShopInfo",
      methods:{
      },
      mounted() {
        this.$store.dispatch("getShopInfo");
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
</style>
