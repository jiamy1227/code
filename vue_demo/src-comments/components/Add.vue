<template>
  <form>
    <label>姓名：</label><input type="text" placeholder="用户名" v-model="name">
    <label>说：</label><input type="text" placeholder="内容" v-model="content">
    <button type="button" @click="add">提交</button>
  </form>
</template>

<script>
  export default {
    name: 'Add',
    props:{
      addComment:{
        type:Function,
        required:true
      }
    },
    data(){
      return{
        name: '',
        content: ''
      }
    },
    methods: {
      add(){
        //1.检查输入合法性
        const name = this.name;
        const content = this.content;
        //2.封装数据对象
        const comment={
          name,
          content
        };
        //3.添加到comments中
        this.addComment(comment);
      }
    }
  }
</script>

<style scoped>

</style>
