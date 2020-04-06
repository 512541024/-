//用户信息
export default {
    data:{
		user:{}
    },
    setData_user(user){
        this.data.user = Object.assign({},this.data.user,user) 
    },
	
	getUser(url){
		    let usnerinfo = uni.getStorageSync('uerInfo');
			if(!usnerinfo){
				uni.showModal({
				    title: this.App_title,
				    content: "您还没有登陆，需要登陆吗？ ",
				    success: function (res) {
				        if(res.confirm){
				            uni.navigateTo({
				            	url:url
				            })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    },
				});
				return false
			}
			return usnerinfo
	}

}