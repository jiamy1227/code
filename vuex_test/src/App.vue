<template>
  <div id="app">
    <p>click {{count}} times, count is {{evenOrOdd}} </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  methods:{
    ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    // increment(){
    //   this.$store.dispatch('increment')
    // },
    // decrement(){
    //   this.$store.dispatch('decrement')
    // },
    // incrementIfOdd(){
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync')
    // }
  },
  computed:{
    // evenOrOdd(){
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  }

}
</script>

<style>
#app {
}
</style>
