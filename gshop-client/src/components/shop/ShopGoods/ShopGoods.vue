<template>
  <div>
    ShopGoods
  </div>
</template>

<script>
    export default {
      name: "ShopGoods",
      methods:{
      },
      mounted() {
        this.$store.dispatch("getGoodsInfo");
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
</style>
