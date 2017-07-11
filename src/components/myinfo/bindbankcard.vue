<template>
	<div class="container">
		<form class="form">
			<div class="user">持卡人：<span>张三</span></div>
			<div class="form-control">
				<input type="number" placeholder="请填写您的银行卡号">
			</div>
			<div class="form-control">
				<input type="number" placeholder="请填写您的银行预留手机号">
			</div>
			<div class="form-control">
				<input type="number" placeholder="验证码">
				<span class="get border-l1px">获取验证码</span>
			</div>
			<div class="form-control">
				<input type="text" id="pwd" placeholder="设置交易密码">
				<span class="eye-icon" id="eye_icon" @click="eye"></span>
			</div>
			<button type="button" class="confirm">保存</button>
		</form>
	</div>
</template>
<script>
export default {
	methods: {
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
	@import "./css/bankcard.styl";
</style>
