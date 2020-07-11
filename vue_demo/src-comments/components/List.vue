<template>
  <ul>
    <Item v-for="(comment,index) in comments" :key="index" :comment="comment" :delComment="delComment" :index="index"></Item>
  </ul>
</template>

<script>
  import Item from './Item.vue'
  export default {
    name: 'List',
    props:['comments','delComment'],
    components:{
      Item
    }
  }
</script>

<style scoped>

</style>
