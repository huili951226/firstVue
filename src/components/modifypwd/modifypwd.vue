<template>
	<div class="container">
		<form class="form">
			<div class="oldpwd">
				<input type="password" placeholder="原密码">
			</div>
			<div class="newpwd">
				<input type="text" id="pwd" placeholder="新密码">
				<span class="eye-icon" id="eye_icon" @click="eye"></span>
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
		methods: {
			eye(){
	          if($("#pwd").attr("type") == "text"){
	            console.log("111")
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

<style lang="stylus" type="type/stylus" rel="stylesheet/stylus">
	@import "./css/common.styl";
</style>
