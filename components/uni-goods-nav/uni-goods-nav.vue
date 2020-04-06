<template>
	<view class="uni-goods-nav">
		<!-- 底部占位 -->
		<view class="uni-tab__seat" />
		<view class="uni-tab__cart-box flex">
			
			<view class="flex uni-tab__cart-sub-box" v-if="isShow">
				<view v-for="(item,index) in options" :key="index" class="flex uni-tab__cart-button-left uni-tab__shop-cart" @click="onClick(index,item)">
					<view class="uni-tab__icon">
						<i  :class="[{texticons_select:index == selctIndex},{texticons_select:index==options.length-1&&isShoucang}]" class="texticons" v-html="item.icon" ></i>
					</view>
					<text class="uni-tab__text">{{item.text}}</text>
					
					<view class="flex uni-tab__dot-box">
						<text v-if="item.info" :class="{ 'uni-tab__dots': item.info > 9 }" class="uni-tab__dot ">{{ item.info }}</text>
					</view>
				</view>
			</view>
			<i  v-else class="texticons inputBack" @click="inputBack" >&#xe65e;</i>
			<view v-if="!isShow" :class="{'uni-tab__right':fill}" class="flex uni-tab__cart-sub-box ">
                  <input  type="text" @keyboardheightchange="inputClick" v-model="inputVal" class="comment" cursor-spacing="1" confirm-type="send" @focus="inputClick"   @confirm="confirm"/>
				  <!-- 操作图标 -->
				  <i  class="texticons biaoqing" v-if="isComment"  @click="biaoqingClick" >&#xe64e;</i>
				  <i  class="texticons biaoqing"  style="color:#007AFF" @click="confirm" >&#xe77e;</i>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		name: 'UniGoodsNav',
		data() {
			return {
				selctIndex:null,
				isOpen:false,
				inputVal:``,
				isShoucang:false,
				isComment:false,//是否展示评论的专属图标
				isShow:true,
			}
		},
		props: {
			options: {
				type: Array,
				default () {
					return [{
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
						text: '店铺'
					}, {
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
						text: '购物车'
					}]
				}
			},
			buttonGroup: {
				type: Array,
				default () {
					return [{
							text: '加入购物车',
							backgroundColor: '#ff0000',
							color: '#fff'
						},
						{
							text: '立即购买',
							backgroundColor: '#ffa200',
							color: '#fff'
						}
					]
				}
			},
			fill: {
				type: Boolean,
				default: false
			},

		},
		methods: {
			onClick(index, item) {
				console.log(123)
				if(index!=this.options.length-1){
					index!=0&&index!=1?this.selctIndex = index:"";
				}else{
					this.isShoucang = !this.isShoucang;
				};
				this.$emit('click', {
					index,
					content: item
				})
			},
			buttonClick(index, item) {
				if (uni.report) {
					uni.report(item.text, item.text)
				}
				getCurrentPages().$emit('buttonClick', {
					index,
					content: item
				})
			},
			//输入框的事件
			inputClick(){
				console.log(this)
			   this.isShow=false; 
			},
			//输入边框返回事件
			inputBack(){
				this.isShow=true;
				this.isOpen = false;
				this.$emit('biaoqingClick', {
					isOpen: this.isOpen
				})
			},
			confirm(e){
				console.log("点击确定",e);
                let user = this.commonData.getUser("../../pages/index/login");
				if(user){
					//模拟成功
					uni.showLoading({
					    title: '正在发送中....'
					});
					setTimeout(()=>{
					    uni.hideLoading();
						let data={
								headImgSrc: user.avatarUrl,
								userName: user.nickName,
								userLevel: '5',
								cenId: '19',
								sendTime: new Date().toLocaleDateString(),
								sendMsg: this.inputVal,
								likeNum: 0,
								dislikeNum: 0,
								reviewNum: 0,
								reviewLess: []
							};
						uni.navigateTo({
							url: '../../pages/comment/comment?data='+ encodeURIComponent(JSON.stringify(data))
						})
					},1000);

	
				}

			
			},
			//表情是否开启
			biaoqingClick(e){
				this.isOpen = !this.isOpen
				console.log("??????")
				this.$emit('biaoqingClick', {
					isOpen: this.isOpen
				})
			},
			//表情选中添加表情
			emotion(e){
				this.isShow=false;
				this.inputVal+=e
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.texticons_select{
        color: #39B54A;
	}
	

	
	.flex {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.uni-goods-nav {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
	}

	.uni-tab__cart-box {
		flex: 1;
		height: 100rpx;
		background-color: #fff;
		z-index: 900;
	}

	.uni-tab__cart-sub-box {
		flex: 1;
	}

	.uni-tab__right {
		margin: 5px 0;
		margin-right: 10px;
		/* border-radius: 100px; */
		overflow: hidden;
		padding: 10upx;
		.comment{
			border: solid 1upx;
			height: 100%;
			    width: 90%;
			border-radius: 15upx;
			padding-right: 20rpx;
			padding-left: 20rpx;
			margin-right: 20upx;
			border-color: #a29b9b;
		}
/* 		.comment::before{
			    content: "评论";
			    position: absolute;
			    right: 0px;
			    background-color: #57b7b7;
			    height: 100%;
				line-height: 50rpx;
				padding-left: 25rpx;
				padding-right: 25rpx;
		} */
		.biaoqing{
			color: #7f7777;
			font-size: 60upx;
			margin-right: 20upx;
		}
		
	}
	

	.uni-tab__cart-button-left {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */

		flex: 1;
		position: relative;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.uni-tab__icon {
		width: 20px;
		height: 20px;
	}

	.image {
		width: 20px;
		height: 20px;
	}

	.uni-tab__text {
		/* margin-top: 3px; */
		font-size: $uni-font-size-sm;
		color: #666;
	}

	.uni-tab__cart-button-right {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		flex: 1;
		justify-content: center;
		align-items: center;
	}

	.uni-tab__cart-button-right-text {
		font-size: $uni-font-size-base;
		color: #fff;
	}

	.uni-tab__cart-button-right:active {
		opacity: 0.7;
	}

	.uni-tab__dot-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		position: absolute;
		right: 8px;
		top: 4px;
		justify-content: center;
		align-items: center;
		// width: 0;
		// height: 0;
	}

	.uni-tab__dot {
		// width: 30rpx;
		// height: 30rpx;
		padding: 0 4px;
		line-height: 15px;
		color: #ffffff;
		text-align: center;
		font-size: 12px;
		background-color: #ff0000;
		border-radius: 15px;
	}

	.uni-tab__dots {
		padding: 0 3px;
		// width: auto;
		border-radius: 15px;
	}

	.uni-tab__color-y {
		background-color: #ffa200;
	}

	.uni-tab__color-r {
		background-color: #ff0000;
	}
	.inputBack{
		    font-size: 20px;
		    line-height: 50px;
		    margin: 0px 1px 0px 10px;	
	}
</style>
