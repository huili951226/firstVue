<template>
	<div class="container">
		<header class="header">
			<div class="title">追随者</div>
		</header>
		<div class="content-wrapper">
			<div class="content">
				<ul>
					<li class="content-title border-b1px">
						<div class="accounts-title
						">帐号</div>
						<div class="logindate-title">最后一次登录日期</div>
					</li>
					<li class="item border-b1px">
						<div class="accounts">
							<a href="" class="avatar"><img src="./images/user.jpg" alt="" width=100%></a>
							<div class="userinfo">
								<p class="username">
									<a href="">追随者</a>
								</p>
								<p class="number">追随者：<span>5</span>人</p>
							</div>
						</div>
						<div class="logindate">
							<span class="date">2017年7月5日</span>
							<span class="time">14:00</span>
						</div>
						<i class="arrow"></i>
					</li>
					<li class="item border-b1px">
						<div class="accounts">
							<a href="" class="avatar"><img src="./images/user.jpg" alt="" width=100%></a>
							<div class="userinfo">
								<p class="username">
									<a href="">追随者</a>
								</p>
								<p class="number">追随者：<span>5</span>人</p>
							</div>
						</div>
						<div class="logindate">
							<span class="date">2017年7月5日</span>
							<span class="time">14:00</span>
						</div>
						<i class="arrow"></i>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
};
</script>

<style lang="stylus" type="type/stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/base.styl";
	@import "../../common/stylus/mixin.styl";
	@import "./css/common.styl";
</style>