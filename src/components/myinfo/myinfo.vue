<template>
	<div class="container">
		<ul class="myinfo-wrapper">
			<li class="item border-b1px">
				<span class="item-left">头像</span>
				<span class="item-right" @click="upload"><img src="./images/user.png" alt="" width="100%"></span>
				 <i class="arrow"></i>
			</li>
			<li class="item border-b1px">
				<span class="item-left">用户名</span>
				<span class="item-right">
					<router-link to="/myinfo/updateusername">填写用户名</router-link>
				</span>
				<router-link to="/myinfo/updateusername" class="arrow"></router-link>
			</li>
			<li class="item border-b1px">
				<span class="item-left">姓名</span>
				<span class="item-right">填写姓名</span>
			</li>
			<li class="item border-b1px">
				<span class="item-left">身份证号</span>
				<span class="item-right">
					<router-link to="/myinfo/updateidcard">实名认证</router-link>
				</span>
				<router-link to="/myinfo/updateidcard" class="arrow"></router-link>
			</li>
			<li class="item border-b1px">
				<span class="item-left">我的银行卡</span>
				<span class="item-right">
					<router-link to="/myinfo/bindbankcard">绑定银行卡</router-link>
				</span>
				<router-link to="/myinfo/bindbankcard" class="arrow"></router-link>
			</li>
			<li class="item border-b1px">
				<span class="item-left">邮箱</span>
				<span class="item-right">
					<router-link to="/myinfo/updateemail">绑定邮箱</router-link>
				</span>
				<router-link to="/myinfo/updateemail" class="arrow"></router-link>
			</li>
			<li class="item border-b1px">
				<span class="item-left">手机号</span>
				<span class="item-right">188****2402</span>
			</li>
			<li class="item">
				<span class="item-left">性别</span>
				<span class="item-right">女</span>
			</li>
		</ul>
		<div class="option-wrapper" v-show="uploadShow">
			<div class="option">
				<div class="option-center">
					<div class="photograph border-b1px">拍照</div>
					<div class="album">从相册选择</div>
					<div class="cancel" @click="close">取消</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
      return {
        uploadShow: false
      };
    },
	methods: {
		upload() {
			this.uploadShow = true;
		},
		close() {
			this.uploadShow = false;
		}
	}
};
</script>

<style lang="stylus" type="type/stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/base.styl";
	@import "../../common/stylus/mixin.styl";
	@import "./css/myinfo.styl";
</style>
