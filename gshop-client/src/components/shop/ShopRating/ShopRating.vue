<template>
  <div>
    ShopRating
  </div>
</template>

<script>
    export default {
      name: "ShopRating",
      methods:{
      },
      mounted() {
        this.$store.dispatch("getRatingInfo");
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
</style>
