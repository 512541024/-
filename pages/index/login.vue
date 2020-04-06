<template >
	<view class="view_back container" :style="{backgroundImage:`url(${indexBackgroundImage})`,backgroundSize: 'cover'}">
	<view class="uni-flex uni-row"  style="height: 100px; -webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
	<view class="text uni-flex appLogin"  data-logintype="weixin"  @click="appLogin">
		<image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill" />
		<text>微信授权登录</text>
	</view>

	</view>
	</view>
</template>

<script>
	export default {
		 name: 'login',
		 data() {
		     return {
		         loginData: null,
				 indexBackgroundImage:"../../static/backImg/timg.jpg"
		     }
		 },
		 onLoad() {
			/* this.commonData = this.commonData; */
			console.log( "onLoad"  , this.commonData);
		 },
		methods: {
			appLogin(){
				
		
                let me = this;
			    uni.getProvider({
			        service: 'oauth',
			        success: (res)=>{
			            console.log(res.provider);
			                uni.login({
			                    provider: 'weixin',
			                    success: (loginRes) =>{
			                        console.log('-------获取openid(unionid)-----');
			                        /* console.log(JSON.stringify(loginRes)); */
			                        // 获取用户信息
			                        uni.getUserInfo({
			                            provider: 'weixin',
			                            success: (infoRes)=> {
											console.log('用户：', infoRes);
											/* me.commonData.setData_user(infoRes.userInfo); */
											uni.setStorage({//将用户信息保存在本地
											     key: 'uerInfo',
											     data: infoRes.userInfo
											})
											
											uni.setStorage({//是否第一次登陆
											     key: 'isOnceShow',
											     data: true
											})
											uni.navigateBack();

											uni.$emit('appLogin',infoRes.userInfo);
			                            }
			                        });
			                    },
			                });
			        }
			    });
			},
			//第二种授权登录
			appOAuthLogin(e) {
			  var me = this;
			  // 1 获取用户的登录类型
			  var logintype = e.currentTarget.dataset.logintype;
			  // 2 授权登录，弹出授权窗口
			  uni.login({
			    provider: logintype,
			    success(loginRes) {
			      // 3 授权登录成功以后，获取用户的信息
			      uni.getUserInfo({
			        provider: logintype,
			        success(info) {
			          var userInfo = info.userInfo;
			          var face = "";
			          var nickname = "";
			          var openIdOrUid = "";
			          if (logintype == "weixin") {
			            openIdOrUid = userInfo.openId;
			            face = userInfo.avatarUrl;
			            nickname = userInfo.nickName;
			          } else if (logintype == "qq") {
			            openIdOrUid = userInfo.openId;
			            face = userInfo.figureurl_qq_2;
			            nickname = userInfo.nickname;
			          } else if (logintype == "sinaweibo") {
			            openIdOrUid = userInfo.id;
			            face = userInfo.avatar_large;
			            nickname = userInfo.nickname;
			          }
			          
			          // 4 调用开发者后台，执行一键注册或登录
			          uni.request({
			            url: me.serverUrl + "/appUnionLogin/" + logintype,
			            data: {
			              "openIdOrUid": openIdOrUid,
			              "nickname": nickname,
			              "face": face
			            },
			            method: "POST",
			            success(result) {
			              if (result.data.status == 200) {
			                var userInfo = result.data.data;
			                // 5 保存用户信息到全局的缓存中
			                uni.setStorageSync("globalUser", userInfo);
			                // 6 切换页面跳转，使用tab切换的api
			                uni.switchTab({
			                  url: "../me/me"
			                });
			              }
			            }
			          })
			        }
			      })
			    }
			  });
			},
			//第三种测试方式
			test(){
				uni.getProvider({
				  service: 'oauth',
				  success: function (res) {
				    console.log(res.provider);
				  }
				});
			}

			
		}

	}
</script>

<style lang="scss">
	
	.appLogin{
		background-color:$uni-btn-color;
		margin: 20rpx;
		padding: 0px 1
		0px 0px 10px; 
		width: 30%;
		font-size: 25upx;
		border-radius: 5px;
        -webkit-flex: 1;
		flex: 1;
		height: 200px;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-align-items: center;
		 align-items: center;
		/* line-height: 50upx; */
	}
	.appLogin image{
		width: 50upx;
		height: 50upx;
	}
		.view_back{
			height:650px;
			width: 100%;
		}

</style>
