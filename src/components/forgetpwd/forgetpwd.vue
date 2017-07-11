<template>
  <div class="container">
      <div class="header">
        <div class="close" @click="back"></div>
        <div class="title">
          忘记密码
        </div>
      </div>
      <div class="logo"><span></span></div>
      <form class="form">
        <div class="phone border-b1px">
          <label class="phone-icon"></label>
          <input type="number" placeholder="手机号">
        </div>
        <div class="vc border-b1px">
          <label class="vc-icon"></label>
          <input type="number" placeholder="验证码">
          <span class="obtain">获取</span>
        </div>
        <div class="pwd border-b1px">
          <label class="pwd-icon"></label>
          <input type="text" id="pwd" placeholder="密码">
          <span class="eye-icon" id="eye_icon" @click="eye"></span>
        </div>
        <button type="button" class="confirm">确定</button>
      </form>
  </div>
</template>
  <script type="text/ecmascript-6">
    import jquery from '../../common/js/jquery-1.11.3.min'
    export default {
      methods: {
        back() {
          this.$router.go(-1);
        },
        eye(){
          if($("#pwd").attr("type") == "text"){
            $("#pwd").attr("type","password");
            $(".eye-icon").css("backgroundPosition","-318px -34px")
          } else {
            $("#pwd").attr("type","text");
            $(".eye-icon").css("backgroundPosition","-278px -34px");
          }
        }
      }
    };
  </script>

  <style lang="stylus" type="type/stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/base.styl";
    @import "../../common/stylus/mixin.styl";
    @import "./css/common.styl";
  </style>
