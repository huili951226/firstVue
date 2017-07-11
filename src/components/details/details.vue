<template>
  <div class="details">
      <img src="../index/images/banner.jpg" class="bg" alt="">
      <h1>{{details.gameTitle}}</h1>
      <div class="introduce">{{details.introduce}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
	const ERR_OK = 0;
  export default {
    data() {
      return {
        details: {}
      };
    },
    created() {
      this.$http.get('/api/index').then((response) => {
        response = response.body;
        if(response.errno === ERR_OK) {
          	this.details = response.data.class[this.$route.query.gameNumber-1].game[this.$route.query.gameNumber-1].details; 
        }
      });
    }
  };
</script>
<style lang="stylus" type="type/stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/base.styl";
  @import "../../common/stylus/mixin.styl";
	.details
		h1
			height:35px
			line-height:35px
			font-weight:700
			font-size:14px
			text-align:center
			color:#333
		.introduce
			height:25px
			line-height:25px
			padding:6px 12px
			font-size:12px
			text-indent:12px
			color:#333
</style>

