<template>
  <li>
  {{comment.name}} <span>说：</span>{{comment.content}}<a href="javascript:;" @click = "delItem">删除</a>
  </li>
</template>

<script>
  export default {
    name: 'Item',
    props:{
      comment:Object,
      delComment:Function,
      index:Number
    },
    methods:{
      delItem(){
        console.log("delItem方法");
        const {comment,delComment,index} = this
        if(window.confirm('确定删除的评论?')){;
            delComment(index);
        }
      }
    }
  }
</script>

<style scoped>

</style>
