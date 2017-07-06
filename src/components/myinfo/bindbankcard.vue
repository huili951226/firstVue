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
				<input type="password" placeholder="设置交易密码">
				<span class="eye-icon"></span>
			</div>
			<div class="confirm">
	          <input type="button" value="保存">
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
	@import "./css/bankcard.styl";
</style>
