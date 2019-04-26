<template>
  <div class="top_title border-1px">
    <span>{{lTitle}}</span>
  </div>
</template>

<script>
  export default {
    props:{
      lTitle: String
      }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import '~@/assets/stylus/mixin.styl'
  .top_title
    width 100%
    height 40px
    background-color #ffffff
    bottom-border-1px($line-color)
    >span
      font-size 16px
      line-height 40px
      font-weight 500
      color #e2320e
      padding-left 10px
      border-left 5px solid #e2320e
      margin-left 5%
</style>
