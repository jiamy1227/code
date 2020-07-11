<template>
  <div>
  <ul>
    <li v-for="(message,index) in messages" :key="message.id">
      <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
    </li>
  </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data(){
      return {messages:[]}
    },
    mounted () {
      setTimeout(()=>{
        const messages2 =[
          {id:1,title:'111'},{id:2,title:'222'},{id:3,title:'333'}];
          this.messages = messages2;
      })
    }
  }
</script>

<style scoped>

</style>
