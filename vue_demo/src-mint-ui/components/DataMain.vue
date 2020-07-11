<template>
  <div>
    <h2 v-if="firstStatus">请输入用户名查询信息</h2>
    <h2 v-if="loadStatus">查询中...</h2>
    <div v-for="(user,index) in users" :key="index">
      <a :href="user.url">
        <img :src="user.avatar_url" style='width:100px'>
      </a>
      <p>{{user.nae}}</p>
    </div>
    <h2 v-if="errMsg">查询失败</h2>
  </div>
</template>

<script>
  import PubSub from 'PubSub-js'
  import axios from 'axios'
  export default {
    name: 'DataMain',
    data(){
      return{
        firstStatus:true,
        loadStatus:false,
        users:null,
        errMsg:''

      }
    },
    mounted(){

      PubSub.subscribe('search',(msg,searchName) =>{
        console.log(searchName)
        const searchUrl = `https://api.github.com/search/users?q=${searchName}`
        this.firstStatus = false
        this.loadStatus = true
        this.users = null
        this.errMsg=''

        axios.get(searchUrl).then(response =>{
          const result = response.data
          const users = result.items.map(item =>({
            url:item.html_url,
            avatar_url:item.avatar_url,
            name:item.login
          }));
          this.loadStatus=false
          this.users = users

        }).catch(error =>{
          this.loadStatus = false
          this.errMsg = '请求失败'
        })
      })
    }
  }
</script>

<style scoped>

</style>
