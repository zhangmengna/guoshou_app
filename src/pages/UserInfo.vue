<template>
  <div class="home">
    <Header title="个人信息"></Header>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import Header from "../components/Header.vue"
  import FooterGuide from "../components/FooterGuide.vue"
  export default {
    data () {
      return {}
    },

    components: {
      Header,
      FooterGuide
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../assets/stylus/mixin.styl"
  .home
    width 100%

</style>
