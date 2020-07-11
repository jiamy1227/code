<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>Id:{{messageDetail.id}}</li>
      <li>Title:{{messageDetail.title}}</li>
      <li>Content:{{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>


  export default {
    name: 'MessageDetail',
    data() {
      return  {
        messageDetail:{}
      }
    },
    mounted () {
      setTimeout(()=>{
        const allMessageDetails = [
          {id:1,title:'001',content:'111111111111111'},
          {id:2,title:'002',content:'222222222222222'},
          {id:3,title:'003',content:'333333333333333'}
        ]
        this.allMessageDetails  =allMessageDetails;
        const id = this.$route.params.id*1;
        this.messageDetail = this.allMessageDetails.find(detail=>detail.id===id);
      },1000)
    },
    watch:{
      $route:function(){
        const id = this.$route.params.id*1;
        this.messageDetail = this.allMessageDetails.find(detail=>detail.id===id);
      }
    }
  }
</script>

<style scoped>

</style>
