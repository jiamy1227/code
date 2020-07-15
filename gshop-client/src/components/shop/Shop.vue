<template>
    <div>
      <ShopHead/>
      <router-view></router-view>
    </div>
</template>

<script>
  import ShopHead from "./ShopHead/ShopHead"
    export default {
        name: "Shop",
        components:{
          ShopHead
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
</style>
