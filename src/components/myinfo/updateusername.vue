<template>
	<div class="container">
		<form class="form">
			<div class="form-control">
				<input type="number" placeholder="请填写您的用户名">
			</div>
			<p class="limit">用户名要求不少于2个字符；支持中文，英文，数字</p>
			<button type="button" class="confirm">保存</button>
		</form>
	</div>
</template>
<script>
export default {
};
</script>

<style lang="stylus" type="type/stylus" rel="stylesheet/stylus" scoped>
	@import "./css/common.styl";
</style>
