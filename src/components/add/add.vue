<template>
  <div class="container">
      <div class="header">
        <div class="close"></div>
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
          <input type="number" placeholder="手机号">
        </div>
        <div class="vc border-b1px">
          <label class="vc-icon"></label>
          <input type="number" placeholder="验证码">
          <span class="obtain">获取</span>
        </div>
        <div class="pwd border-b1px">
          <label class="pwd-icon"></label>
          <input type="password" placeholder="密码">
          <span class="eye-icon"></span>
        </div>
        <div class="agree">
        	<i class="agree-icon"></i>
        	<span class="agree-text">我已看过并同意<a href="">用户协议</a></span>
        </div>
        <div class="add">
          <input type="button" value="确定">
        </div>
        <div class="inviter-phone">
        	<span class="inviter-phone-icon"></span>
        	<input type="number" placeholder="如受邀注册，请填写邀请人手机号码">
        </div>
      </form>
  </div>
</template>
  <script>
    export default {
    };
  </script>

  <style lang="stylus" type="type/stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/base.styl";
  @import "../../common/stylus/mixin.styl";
  @import "./css/add.styl";
  </style>
