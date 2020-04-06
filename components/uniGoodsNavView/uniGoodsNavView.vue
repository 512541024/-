<template>
	<view class="comment-wrap uni-goods-nav">
		<uni-goods-nav ref="uniGoodsNav" :fill="true"  :options="options"   v-on:biaoqingClick="biaoqingClick" @click="onClick" @buttonClick="buttonClick" ></uni-goods-nav>
		<emoji ref="emoji" v-on:emotion="emotion"></emoji>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import emoji from '@/components/bkhumor-emoji/index.vue'
	export default {
	props: {
		options: {
			type: Array,
		},
		sendDanmu:{
			type:Function,
		}
	
	},	
	components: {uniGoodsNav,emoji},
	methods:{
		onClick (e,item) {
		 console.log("uniGoodsNavView的图标点击")
		 switch (e.content.text){
		 	case "评论":
			    this.$refs.uniGoodsNav.isShow = false; //如果是评论
				this.$refs.uniGoodsNav.isComment = true; 
				this.$refs.uniGoodsNav.confirm = ()=>{
					let user = this.commonData.getUser("../../pages/index/login"); 
					if(user){
						//模拟成功
						uni.showLoading({
						    title: '正在发送中....'
						});
						setTimeout(()=>{
							uni.showToast({
								title:"发送成功"
							})
						    uni.hideLoading();
							let data={
									headImgSrc: user.avatarUrl,
									userName: user.nickName,
									userLevel: '5',
									cenId: '19',
									sendTime: new Date().toLocaleDateString(),
									sendMsg: this.$refs.uniGoodsNav.inputVal,
									likeNum: 0,
									dislikeNum: 0,
									reviewNum: 0,
									reviewLess: []
								};
							console.log("SADA?")
						    uni.$emit('toParentDataArrival',data)
						},1000);
					 }
				}
		 		break;
			case "弹幕":
			    this.$refs.uniGoodsNav.isShow = false; //如果是弹幕
				this.$refs.uniGoodsNav.isComment = false;
				this.$refs.uniGoodsNav.confirm = this.sendDanmu;
				break;	
		 	default:
			    uni.showToast({
			      title: `点击${e.content.text}`,
			      icon: 'none'
			    })
		 		break;
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
	}

			
	}

	
</script>

<style>
	.uni-goods-nav{
		position: fixed;  
		bottom: 0rpx;
		width: 100%;
	}
	
</style>
