<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else="repoName">最受欢迎的工程是<a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data () {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted(){
      const url = 'https://api.github.com/search/repositories?q=vue&sort=stars'
      axios.get(url).then(
        response =>{
          const result = response.data
          this.repoUrl=result.items[0].html_url
          this.repoName = result.items[0].name
        }
      ).catch(error =>{
        alert('请求失败')
      })
    }
  }
</script>

<style scoped>

</style>
