<template name="basics">
	<view class="content" :style="{background: 'url('+imageUrl+')'}">
		<image class="bg-img" :src="imageUrl"></image>
		<scroll-view scroll-y class="page">
			<view class="nav-list">
				<navigator hover-class="none" :url="'../../news/index?name=' + item.title" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index" >
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<!-- <view class="cu-tabbar-height"></view> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				imageUrl:"../../../static/backImg/back.png",
				elements: [{
						title: '八大菜系',
						name: 'badacaixi',
						color: 'cyan',
						cuIcon: 'newsfill',
					},
					{
						title: '个人经典',
						name: 'gerenjingdian',
						color: 'blue',
						cuIcon: 'colorlens'
					},
					{
						title: '传统手艺',
						name: 'chuantongshouyi',
						color: 'purple',
						cuIcon: 'font'
					},
					{
						title: '自创菜系 ',
						name: 'zichuangcaixi',
						color: 'mauve',
						cuIcon: 'cuIcon'
					},
					{
						title: '魔鬼食材',
						name: 'mocaishicai',
						color: 'pink',
						cuIcon: 'btn'
					},
					{
						title: '另类菜谱',
						name: 'lingleicaipu',
						color: 'brown',
						cuIcon: 'tagfill'
					}/* ,
					{
						title: '头像',
						name: 'avatar',
						color: 'red',
						cuIcon: 'myfill'
					},
					{
						title: '进度条',
						name: 'progress',
						color: 'orange',
						cuIcon: 'icloading'
					},
					{
						title: '边框阴影',
						name: 'shadow',
						color: 'olive',
						cuIcon: 'copy'
					},
					{
						title: '加载',
						name: 'loading',
						color: 'green',
						cuIcon: 'loading2'
					} */
				],
			};
		},
		onShow() {
			console.log("success")
		},

	}
</script>

<style>
	.page {
		height:100vh;

	}
	.nav-list{
		margin-top: 50upx;
	}
	.nav-li{
		border-radius: 10px;
		width: 45%;
		margin: 0 2.5% 40px;
	}
	.bg-img{
		width: 100%;
		height: 100vh;
		position: absolute;
	}
</style>
