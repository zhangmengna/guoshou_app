<template>
  <div class="login">
    <div class="loginInner">
      <div class="login_logo">
        <div class="img_logo"></div>
        <p>客户端</p>
      </div>
      <div class="login_content">
        <form>
          <div class="login_msg">
            <span><i class="iconfont icon-user"></i></span>
            <input type="text" placeholder="用户名">
          </div>
          <div class="login_msg">
            <span><i class="iconfont icon-lock"></i></span>
            <input type="password" placeholder="密码">
          </div>
          <button class="login_submit">登陆</button>
          <p class="get_password">忘记密码？</p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },

    components: {}
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../../assets/stylus/mixin.styl";
  .login
    width:100%;
    height 100%
    bg-image ("./images/login_bg")
    background-repeat no-repeat
    background-size 100% 100%
    background-origin cover
    .loginInner
      padding-top 15%
      width 90%
      margin 0 auto
      .login_logo
        width 100px
        margin 10px auto
        overflow hidden
        .img_logo
          width 100px
          height 100px
          background-size 100% 100%
          bg-image("./images/login_logo")
          background-origin cover
        p
          font-size 20px
          font-weight 600
          margin 20px 0 50px
          text-align center
    .login_content
      width 100%
      form
       width 100%
      .login_msg
        position relative
        width 100%
        height 40px
        font-size 14px
        margin-top 10px
        span
          position absolute
          top 0px
          left 8px
          font-size 16px
          .iconfont
            color color
            line-height 40px
        input
          width 100%
          height 100%
          padding-left 30px
          box-sizing border-box
          border 1px solid #ddd
          border-radius 8px
          outline 0
          font 400 14px Arial
          border 1px solid #f1b507
          opacity 1
      .login_submit
        display block
        width 100%
        height 42px
        margin-top 30px
        border-radius 4px
        background #f1b507
        opacity 0.8
        color #fff
        text-align center
        font-size 16px
        line-height 40px
        border 0
      .get_password
        padding 10px
        color #982810
        text-align right
        font-size 18px
        font-weight 500
</style>
