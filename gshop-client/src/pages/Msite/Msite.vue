<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span>{{address.name}}</span>
      <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
      <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div v-swiper:mySwiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArray">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys">
              <div class="food_container">
                <img :src="baseImgUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <shop-list/>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

  import HeaderTop from "../../components/HeaderTop/HeaderTop"
  import ShopList from "../../components/ShopList/ShopList"
  import {mapState} from "vuex"
    export default {
        name: "Msite.vue",
        components:{
        ShopList:ShopList,
        HeaderTop:HeaderTop,
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data () {
          return {
            swiperOption: {
              slidesPerView: 'auto',
              centeredSlides:true,
              spaceBetween: 10,
              loop:true,
              pagination: {
                el: '.swiper-pagination'
              },
              scrollbar: {
                el: '.swiper-scrollbar',
              }
            },
            baseImgUrl:'http://cangdu.org:8001/img'
          }
      },
      mounted() {
        this.$store.dispatch("getCategorys");
        },
      computed:{
        ...mapState(['address', 'categorys']),
        categorysArray(){
          const {categorys} = this;
          let arr=[];
          let mainArr = [];
          categorys.forEach(c=>{
            mainArr.push(c);
            if(mainArr.length===8){
              arr.push(mainArr);
              mainArr = []
            }
          });
          if(mainArr.length>0){
            arr.push(mainArr);
          }
          return arr
        }
      },
      watch:{
        categorys(value){
          this.$nextTick(()=>{
            this.mySwiper.slideTo(3, 1000, false)
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
