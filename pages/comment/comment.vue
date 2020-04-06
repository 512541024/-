<template>
	<view class="content">
		<review :reviewMsg="reviewMsg" @childReview="childReview" :childData="childData"></review>
	</view>
</template>

<script>
	import review from '../../components/dl-review/review.vue';
	export default {
		components: {
			review
		},
		data() {
			return {
				
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
				
			}
		},

		onLoad(option){
			const data = JSON.parse(decodeURIComponent(option.data));
			if(data){
				this.reviewMsg.unshift(data);
				uni.showToast({
					title:"发送成功"
				})
			}


		},
		methods: {	
			childReview(data) {
				console.log(data);
				this.childData = this.childDataAjax;
			},


		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
