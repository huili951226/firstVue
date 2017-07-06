<template>
	<div class="wrapper">
		 <transition name="fade">
		    <keep-alive>
		      <router-view></router-view>
		    </keep-alive>
		 </transition>
	  	<div class="header">
	  		<img src="./images/banner.jpg" class="bg" alt="">
			<h1>{{index.name}}</h1>
		</div>
		<div class="max-head" v-show="detailShow" @click="close">
			<img src="./images/user.png" alt="">
		</div>
		<div class="user">
			<div class="user-message">
				<img src="./images/user.png" @click="showDetail" width="45" alt="">
				<a class="user-name">{{user.nickname}}</a>
			</div>
			<div class="other">
				<div class="share">
					<div class="jiathis_style">
						<a class="jiathis_button_qzone"></a>
						<a class="jiathis_button_tsina"></a>
						<a class="jiathis_button_tqq"></a>
						<a class="jiathis_button_weixin"></a>
						<a class="jiathis_button_renren"></a>
						<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
						<a class="jiathis_counter_style"></a>
					</div>
				</div>
				<div class="visitor border-l1px">
					<div class="today-visitor">
						今日访客
						<span class="today-number">{{index.visitor.visitorsToday}}</span>
					</div>
					<div class="history-visitor">
						历史访客
						<span class="history-number">{{index.visitor.historyVisitors}}</span>
					</div>
				</div>
			</div>
		</div>
		<i class="bg30"></i>
		<div class="game">
			<div class="game-header">
				<div class="recommend-title"></div>
				<router-link :to="{path:'list',query:{wd:index.class[0].name,id:index.class[0].id}}" class="game-more"></router-link>
			</div>
			<ul class="game-wrapper">
				<li class="game-item" v-for="game in index.class[0].game">
					<router-link :to="{path:'details',query:{wd:index.class[0].name,gameNumber:game.gameNumber}}">
						<img src="./images/timg1.jpg" width="60" alt="">
					</router-link>
					<div class="game-title">
						<router-link :to="{path:'details',query:{wd:index.class[0].name,gameNumber:game.gameNumber}}">{{game.gameTitle}}</router-link>
					</div>
					<div class="open">打开</div>
				</li>
			</ul>
		</div>
		<i class="bg30"></i>
		<div class="game">
			<div class="game-header">
				<div class="friendsPlaying-title"></div>
				<router-link :to="{path:'list',query:{wd:index.class[1].name,id:index.class[1].id}}" class="game-more"></router-link>
			</div>
			<ul class="game-wrapper">
				<li class="game-item" v-for="game in index.class[1].game">
					<router-link :to="{path:'details',query:{wd:index.class[1].name,gameNumber:game.gameNumber}}">
						<img src="./images/timg1.jpg" width="60" alt="">
					</router-link>
					<div class="game-title">
						<router-link :to="{path:'details',query:{wd:index.class[1].name,gameNumber:game.gameNumber}}">{{game.gameTitle}}</router-link>
					</div>
					<div class="friends-name">{{game.gameFriends}}等</div>
					<div class="name-after">3位好友在玩</div>
					<div class="together">一起玩</div>
				</li>
			</ul>
		</div>

		<i class="bg30"></i>
		<div class="game">
			<div class="game-header">
				<div class="boutique-title"></div>
				<router-link :to="{path:'list',query:{wd:index.class[2].name,id:index.class[2].id}}" class="game-more"></router-link>
			</div>
			<ul class="game-wrapper">
				<li class="boutiquegame-item" v-for="game in index.class[2].game">
					<router-link :to="{path:'details',query:{wd:index.class[2].name,gameNumber:game.gameNumber}}">
						<img src="./images/timg2.jpg" width="120" alt="">
					</router-link>
					<div class="game-title">
						<router-link :to="{path:'details',query:{wd:index.class[2].name,gameNumber:game.gameNumber}}">{{game.gameTitle}}</router-link>
					</div>
					<div class="open">打开</div>
				</li>
			</ul>
		</div>

		<i class="bg30"></i>
		<div class="game">
			<div class="game-header">
				<div class="newProduct-title"></div>
				<router-link :to="{path:'list',query:{wd:index.class[3].name,id:index.class[3].id}}" class="game-more"></router-link>
			</div>
			<ul class="game-wrapper">
				<li class="game-item" v-for="game in index.class[3].game">
					<router-link :to="{path:'details',query:{wd:index.class[3].name,gameNumber:game.gameNumber}}">
						<img src="./images/timg1.jpg" width="60" alt="">
					</router-link>
					<div class="game-title">
						<router-link :to="{path:'details',query:{wd:index.class[3].name,gameNumber:game.gameNumber}}">{{game.gameTitle}}</router-link>
					</div>
					<div class="open">打开</div>
				</li>
			</ul>
		</div>

		<i class="bg30"></i>
		<div class="game">
			<div class="game-header">
				<div class="hottestGame-title"></div>
				<router-link :to="{path:'list',query:{wd:index.class[4].name,id:index.class[4].id}}" class="game-more"></router-link>
			</div>
			<ul class="hottestGame-wrapper">
				<li class="hottestGame-item border-b1px" v-for="game in index.class[4].game">
					<router-link :to="{path:'details',query:{wd:index.class[4].name,gameNumber:game.gameNumber}}">
						<img src="./images/timg1.jpg" width="60" alt="">
					</router-link>
					<div class="hottestGame-text">
						<div class="hottestGame-title">
							<router-link :to="{path:'details',query:{wd:index.class[4].name,gameNumber:game.gameNumber}}">{{game.gameTitle}}</router-link>
						</div>
						<div class="hottestGame-number">{{game.gameType}}</div>
					</div>
					<div class="open">打开</div>
				</li>
			</ul>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script type="text/ecmascript-6">
	import footer from '../footer/footer'
  const ERR_OK = 0;
  export default {
  	components: {
      'v-footer': footer
    },
    data() {
      return {
        index: {},
        user: {},
        detailShow: false
      };
    },
    created() {
      this.$http.get('/api/index').then((response) => {
      	console.log(this.$route.query.id);
        response = response.body;
        if(response.errno === ERR_OK) {
          	this.index = response.data; 
          	this.user = response.data.user[this.$route.query.id]; 
        }
      });
    },
    methods: {
    	showDetail() {
    		this.detailShow = true;
    	},
    	close() {
    		this.detailShow = false;
    	}
    }
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
		.max-head
			position:fixed
			top:0
			left:0
			display:table-cell
			width:100%
			height:100%
			z-index:1
			background:rgba(0,0,0,0.8)
			img
				position:absolute
				top:50%
				left:50%
				width:200px
				height:200px
				-webkit-transform: translate(-100px,-100px)
				transform: translate(-100px,-100px)
				border-radius:100px

		.user
			display:flex
			height:75px
			.user-message
				position:relative
				flex:1
				padding:15px
				.user-name
					position:absolute
					font-size: 14px
					top:32px
					left:70px
				    
			.other
				flex:1
				height:26px
				padding-top:25px
				.share
					width:58px
					height:26px
					padding-left:5px
					background:url(images/index.png) -80px -23px
					background-size:375px 667px
					float:left
				.visitor
					float:left
					padding-left:5px
					border-l1px(#999999)
					font-size:12px
					.today-visitor, .history-visitor
						height:13px
						line-height:13px
						color:#999999
						.today-number, .history-number
							color:#ff8200
		.bg30
			display:block
			height:15px
			background-color:#f8f8f8
		.game
			width:100%
			height:auto
			.game-header
				position:relative
				margin:20px 0
				.recommend-title, .friendsPlaying-title, .boutique-title, .newProduct-title, .hottestGame-title
					width:122px
					height:16px
					margin:0 auto
				.recommend-title
					background:url(images/index.png) -21px -86px
					background-size:375px 667px
				.friendsPlaying-title
					background:url(images/index.png) -175px -86px
					background-size:375px 667px
				.boutique-title
					background:url(images/index.png) -21px -195px
					background-size:375px 667px
				.newProduct-title
					background:url(images/index.png) -175px -195px
					background-size:375px 667px
				.hottestGame-title
					background:url(images/icon.png)
					background-size:121px 15px
				.game-more
					position:absolute
					top:0
					right:15px
					width:18px
					height:18px
					background:url(images/index.png) -155px -23px
					background-size:375px 667px
			.game-wrapper
				display:flex
				margin-bottom:20px
				.game-item, .boutiquegame-item
					position:relative
					flex:1
					text-align:center
					.friends-name, .name-after
						padding:3px 0
						font-size:10px
						color:#999999
					.game-title
						margin:10px 0
						font-size:14px
						color:#333333
					.open, .together
						line-height:30px
						margin-left:32px
						color:#ff7f00
					.open
						width:56px
						height:30px
						margin-top:20px
						margin-left:40px
						text-align:center
						background:url(images/border-mini.png)
						background-size:56px 30px
					.together
						width:75px
						height:30px
						margin-top:20px
						background:url(images/border-max.png)
						background-size:75px 30px
				.boutiquegame-item
					position:relative
					flex:1
					&:nth-of-type(1)
						text-align:left
					&:nth-of-type(2)
						text-align:center
					&:nth-of-type(3)
						text-align:right
						.game-title
							margin:10px 0 20px
							font-size:14px
							color:#333333
					.game-title
						text-align:center		
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
						background:url(images/border-mini.png)
						background-size:56px 30px
</style>
