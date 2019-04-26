<template>
  <div class="home">
    <Header title="首页">
      <span slot="back" class="back" @click="this.goback">
        <i class="iconfont icon-fanhui"></i>
      </span>
      <span slot="time" class="time">
        <i class="iconfont icon-rili"></i>
      </span>
    </Header>
    <!--轮播-->
    <nav class="home_nav">
      <div class="swiper-mark">
        <span><i class="iconfont icon-shengyin"></i></span>
        <p>暂时没有公告消息</p>
      </div>
      <div class="swiper-container swiper-banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./11111.jpg">
          </div>
          <div class="swiper-slide">
            <img src="./22222.jpg">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--服务选项-->
    <div class="ser_type">
      <a class="type_item" v-for="(item,index) in serverType" :key="index">
        <span class="iconimg" :class="item.color">
          <i class="iconfont" :class="item.iconName"></i>
        </span>
        <span>{{item.serName}}</span>
      </a>
    </div>
    <!--餐品推荐-->
    <TopTitle lTitle="餐品推荐"/>
    <div class="swiper_food swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <img src="./11111.jpg">
          <p>清蒸鲈鱼</p>
        </li>
        <li class="swiper-slide">
          <img src="./11111.jpg">
          <p>清蒸鲈鱼</p>
        </li>
        <li class="swiper-slide">
          <img src="./11111.jpg">
          <p>清蒸鲈鱼</p>
        </li>
        <li class="swiper-slide">
          <img src="./11111.jpg">
          <p>清蒸鲈鱼</p>
        </li>
        <li class="swiper-slide">
          <img src="./11111.jpg">
          <p>清蒸鲈鱼</p>
        </li>
      </ul>
    </div>
     <!--活动推荐-->
    <TopTitle lTitle="活动推荐"/>
    <div class="active">
      <span>暂无活动推荐</span>
      <div class="swiper-container" id="recom_active">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./11111.jpg">
            <span class="act_type">娱乐休闲</span>
            <span class="act_state">进行中</span>
            <div class="act_title">
              <p>暂时没有公告消息</p>
            </div>
          </div>
          <div class="swiper-slide">
            <img src="./11111.jpg">
            <span class="act_type">娱乐休闲</span>
            <span class="act_state">进行中</span>
            <div class="act_title">
              <p>暂时没有公告消息</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import FooterGuide from '../../components/FooterGuide.vue'
  import TopTitle from '../../components/TopTitle.vue'
  export default {
    data () {
      return {
        serverType: [
          {serName: '订餐服务', iconName: 'icon-dingcan', color: 'color1'},
          {serName: '报名活动', iconName: 'icon-huodongbaoming', color: 'color2'},
          {serName: '场馆预约', iconName: 'icon-changguan', color: 'color3'},
          {serName: '服务质量', iconName: 'icon-zhiliang', color: 'color4'},
          {serName: '体征数据', iconName: 'icon-tizhengshuju', color: 'color5'},
        ]
      }
    },
    methods: {},
    mounted: function () {
      new Swiper('.swiper-banner', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }),
      new Swiper('.swiper_food', {
        slidesPerView: 3.5,
        freeMode: true,
      }),
      new Swiper('#recom_active', {
        loop: true
      })
    },
    components: {
      FooterGuide,
      TopTitle
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../../assets/stylus/mixin.styl"
  .home
    width 100%
    padding-top 45px
    padding-bottom 50px
    .home_nav
      height 160px
      background #fff
      .swiper-mark
        position absolute
        top 45px
        left 0
        width 100%
        height 25px
        background-color rgba(0, 0, 0, 0.7)
        color #fff
        font-size 14px
        z-index 10
        span
          position absolute
          top 0
          left 3%
          line-height 24px
        p
          line-height 25px
          padding-left 10%
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            img
              width 100%
              height 100%
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .ser_type
      display flex
      flex-direction row
      width 100%
      border-top 2px solid #ffffff
      .type_item
        display flex
        flex-direction column
        align-items center
        width 20%
        margin 5px
        span
          font-size 14px
          margin 5px auto;
          &.iconimg
            width 55px
            height 55px
            border-radius 50%
            text-align center
            &.color1
              background-color #7440f5
            &.color2
              background-color #f1cd20
            &.color3
              background-color #f14040
            &.color4
              background-color #06c380
            &.color5
              background-color #f55edf
            .iconfont
              font-size 35px
              color #fff
              line-height 55px
    .swiper_food
      background #ffffff
      padding 10px
      margin-bottom 10px
      ul
        width 100%
        li
          float left
          padding 0 7px
          width 90px
          text-align center
          font-size 14px
          img
            width 90px
            height 60px
            margin-bottom 5px
          p
            color $font-color
    .active
      width 100%
      height 165px
      text-align center
      background-color #ffffff
      padding-top 5px
      >span
        font-size 18px
        font-weight 500
        color $font-color
        line-height 150px
      .swiper-container
        display none
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            position relative
            color #ffffff
            img
              width 100%
              height 100%
            .act_type
              position absolute
              top 5%
              left 5%
              padding 8px 10px
              background-color rgba(255,255,255,.5)
              border-radius 3px
            .act_state
              position absolute
              top 0px
              right 5%
              width 50px
              height 50px
              bg-image('./images/activity_right_label')
              background-size 100%
              font-size 13px
              line-height 40px
            .act_title
              position absolute
              left 0px
              bottom 0px
              right 0px
              height 30px
              line-height 30px
              background-color rgba(0,0,0,.5)
              font-size 14px
              text-align right
              padding-right 5%
</style>
