<template>
  <div class="footer_guide border-1px">
    <a class="guide_item" :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a class="guide_item" :class="{on:$route.path==='/video'}" @click="goto('/video')">
      <span class="item_icon">
        <i class="iconfont icon-shipin"></i>
      </span>
      <span>视频</span>
    </a>
    <a class="guide_item" :class="{on:$route.path==='/notices'}" @click="goto('/notices')">
      <span class="item_icon">
        <i class="iconfont icon-xiaoxi"></i>
      </span>
      <span>公告</span>
    </a>
    <a class="guide_item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>
<script>
  export default{
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  @import "../assets/stylus/mixin.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
