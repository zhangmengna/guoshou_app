<template>
  <div class="header">
    <slot name="back"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="time"></slot>
  </div>
</template>
<script>
  export default{
    props: {
      title: String
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "../assets/stylus/mixin.styl"
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    background: linear-gradient(-90deg, #21c8ea, #19edba);
    background-origin cover
    .back,.time
      position absolute
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .iconfont
        font-size 25px
        color #fff
    .back
      left 2%
    .time
      right 2%
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
</style>
