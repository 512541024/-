<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view class="avator">
							<img :src="usnerinfo.avatarUrl">
						</view>
						
						<view class="phone-number" v-if="usnerinfo.nickName">{{usnerinfo.nickName}}</view>
						<view class="login-title"  style="z-index: 999;" v-else @click="login()">点击登录</view>
					</view>
					<view class="box-bd">
						<view class="item">
							<view class="icon">
						<!-- 		<svg class="icon" aria-hidden="true">
								  <use xlink:href="#icon-shoujian"></use>
								</svg> -->
								<image class="icon" src="../../static/user/wodetongzhi.png"></image>
							</view>
							<view class="text">我的通知</view>
						</view>
						<view class="item">
							<view class="icon">
								<image class="icon" src="../../static/user/wodeshoucang.png"></image>
							</view>
							<view class="text">我的收藏</view>
						</view>
						<view class="item">
							<view class="icon">
								<image class="icon" src="../../static/user/liulanlishi.png"></image>
								</view>
		 					<view class="text">浏览历史</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="li noborder" @click="changeSkin" >
					<view class="icon">
						<image class="icon" src="../../static/user/wodemingpian.png"></image>
					</view>
					<view class="text">我的名片</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li " >
					<view class="icon">
						<image class="icon" src="../../static/user/bangzhuzhongxin.png"></image>
					</view>
					<view class="text">帮助中心</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li " >
					<view class="icon">
						<image class="icon" src="../../static/user/guanyuwomen.png"></image>
					</view>
					<view class="text">关于我们</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
				<view class="li " >
					<view class="icon">
						<image class="icon" src="../../static/user/yijianfankui.png"></image>
					</view>
					<view class="text">意见反馈</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
			<view class="list">
				<view class="li noborder" >
					<view class="icon">
						<image class="icon" src="../../static/user/xitongshezhi.png"></image>
					</view>
					<view class="text">系统设置</view>
					<image class="to" src="../../static/user/to.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	/* import $ from 'jquery' */
   
	export default {
		data() {
			return {
				user:{},
				usnerinfo:{}
			};
		},
		onLoad() {
			   // 监听事件  
			    uni.$on('appLogin',(usnerinfo)=>{  
			        this.usnerinfo = usnerinfo;  
					console.log("usnerinfo =",this.usnerinfo);
			    })  
				//注入user
				 this.usnerinfo = uni.getStorageSync('uerInfo');
				 console.log("usnerinfo =", this.usnerinfo);
		
			
		},
		onShow: function() {
	

		},
		methods: {
			changeSkin(){
				uni.navigateTo({
						url: 'userInfo/userInfo?user='+ encodeURIComponent(JSON.stringify(this.user))
				});
			},
			
			login(){
				uni.showModal({
				    title: this.App_title,
					content:"是否跳转登录界面",
				    success: function (res) {
				        if (res.confirm) {
				           uni.navigateTo({
				           		url: '../index/login'
				           });
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}

		}
	}
</script>

<style lang="scss">
page{
	background-color:#f1f1f1;
	font-size: 30upx;
}

.header{
	background: #fff;
	height: 290upx;
	padding-bottom: 110upx;
	.bg{
		width: 100%;
		height:200upx;
		padding-top:100upx;
		background-color:#4191ea;
	}
}
.box{
	width: 650upx;
	height: 280upx;
	border-radius: 20upx;
	margin: 0 auto;
	background: #fff;
	box-shadow: 0 5upx 20upx 0upx rgba(0, 0, 150, .2); 
	.box-hd{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		.avator{
			width: 160upx;
			height: 160upx;
			background: #fff;
			border: 5upx solid #fff;
			border-radius: 50%;
			margin-top: -80upx;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.phone-number{
			width: 100%;
			text-align: center;
		}
		
		.login-title{
			width: 100%;
			text-align: center;
			 margin: 10upx; 
		}
	}
	.box-bd{
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		.item{
			flex: 1 1 auto;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			border-right: 1px solid #f1f1f1;
			margin: 15upx 0;
			&:last-child{
				border: none;
			}
			.icon{
				width: 60upx;
				height: 60upx;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				width: 100%;
				text-align: center;
				margin-top: 10upx;
				font-size: $uni-font-size-sm;
			}
		}
	}
}
.list-content{
	background: #fff;
	margin-top: 120upx;
}
.list{
	width:100%;
	border-bottom:15upx solid  #f1f1f1;
	background: #fff;
	&:last-child{
		border: none;
	}
	.li{
		width:92%;
		height:100upx;
		padding:0 4%;
		border-bottom:1px solid rgb(243,243,243);
		display:flex;
		align-items:center;
	&.noborder{
		border-bottom:0
		}
		.icon{
			flex-shrink:0;
			width:50upx;
			height:50upx;
			image{
				width:50upx;
				height:50upx;
			}
		}
		.text{
			padding-left:20upx;
			width:100%;
			color:#666;
			font-size: $uni-font-size-sm;
			
		}
		.to{
			flex-shrink:0;
			width:40upx;
			height:40upx;
		}
	}
}
</style>
