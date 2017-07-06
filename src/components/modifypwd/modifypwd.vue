<template>
	<div class="container">
		<form class="form">
			<div class="oldpwd">
				<input type="password" placeholder="原密码">
			</div>
			<div class="newpwd">
				<input type="password" placeholder="新密码">
				<span class="eye-icon"></span>
			</div>
			<p class="limit">密码由6~20位英文字母、数字或字符串组成</p>
			<div class="confirm">
	          <input type="button" value="确认">
	        </div>
	        <router-link to="/forgetpwd/forgetpwd" class="forget">忘记密码？</router-link>
		</form>
	</div>
</template>
<script>
export default {
};
</script>

<style lang="stylus" type="type/stylus" rel="stylesheet/stylus">
	@import "./css/common.styl";
</style>
