<template>
  <div class="container">
      <div class="header">
        <div class="close" @click="back"></div>
        <div class="login">
          <router-link to="/login">登录</router-link>
        </div>
        <div class="add">
          <router-link to="/add">注册</router-link>
        </div>
      </div>
      <div class="logo"><span></span></div>
      <form class="form">
        <div class="phone border-b1px">
          <label class="phone-icon"></label>
          <input type="number" id="phone" placeholder="手机号">
        </div>
        <div class="vc border-b1px">
          <label class="vc-icon"></label>
          <input type="number" id="vc" placeholder="验证码">
          <span class="obtain" id="obtain">获取</span>
        </div>
        <div class="pwd border-b1px">
          <label class="pwd-icon"></label>
          <input type="text" id="pwd" placeholder="密码">
          <span class="eye-icon" id="eye_icon" @click="eye"></span>
        </div>
        <div class="agree">
        	<i class="agree1-icon" id="agree" v-show="true" @click="agree"></i>
          <i class="agree2-icon" id="agree" v-show="false" @click="agree"></i>
        	<span class="agree-text">我已看过并同意<a href="">用户协议</a></span>
        </div>
        <button type="button" class="add" id="add" disabled>确定</button>
        <div class="inviter-phone">
        	<span class="inviter-phone-icon"></span>
        	<input type="number" id="inviter" placeholder="如受邀注册，请填写邀请人手机号码">
        </div>
      </form>
  </div>
</template>
  <script>
    import jquery from '../../common/js/jquery-1.11.3.min'
    export default {
      data() {
        return {
        };
      },
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
        },
        agree(){
          if($(".agree2-icon").css("display") == "none"){
            $(".agree2-icon").css("display","inline-block");
            $(".agree1-icon").css("display","none");
            $("#add").css("border","1px solid #ff7f00");
            $("#add").removeAttr("disabled");
          } else if($(".agree1-icon").css("display") == "none"){
            $(".agree1-icon").css("display","inline-block");
            $(".agree2-icon").css("display","none");
            $("#add").css("border","1px solid #ddd");
            $("#add").attr("disabled","true");
          }
        }

      }
    };
  </script>

  <style lang="stylus" type="type/stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/base.styl";
    @import "../../common/stylus/mixin.styl";
    @import "./css/add.styl";
  </style>
