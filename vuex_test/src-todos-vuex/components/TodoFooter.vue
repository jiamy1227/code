<template>
  <div>
    <input type="checkbox" v-model="isAllCheck"/>
    <label>总共{{totalCount}}件，已完成{{completeCount}}件</label>
    <button @click="delComplete" v-show="completeCount">删除已完成</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'TodoFooter',
    computed:{
      ...mapGetters(['totalCount','completeCount']),
      isAllCheck:{
        get (){
          return this.$store.getters.isAllSelet
        },
        set (value){
          this.$store.dispatch('selectAll',value)
        }
      }
    },
    methods:{
      ...mapActions(['delComplete'])
    }
  }
</script>

<style scoped>

</style>
