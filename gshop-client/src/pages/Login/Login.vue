<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:!pswLogin}" @click="pswLogin=false">短信登录</a>
          <a href="javascript:;" :class="{on:pswLogin}" @click="pswLogin=true">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on:!pswLogin}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification"
                :class="{right_phone:rightPhone}" @click.prevent="getCode">
                {{computeTime?"已发送"+computeTime:"获取验证码"}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:pswLogin}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-model="password" v-if="showPassword">
                <input type="password" maxlength="8" placeholder="密码" v-model="password" v-if="!showPassword">
                <div class="switch_button" :class="showPassword ? 'on':'off'" @click="showPassword=!showPassword">
                  <div class="switch_circle" :class="{right: showPassword}"></div>
                  <span class="switch_text">{{showPassword ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="changeCaptcha"
                  ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit" >登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="showAlert" @closeTip="closeTip"/>
  </div>
</template>

<script>
  import {reqSendCode, reqPwdLogin, reqSmsLogin} from "../../api";
  import AlertTip from "../../components/AlertTip/AlertTip"
    export default {
        name: "Login",
      data(){
          return {
            pswLogin:false,
            phone:'',
            computeTime:0,
            password:'',
            showPassword:false,
            showAlert:false,
            alertText:'',
            code:'',
            name:'',
            captcha:'',
            userInfo:{}

          }
      },
      computed:{
        rightPhone(){
          return /^1\d{10}$/.test(this.phone)
        }
      },
      methods: {
        async getCode() {
          if (!this.computeTime) {
            this.computeTime = 30;
            this.intervalId = setInterval(() => {
              this.computeTime--;
              if (this.computeTime <= 0) {
                clearInterval(this.intervalId)
              }
            }, 1000)
          }
          // 发送 ajx 请求(请求后台向指定手机号发验证码短信)
          //发送短信验证码
          let result = await reqSendCode(this.phone);
          console.log(result.code);
          if (result.code = 1) {
            // 显示提示框
            this.showAlert = true;
            this.alertText = result.msg;
            // 停止倒计时
            if (this.computeTime) {
              this.computeTime = 0
              clearInterval(this.intervalId)
            }
          }
        },
        changeCaptcha() {
          this.$refs.captcha.src = "http://localhost:4000/captcha?time=" + Date.now();
        },
        // 发送登录信息
        async login() {
          console.log("login方法");
          // debuger
          if (!this.pswLogin) {
            console.log(!this.pswLogin)
            if (!this.rightPhone) {
              this.showAlert = true;
              this.alertText = '手机号码不正确'
              return
            } else if (!/\d{6}/.test(this.code)) {
              this.showAlert = true;
              this.alertText = '短信验证码不正确'
              return
            }
            //手机号短信登录
            console.log("reqSmsLogin请求")
            const result = await reqSmsLogin(this.phone, this.code);
            console.log("result"+result.code+"data"+result.data);
            if (result.code = 0) {
              this.userInfo = result.data
            } else {
              this.userInfo = {
                msg: '登陆失败, 手机号或验证不正确'
              }
            }
          } else {
            if (!this.name) {
              this.showAlert = true
              this.alertText = '请输入手机号/邮箱/用户名'
              return
            } else if (!this.password) {
              this.showAlert = true;
              this.alertText = '请输入密码'
              return
            } else if (!this.captcha) {
              this.showAlert = true
              this.alertText = '请输入验证码'
              return
            }
            //用户名登录
            const result = await reqPwdLogin(this.name, this.password, this.captcha);
            console.log("result"+result.code+"data"+result.data);
            if (result.code === 0) {
              this.userInfo = result.data;
              const user =  result.data;
              this.$store.dispatch("saveLoginUser",user);
              this.$router.replace("/profile");
              console.log(user.toLocaleString());
            } else {
              this.userInfo = {
                msg: result.msg
              }
            }
          }
          //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
          if (!this.userInfo._id) {
            this.showAlert = true
            this.alertText = this.userInfo.msg
            if (!this.pswLogin) {
              this.changeCaptcha()
            }
          } else {
            //this.$store.dispatch('saveLoginUser', this.userInfo)
            //this.$router.back()
          }
        },
        // 关闭提示框
        closeTip () {
          this.showAlert = false
          this.alertText = ''
        }
      },
      components:{
        AlertTip
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                 color: black
          .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #111
</style>
