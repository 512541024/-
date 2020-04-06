<template>
	<view>
	<!-- 视频列表 -->
    <view class="uni-padding-wrap uni-common-mt">
		<view>
			<video id="myVideo" style="width: 100%;height: 35vh;" src="../../static/video/test.mp4"
				@error="videoErrorCallback"
				 :danmu-list="danmuList"
				 autoplay="true"
				 title="这把我们就要起飞了"
				 page-gesture="true"
				 enable-danmu 
				 danmu-btn
			     controls></video>
		</view>
		<!-- #ifndef MP-ALIPAY -->
<!-- 		<view class="uni-list uni-common-mt">
			<view class="uni-list-cell">
				<view class="uni-list-cell-db">
					<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
				</view>
			</view>
		</view>
		<view class="uni-btn-v">
			<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
		</view> -->
		<!-- #endif -->
	</view>

    <!-- 导航栏 agents导航栏标题 -->
    <view class="navView">
       <section class="Index-Page">
         <s-tabs :activeColor="'#000'" :effect="false" v-model="activeTab" @change="change" :nav-per-view="5">
           <s-tab title="简介">
			   <titltCard></titltCard>
			   <cardList></cardList>
		   </s-tab>
           <s-tab title="评论">
			   <!-- 评论列表 -->
			   <view class="content">
			   	<review :reviewMsg="reviewMsg" @childReview="childReview" :childData="childData"></review>
			   </view>
		   </s-tab>
         </s-tabs>
       </section>
	</view>
	
	
	<uniGoodsNavView ref="uniGoodsNavView" :options="options" :sendDanmu="sendDanmu"></uniGoodsNavView>
		
	</view>
	
</template>

