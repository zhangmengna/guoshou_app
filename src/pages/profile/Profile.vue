<template>
  <div class="profile">
    <Header title="我的"></Header>
    <!--信息卡-->
    <div class="info_card">
      <div class="user_photo">
        <img src="./images/user_account_setting_photo_bg@3x.png">
      </div>
      <div class="user_info">
        <p>刘某某</p>
        <p>卡号：12323943938585</p>
      </div>
      <div class="user_detail">
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <!--订单信息-->
    <div class="order_info">
      <div class="order_title border-1px">
        <span>我的订单</span>
        <span class="right_text">查看全部订单<i class="iconfont icon-right"></i></span>
      </div>
      <div class="order_type">
        <a class="order_item" v-for="(item,index) in orderType" :key="index">
          <span class="item_icon">
            <i class="iconfont" :class="item.className"></i>
          </span>
          <span>{{item.stateName}}</span>
        </a>
      </div>
    </div>
    <!--信息选项-->
    <div class="info_type border-1px" v-for="(item,index) in infoType" :key="index">
      <a class="one_type" v-for="(info,index) in item" :key="index" :class="info.className">
        <span>
          <i class="iconfont" :class="info.iconClass"></i>
        </span>
        <span>{{info.infoName}}</span>
      </a>
    </div>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import Header from "../../components/Header.vue"
  import FooterGuide from "../../components/FooterGuide.vue"
  export default {
    data () {
      return {
        orderType:[
          {stateName:"已完成",className:"icon-yiwancheng"},
          {stateName:"待确认",className:"icon-daiqueren"},
          {stateName:"待收货",className:"icon-daishouhuo"},
          {stateName:"已取消",className:"icon-yiquxiao"}
        ],
        infoType:[
          [{infoName:"我的账户",className:'right-1px',iconClass:['icon-zhanghu','color1']},
          {infoName:"我的服务",className:'right-1px',iconClass:['icon-fuwu','color2']},
          {infoName:"我的积分",className:'right-1px',iconClass:['icon-jifen','color3']},
          {infoName:"服务计划",className:'right-1px',iconClass:['icon-jihua','color4']},
          ],
          [{infoName:"我的预约",className:'right-1px',iconClass:['icon-yuyue','color5']},
          {infoName:"我的活动",className:'right-1px',iconClass:['icon-huodong','color6']},
          {infoName:"意见反馈",className:'right-1px',iconClass:['icon-fankui','color7']},
          {infoName:"版权信息",className:'right-1px',iconClass:['icon-banquan','color8']},
          ]
        ]
      }
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @import "../../assets/stylus/mixin.styl"
  .profile
    width 100%
    padding-top 45px
    padding-bottom 50px
    .info_card
      position relative
      width 94%
      height 100px
      margin 35px auto 20px
      border-radius 5px
      bg-image("./images/summary_bg")
      background-size 100%
      background-repeat no-repeat
      .user_photo
        position absolute
        top -25px
        left 25px
        width 50px
        height 50px
        border-radius 50%
        img
          width 100%
          height 100%
      .user_info
        position absolute
        top 25%
        left 25%
        width 65%
        line-height 25px
        color $font-color
      .user_detail
        position absolute
        top 40%
        right 5%
        color #ffffff
    .order_info
      width 100%
      background-color #fff
      margin-bottom 20px
      .order_title
        box-sizing border-box
        padding 0 3%
        height 45px
        bottom-border-1px(#e4e4e4)
        span
          line-height 45px
          color $font-color
          &.right_text
            float right
      .order_type
        display flex
        width 100%
        padding-top 5px
        padding-bottom 5px
        .order_item
          display flex
          flex 1
          text-align center
          flex-direction column
          align-items center
          span
            font-size 14px
            margin-top 5px
            margin-bottom 5px
            .iconfont
              font-size 30px
              color #504c4c
    .info_type
      display flex
      flex-direction row
      width 100%
      overflow hidden
      background-color #fff
      bottom-border-1px(#e4e4e4)
      .one_type
        width 25%
        display flex
        flex-direction column
        align-items center
        box-sizing border-box
        right-border-1px(#e4e4e4)
        span
          font-size 14px
          margin-top 10px
          margin-bottom 10px
          .iconfont
            font-size 32px
            &.color1
              color #ffa52c
            &.color2
              color #ff476f
            &.color3
              color #5c52d5
            &.color4
              color #d5227a
            &.color5
              color #9f6008
            &.color6
              color #ff41c8
            &.color7
              color #c20dd2
            &.color8
              color #03ae2f




</style>
