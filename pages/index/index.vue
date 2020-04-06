<template>
	<view class="bg">
		<!-- <bw-img-upload style="width:100%" ></bw-img-upload> -->
		<bw-swiper class="bw-swiper" :interval="4500" :autoplay="true" :videoAutoplay="true" :swiperList="swiperList" :swiperType="true" style="width:100%"   :textStyleBgcolor="textStyleBgcolor" :textTip="true" ></bw-swiper>
		<grid ></grid> 
	</view>
</template>
<script>
	
	import grid from './grid.vue';
	import bwSwiper from '@/components/bw-swiper/bw-swiper.vue'
	export default {
		components: {
		grid,bwSwiper
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				previousMargin:"0px",
				nextMargin:"0px",
				
				//轮播图data

				swiperList:[
							{img: '../../static/lunbo/菜1.jpg',text:'火烧土豆皮'},
							{img: '../../static/lunbo/菜2.jpg',text:'暴鱼菊'},
							{img: '../../static/lunbo/菜3.jpg',text:'大鱼顿火锅'}
						],
				textStyleBgcolor:"rgba(51, 51, 51, 0.42)"		
				   
			}
		},
		onLoad() {
	
			if(uni.getStorageSync('isOnceShow')){
			     //只允许显示一次
				 uni.setStorage({
				     key: 'isOnceShow',
				     data: false
				 });
				 uni.showModal({
				     title: this.App_title,
				     content: "欢迎你 "+userName,
				     success: function (res) {
				         if(res.confirm){
				             console.log('用户点击确定');
				         } else if (res.cancel) {
				             console.log('用户点击取消');
				         }
				     },
				 });
			 }


		},
	
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style lang="scss">

	 .bw-swiper{
		 margin-top: 15upx;
		 margin-bottom: 10upx;
	 }

	.uni-margin-wrap {
		width:100%;
/* 		 margin:15upx 0upx 0upx 15upx; */ 

	}
	.swiper {
		height: 300upx;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}
	
	.swiper-item image{
	  width: 100%;
	  height: 100%;
	}

	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}
	
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
</style>
