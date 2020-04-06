<template>
	<view class="uni-column">
		<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
			<scroll-view id="scrollview" scroll-y="true" :style="{height:style.contentViewHeight+'px'}" :scroll-with-animation="true"
			    :scroll-top="scrollTop">
				<page-foot :name="name"></page-foot>
				<message-show v-for="(message,index) in messages" :key="index" :message="message" :cid="index"></message-show>
				<view id="bottom"></view>
			</scroll-view>
		</view>
		<view class="foot">
			<chat-input @send-message="getInputMessage" @show="setScrollH" @foc="setScrollH"></chat-input>
		</view>
		
	</view>
</template>
<script>
	import chatInput from '../../components/yszyun-imchat-emoji/chatinput.vue';
	import messageShow from '../../components/yszyun-imchat-emoji/messageshow.vue';
	
	export default {
		data() {
			return {
				name:'xcecd@qq.com',
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				scrollTop: 0,
				messages: [{
					user: 'home',
					type: 'head', //input,content 
					content: '你好!'
				}]
			}
		},
		components: {
			chatInput,
			messageShow
		},
		onLoad: function () {
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) ; //像素
			//console.log(res)
		},
		methods: {
			getInputMessage: function (message) { //获取子组件的输入数据
				// console.log(message);
				this.addMessage('customer', message.content, false);
				this.toRobot(message.content);
				this.setScrollH();
			},
			addMessage: function (user, content, hasSub, subcontent) {
				var that = this;
				content = 
				that.messages.push({
					user: user,
					content: content,
					hasSub: hasSub,
					subcontent: subcontent
				});
			},
			scrollToBottom: function () {
				var that = this;
				this.scrollTop += 133; 
				//console.log(this.scrollTop)

			},
			toRobot: function (info) {

				// this.addMessage('home', info, false);
				var apiUrl = 'http://www.tuling123.com/openapi/api';
				uni.request({
					url: apiUrl,
					data: {
						"key": 'acfbca724ea1b5db96d2eef88ce677dc',
						"info": info,
						"userid": 'uni-test'
					},
					success: (res) => {
						console.log("s", res);
						this.addMessage('home', res.data.text, false);
						this.scrollToBottom();
						console.log('request success:' + res.data.text);
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						})
					}
				});
			},
			// 设置高度 用emit辅助
			setScrollH: function(){
				var query = uni.createSelectorQuery();
				let footh = query.select('.foot');
				//console.log('fh',footh);
				const res = uni.getSystemInfoSync();
				this.style.pageHeight = res.windowHeight;
				this.$nextTick(function(){
					footh.fields({
						size: true
					}, data => {
						footh = data.height;
						console.log('fh',data.height);
						this.style.contentViewHeight = res.windowHeight -footh ; //像素
					}).exec();	
					console.log('contentViewHeight',this.style.contentViewHeight);
				})	
			}
		}
	}
</script>

<style>
	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {

		display: flex;
		flex: 1;
		/* margin-bottom: 100upx; */
	}

	.foot {
		position: fixed;
		width: 100%;
		/* height: 90upx;
		min-height: 90upx; */
		height: auto;
		left: 0upx;
		bottom: 0;
		overflow: hidden;
	}
</style>