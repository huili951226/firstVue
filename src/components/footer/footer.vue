<template>
  <div class="footer border-1px">
      <div class="tab-item">
        <router-link to="/index">主页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ranking">排行</router-link>
      </div>
      <div class="tab-item">
       <router-link to="/news">消息</router-link>
      </div>
  </div>
</template>

<script>
export default {
 
}
</script>
<style lang="stylus" type="type/stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
@import "../../common/stylus/mixin.styl";
  .footer
    display:flex
    position:fixed
    bottom:0
    left:0
    height:50px
    line-height:50px
    width:100%
    border-1px(#dddddd)
    background:#fff
    .tab-item
      flex:1
      text-align:center
      &>a
        display:block
        font-size:15px
        color:rgb(77,85,93)
        &.active
          position:relative
          color:#ff7f00
          border-5px(#ff7f00)
</style>
