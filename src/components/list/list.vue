<template>
	<div class="wrapper">
	  	<div class="header">
	  		<img src="../index/images/banner.jpg" class="bg" alt="">
			<h1>Ö÷Ò³</h1>
		</div>
		<div class="game">
			<ul class="hottestGame-wrapper">
				<li class="hottestGame-item border-b1px" v-for="game in type.game">
					<router-link :to="{path:'details',query:{wd:type.name,gameNumber:game.gameNumber}}">
						<img src="../index/images/timg1.jpg" width="60" alt="">
					</router-link>
					<div class="hottestGame-text">
						<div class="hottestGame-title">
						<router-link :to="{path:'details',query:{wd:type.name,gameNumber:game.gameNumber}}">{{game.gameTitle}}</router-link>
						</div>
					</div>
					<div class="open">´ò¿ª</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    data() {
      return {
        type: {}
      };
    },
     mounted() {
    	const wd = this.$route.query.wd;
    },
    created() {
      this.$http.get('/api/index','{wd:this.$route.query.id}').then((response) => {
        response = response.body;
        if(response.errno === ERR_OK) {
          	this.type = response.data.class[this.$route.query.id-1]; 
        }
      });
    },
   
  };
</script>

<style lang="stylus" type="type/stylus" rel="stylesheet/stylus">
@import "../../common/stylus/base.styl";
@import "../../common/stylus/mixin.styl";
	.wrapper
		width:100%
		margin-bottom:50px
		.header
			position:relative
			width:100%
			h1
				position:absolute
				top:12px
				left:50%
				transform: translateX(-50%)
				font-size:18px
				color:#fffefe
		.game
			width:100%
			height:auto
			.game-wrapper
				display:flex
				margin-bottom:20px
			.hottestGame-wrapper
				width:100%
				.hottestGame-item
					position:relative
					display:flex
					padding:15px
					border-b1px(#dddddd)
					&:last-child
						border-b1px(#fff)
					img
						flex:0 0 60px
					.hottestGame-text
						flex:1
						margin-left:10px
						.hottestGame-title
							padding:9px 0
							font-size:14px
							color:#333333
						.hottestGame-number
							font-size:12px
							color:#999999
					.open
						flex:0 0 56px
						width:56px
						height:30px
						line-height:30px
						margin-top:9px
						text-align:center
						color:#ff7f00
						background:url(../index/images/border-mini.png)
						background-size:56px 30px
</style>
