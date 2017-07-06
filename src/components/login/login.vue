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
        <div class="pwd border-b1px">
          <label class="pwd-icon"></label>
          <input type="password" placeholder="密码">
          <span class="eye-icon"></span>
        </div>
        <div class="login">
          <input type="button" value="登录">
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
  @import "./css/login.styl";
  </style>
