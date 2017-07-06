<template>
  <div class="container">
      <div class="header">
        <div class="close"></div>
        <div class="title">
          忘记交易密码
        </div>
      </div>
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
          <input type="password" placeholder="设置交易密码">
          <span class="eye-icon"></span>
        </div>
        <div class="confirm">
          <input type="button" value="确定">
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
  @import "./css/common.styl";
  </style>
