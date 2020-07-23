<template>
    <div>
      <ShopHead/>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
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
