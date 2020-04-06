<template>
	<view class="warp">
		<!-- 文字滚动 -->
		<uni-notice-bar class="uni-notice-bar" showIcon="true" scrollable="true" single="true" :text="text"></uni-notice-bar>
		<view class="example-body">
			<uni-grid :column="3" :highlight="true" :show-border="false" :square="false" @change="change">
				<uni-grid-item  v-for="(item, index) in list"  :key="index"  >
					<image :src="item.url" class="image" mode="aspectFill" />
					<text class="text">{{ item.text }}</text>
				</uni-grid-item>
			</uni-grid>
		</view>

	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniNoticeBar
		},
		data() {
			return {
				text:"欢迎你来到天下菜系的APP。加油，奥利给！",
				list: [
					{
						url: '../../static/svg/海南鸡饭.png',
						text: '菜谱推荐',
						path:"../info-list/info-list-Recommend"
					},
					{
						url: '../../static/svg/地三鲜.png',
						text: '菜谱咨询',
						path:"../info-list/info-list"
					},
					{
						url: '../../static/svg/茶点.png',
						text: '菜谱建立',
						path:"../LevineHua-editor/LevineHua-editor"
					},
					{
						url: '../../static/svg/黑芝麻糊.png',
						text: '查询菜谱'
					},
				
					{
						url: '../../static/svg/qifei.jpg',
						text: '起飞'
					},
	
				]
			}
		},
		methods: {
			change(e) {
				
				let {index} = e.detail
				let item = this.list[index];
				console.log(item)
				if(item.text=="起飞"){
					uni.showModal({
					    content: "您是否选择起飞！？ ",
					    success: function (res) {
					        if(res.confirm){
					            const bgAudioMannager = uni.getBackgroundAudioManager();
					            bgAudioMannager.title = '致爱丽丝';
					            bgAudioMannager.singer = '暂无';
					            bgAudioMannager.coverImgUrl = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg';
					            bgAudioMannager.src = '../../static/mp3/VariousArtists.mp3';
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    },
					});
				}else{
					// #ifdef  MP-WEIXIN
					if(item.path=="../LevineHua-editor/LevineHua-editor"){
						item.path ="../LevineHua-editor/editor"
					}
					// #endif
					uni.navigateTo({
					    url:item.path
					});
				}
		
				
			},
			

		}
	}
</script>

<style>
/* 	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}
 */
	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		/* padding: 0 30upx 30upx */
	}
    .uni-notice-bar{
		margin-bottom: 0px!important;
	}
	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		/* margin-top: 20upx; */
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 0upx 0
	}

	.example-body {
		 padding: 30upx; 
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.image {
		width: 50upx;
		height: 50upx;
	}

	.text {
		font-size: 26upx;
		margin-top: 10upx;
	}
</style>