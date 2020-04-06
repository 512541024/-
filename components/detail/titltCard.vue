<template>
	<div class="hm-news-detail">
	  <div class="hd">
	    <img class="yunshu" :src="options.yunshu" />
	    <div class="container">
	      <div class="outer">
	        <span class="author">{{ options.author }}</span>
	        <div class="wrap">
	          <img class="like" :src="options.like" />
	          <img class="share" :src="options.share" />
	        </div>
	      </div>
	      <span class="time">{{ options.time }}</span>
	    </div>
	  </div>

	  <span class="title">{{ options.title }}</span>
	  <view class="videoInfo">
	  	 <view class="videoInfo_number">
			<i class="texticons">&#xe612;</i><text>1213</text>
			<i class="texticons">&#xe612;</i><text>1213</text>
			<span class="time">{{new Date().toLocaleTimeString()}}</span>
		 </view>
		 <view class="videoInfo_warn">
		 	<i class="texticons">&#xe612;</i><text>未经作者授权禁止转载</text>		
		 </view>
		 <view class="videoInfo_content">
		 	<text>简介:你只看到了第二层，你把我想成了第一层，实际上我在第五层</text>		
		 </view>
	  </view>

	  </div>
	</div>
</template>

<script>
	
	export default {
	  props: {
	    dataId: {
	      type: String,
	      default: 'hm-news-detail'
	    },
	    options: {
	      type: Object,
	      default: function() {
	        return {
	          yunshu:
	            '../../static/hm-news-detail/images/touxiang.jpg',
	          author: '杨大帅',
	          like:
	            '../../static/hm-news-detail/images/img_22946_0_1.png',
	          share:
	            '../../static/hm-news-detail/images/img_22946_0_2.png',
	          time: '2 minutes ago',
	          title: '这钵？这钵呀？这钵是回首掏',
	          img:
	            '../../static/hm-news-detail/images/title-img.jpg',
	      }
	    }
	  },
	  data() {
	    return {};
	  },
	}
	};
</script>

<style lang="scss">
	@import './index.response.css';
	.videoInfo{
		width: 100%;
		margin: 0px 0px 10px 0px;
		.videoInfo_number text{
			margin-right: 10px;
		}

		color: #757575;
		border-bottom: solid 0.5px #eadada;
		padding-bottom: 10px;
	}
	.videoInfo view{
		margin: 3px 15px 0px 15px;
	}
	.title{
		 margin-left: 15px;
		 min-height: auto;
		 margin-top: 5px;
	}
	.hd{
		    width: 334px;
	}

	.hm-news-detail{
		height: auto;
	}
</style>