<script>

	import review from '@/components/dl-review/review.vue';
	import sTabs from '@/components/s-tabs';
	import sTab from '@/components/s-tab';
	import uniGoodsNavView from '@/components/uniGoodsNavView/uniGoodsNavView.vue'
	import titltCard from '@/components/detail/titltCard.vue'
    import cardList from '@/components/info-list/cardList.vue'

	
	export default {
	    components:{
	        uniGoodsNavView,
			review,
			sTabs,
			sTab,
			titltCard,
			cardList
	    },
	    data() {
	        return {
				//nav的data
				tabTitle:['简介','评论'],
	            src: '../../static/video/test.mp4',
	            danmuList: [{
	                    text: '第 1s 出现的弹幕',
	                    color: '#ff0000',
	                    time: 1
	                },
	                {
	                    text: '第 3s 出现的弹幕',
	                    color: '#ff00ff',
	                    time: 3
	                },
	                {
	                    text: '第 5s 出现的弹幕',
	                    color: '#ff00ff',
	                    time: 5
	                }
	            ],
	            videoCurrTime:0,
	            videoTitle:"zhemvopswemvop    wjfopjeowjmpiojm",
				options: [{
					          icon: '&#xe63a;',
					          text: '评论',
					        },
							{
							  icon: '&#xe63a;',
							  text: '弹幕',
							},
							{
					          icon: '&#xe60c;',
					          text: '点赞'
					        }, {
					          icon: '&#xe73f;',
					          text: '不喜欢',
					         
					        }, {
					          icon: '&#xe612;',
					          text: '收藏',
					         
					        }],
					        buttonGroup: [{
					          text: '',
					          backgroundColor: '#ff0000',
					          color: '#fff'
					        }
					       ],
						   // 列表详情数据
						   childData: [],
						   // 评论列表
						   reviewMsg: [{
						   	headImgSrc: '../../static/logo.png',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: [{
						   		userId: '22',
						   		userName: '用爱发电',
						   		sendMsg: '我觉得你的说得好',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}, {
						   		userId: '22',
						   		userName: 'lxhzlwz',
						   		sendMsg: '我觉得你的说得好++',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}, {
						   		userId: '22',
						   		userName: '黎明杀机官方',
						   		sendMsg: '众所周知，新入b站的用户是六级，领了礼包的能升五级，等级数字越小越是大佬',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}]
						   }, {
						   	headImgSrc: '../../static/images/wdtx.jpg',
						   	userName: '我是一个解放全世界的杀手',
						   	userLevel: '6',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: []
						   }, {
						   	headImgSrc: '../../static/logo.png',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 2,
						   	reviewLess: [{
						   		userId: '22',
						   		userName: '用爱发电',
						   		sendMsg: '我觉得你的说得好',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}, {
						   		userId: '22',
						   		userName: 'lxhzlwz',
						   		sendMsg: '我觉得你的说得好++',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}]
						   }, {
						   	headImgSrc: '../../static/images/wdtx.jpg',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: [{
						   		userId: '22',
						   		userName: '用爱发电',
						   		sendMsg: '我觉得你的说得好',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}, {
						   		userId: '22',
						   		userName: 'lxhzlwz',
						   		sendMsg: '我觉得你的说得好++',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}, {
						   		userId: '22',
						   		userName: '黎明杀机官方',
						   		sendMsg: '众所周知，新入b站的用户是六级，领了礼包的能升五级，等级数字越小越是大佬',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}]
						   }, {
						   	headImgSrc: '../../static/images/wdtx.jpg',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: [{
						   		userId: '22',
						   		userName: '用爱发电',
						   		sendMsg: '我觉得你的说得好',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}, {
						   		userId: '22',
						   		userName: 'lxhzlwz',
						   		sendMsg: '我觉得你的说得好++',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}, {
						   		userId: '22',
						   		userName: '黎明杀机官方',
						   		sendMsg: '众所周知，新入b站的用户是六级，领了礼包的能升五级，等级数字越小越是大佬',
						   		targetUserId: '1',
						   		targetUserName: '伟杰哥'
						   	}]
						   }],
						   // 测试数据,可删除
						   childDataAjax: [{
						   	headImgSrc: '../../static/logo.png',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: []
						   }, {
						   	headImgSrc: '../../static/images/wdtx.jpg',
						   	userName: '我是一个解放全世界的杀手',
						   	userLevel: '6',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: []
						   }, {
						   	headImgSrc: '../../static/logo.png',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 2,
						   	reviewLess: []
						   }, {
						   	headImgSrc: '../../static/images/wdtx.jpg',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: []
						   }, {
						   	headImgSrc: '../../static/images/wdtx.jpg',
						   	userName: '我用uni-app',
						   	userLevel: '3',
						   	cenId: '19',
						   	sendTime: '2019-03-21',
						   	sendMsg: 'align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。',
						   	likeNum: 241,
						   	dislikeNum: 31,
						   	reviewNum: 22,
						   	reviewLess: []
						   }],
						         src: '',
						               danmuList: [{
						                       text: '第 1s 出现的弹幕',
						                       color: '#ff0000',
						                       time: 1
						                   },
						                   {
						                       text: '第 3s 出现的弹幕',
						                       color: '#ff00ff',
						                       time: 3
						                   }
						               ],
						               danmuValue: '',

									   
				
	        }
	    },

		onLoad(){
			uni.$on('toDetail',(detail)=>{
				console.log("detail =",detail);
			});
			
			uni.$on('toParentDataArrival',(data)=>{
				console.log("监听到数据来了 - 父组件",data);
				this.reviewMsg.unshift(data);
			})
			this.$refs.uniGoodsNavView.$refs.uniGoodsNav.inputVal
			
		},
	
		onReady(res){
		        // #ifndef MP-ALIPAY
		        this.videoContext = uni.createVideoContext('myVideo');
				this.$refs.uniGoodsNavView.$refs.uniGoodsNav.inputVal
		        // #endif
		    },
		 methods: {
		        sendDanmu: function(text) {
					let user = this.commonData.getUser("../../pages/index/login");
					if(user){
						this.videoContext.sendDanmu({
						     text: this.$refs.uniGoodsNavView.$refs.uniGoodsNav.inputVal,
						     color: this.getRandomColor()
						 });
						this.$refs.uniGoodsNavView.$refs.uniGoodsNav.inputVal = '';
					}
		       
		        },
		        videoErrorCallback: function(e) {
		            uni.showModal({
		                content: e.target.errMsg,
		                showCancel: false
		            })
		        },
		        getRandomColor: function() {
		            const rgb = []
		            for (let i = 0; i < 3; ++i) {
		                let color = Math.floor(Math.random() * 256).toString(16)
		                color = color.length == 1 ? '0' + color : color
		                rgb.push(color)
		            }
		            return '#' + rgb.join('')
		        },
				getTimeVideo:function(e){
				    console.log(e);
				},
				childReview(data) {
					console.log(data);
					this.childData = this.childDataAjax;
				},
				changeTab(index){
					this.currentTab = index
				},
		    }
	}
</script>

<style lang="scss">
	.uni-goods-nav{
		position: fixed;  
		bottom: 0rpx;
		width: 100%;
	}
	.Index-Page {
	  .s-tab-wrap {
	    height: 600rpx;
	    font-size: 28rpx;
		overflow: auto;
	  }
	}
	.navView{
		background-color: #FFFFFF;
		height: 45vh;
		.navTab{
			width: 50%;
			height: 100%;
		}
	}
</style>
