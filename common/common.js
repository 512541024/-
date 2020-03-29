//用户信息
export default {
    data:{
		user:{}
    },
    setData_user(user){
        this.data.user = Object.assign({},this.data.user,user) 
    }
}