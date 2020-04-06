<template>
	<view @tap="tap" style="height: 100vh;">
		
	   <detail ></detail>
       <uniGoodsNavView :options="options"></uniGoodsNavView>
	</view>
</template>
 </view>
</template>



<script>
	import htmlParser from '@/common/html-parser'
	import detail from '@/components/detail/index.vue'
	import uniGoodsNavView from '@/components/uniGoodsNavView/uniGoodsNavView.vue'

	

	const FAIL_CONTENT = '<p>获取信息失败1</p>';

	function parseImgs(nodes) {
		nodes.forEach(node => {
			if (
				node.name === 'img' &&
				node.attrs &&
				node.attrs['data-img-size-val']
			) {
				const sizes = node.attrs['data-img-size-val'].split(',')
				const width = uni.upx2px(720 * 0.9)
				const height = parseInt(width * (sizes[1] / sizes[0]))
				node.attrs.style = `width:${width};height:${height};`
			}
			if (Array.isArray(node.children)) {
				parseImgs(node.children)
			}
		})
		return nodes 
	}

	export default {
		components: {uniGoodsNavView,detail},
		data() {
			return {
				banner: {},
				content: [],
				options: [{
				          icon: '&#xe63a;',
				          text: '评论',
						  url: "../comment/comment"
				        }, {
				          icon: '&#xe60c;',
				          text: '点赞'
				        }, {
				          icon: '&#xe73f;',
				          text: '不喜欢',
				         
				        }, {
				          icon: '&#xe612;',
				          text: '收藏',
				         
				        }],
			}
		},
		onShareAppMessage() {
			return {
				title: this.banner.title,
				path: '/pages/detail/detail?query=' + JSON.stringify(this.banner)
			}
		},
		onLoad(event) {
			console.log("this is detail ");
			uni.$on('toDetail',(detail)=>{
				console.log("detail =",detail);
			}) 
			
				
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.banner = JSON.parse(decodeURIComponent(event.query));
			} catch (error) {
				this.banner = JSON.parse(event.query);
			}

			uni.setNavigationBarTitle({
				title: this.banner.title
			});
			

	

			this.getDetail();
		},
		methods: {
			getDetail() {
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
					success: (result) => {
						let content = FAIL_CONTENT
						if (result.statusCode == 200) {
							content = result.data.content
						}
						const nodes = htmlParser(content);
						// #ifdef APP-PLUS-NVUE
						parseImgs(nodes)
						// #endif
						this.content = nodes
					}
				});
			},
			
			     onClick (e,item) {
					 console.log("??")
					 if(e.content.url){
						 //如果是评论
						 this.$refs.uniGoodsNav.isShow = false;
/* 						 uni.navigateTo({
						 		url: e.content.url
						 }); */
					 }else {
						 uni.showToast({
						   title: `点击${e.content.text}`,
						   icon: 'none'
						 })
					 }
			       
			      },
			      buttonClick (e) {
			        console.log(e)
			        this.options[2].info++
			      },
				  //表情点击事件
				  biaoqingClick(e){
					  console.log("表情点击"+e.isOpen)
					  this.$refs.emoji.isOpenClick(e.isOpen);
				  },
				 //表情选中事件
				 emotion(e){
					 console.log("表情选中"+e)
					 this.$refs.uniGoodsNav.emotion(e);
				 },
				 //界面点击事件
				 tap(e){
				/* 	 console.log("界面点击事件",e) */
				 }
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS */

	
	
	
	/* #endif */
	page {
		min-height: 100%;
	}

	
	.uni-goods-nav{
		position: fixed;  
		bottom: 0rpx;
		width: 100%;
	}
	

	.banner {
		height: 360upx;
		position: relative;
		background-color: #ccc;
		flex-direction: row;
		overflow: hidden;
	}

	.banner-img {
		flex: 1;
	}

	.title-area {
		position: absolute;
		left: 30upx;
		right: 30upx;
		bottom: 30upx;
		z-index: 11;
	}

	.title-text {
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		lines: 2;
		color: #ffffff;
		overflow: hidden;
	}

	.article-meta {
		padding: 20upx 30upx;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	.article-meta-text {
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author {
		font-size: 30upx;
	}

	.article-time {
		font-size: 30upx;
	}

	.article-content {
		font-size: 30upx;
		padding: 0 30upx;
		margin-bottom: 30upx;
		overflow: hidden;
	}
</style>
