<template>
  <!--
    当一个 form 元素中只有一个输入框时，每次鼠标点击输入框后，不管是否输入数据，按下回车键后都跳转到首页。
    原因是在该输入框中按下回车键默认自动提交该表单。如果希望阻止这一默认行为，可以在标签上添加 @submit.native.prevent。
  -->
    <input type="text" placeholder="请输入添加的任务，回车键结束" v-model="title" @keyup.enter="addItem">
</template>

<script>
  export default {
    name: 'TodoHeader',
    props:{
      addTodo:Function
    },
    data(){
      return {
        title:''
      }
    },
    methods:{
      addItem(){
        console.log(this.addTodo.toString());
        const title = this.title;
        if(!title){
          alert("必须输入");
          return
        }
        const todo={
          title,complete:false
        }
        console.log(todo);
        this.addTodo(todo);

      }
    }
  }
</script>

<style scoped>

</style>
