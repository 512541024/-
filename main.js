import Vue from 'vue'
import App from './App'

import data from './common/common.js'
import './common/iconfont.css' 
import lodash from 'lodash' //导入lodash插件




Vue.config.productionTip = false
Vue.prototype.commonData = data; 
Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';
Vue.prototype.App_title = "天下菜系"; //标题的名称

Vue.prototype.$lodash = lodash;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
