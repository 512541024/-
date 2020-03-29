<template>
	<view>
	<!-- 右侧插槽 -->
	<uni-list>
	    <uni-list-item title="头像" :showArrow="false">
	        <template v-slot:right="">
	            <image style="width: 40px;height: 40px;" :src="user.avatarUrl" mode="widthFix"></image>
	        </template>
	    </uni-list-item>
	</uni-list>

	<!-- 一般用法 -->
	<uni-list>
		<uni-list-item title="昵称" :rightText="user.nickName" :show-arrow="false" @click="open"></uni-list-item>
	    <uni-list-item title="微信名" :rightText="user.nickName" :show-arrow="false" ></uni-list-item>
		<uni-list-item title="手机号" :rightText="user.nickName" :show-arrow="false" ></uni-list-item>
		<uni-list-item title="性别" :rightText="user.gender" :show-arrow="false" ></uni-list-item>
		<uni-list-item title="城市" :rightText="user.city" :show-arrow="false" ></uni-list-item>
	    <uni-list-item title="权限" :show-badge="true" badge-text="会员" :show-arrow="false"></uni-list-item>
		
	</uni-list>
	 
	</view>	
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	export default {
	    components: {uniList,uniListItem,uniPopup},
		data() {
			return {
				user:{},
				form:{
					text:"text",
				},
				               formDefinition: {
				                    fields: [
				                        {
				                            label: '姓名', // 表单显示名称
				                            name: 'name', // 每个表单项的唯一标识(不能重复)
				                            type: 'input', // 表单项的类型 这里是输入框
				                            inputType: 'text', // 输入框的类型,有 text number digit textarea
				                            password: false, // 是否为密码输入框
				                            placeholder: '请输入您的姓名', // 提示信息
				                            disabled: false, // 是否禁用
				                            maxLength: -1  // 最大输入长度
				                        },
				                        {
				                            label: '个人简介', // 表单显示名称
				                            name: 'desc', // 每个表单项的唯一标识(不能重复)
				                            type: 'input', // 表单项的类型 这里是输入框
				                            inputType: 'textarea',
				                            password: false,
				                            placeholder: '请输入您的个人简介',
				                            disabled: false,
				                            maxLength: -1
				                        },
				                        {
				                            label: '爱好',
				                            name: 'hobby',
				                            type: 'select', // 表单项的类型 这里是选择类型 使用的是mpvue-picker
				                            disabled: true,
				                            placeholder: '请选择爱好',
				                            picker: { // 这里是mpvuepicker的全部配置,具体使用可参考 https://github.com/zhetengbiji/mpvue-picker
				                                themeColor: '#007AFF',
				                                mode: 'selector',
				                                deepLength: 2,
				                                pickerValueDefault: [0],
				                                pickerValueArray: [
				                                    {
				                                        label: '中国2222',
				                                        value: 1
				                                    },
				                                    {
				                                        label: '俄罗斯2222',
				                                        value: 2
				                                    },
				                                    {
				                                        label: '美国2222',
				                                        value: 3
				                                    },
				                                    {
				                                        label: '日本2222',
				                                        value: 4
				                                    }
				                                ]
				                            }
				                        },
				                        {
				                            label: '生日',
				                            name: 'birthday',
				                            type: 'date', // 表单项的类型 这里是日期选择类型 使用的是原生picker
				                            startDate: '', // 这是日期范围限制
				                            endDate: '', // 这是日期范围限制
				                            disabled: false,
				                            placeholder: '请选择生日'
				                        },
				                        {
				                            label: '是否同意',
				                            name: 'accept',
				                            type: 'switch' // 表单项的类型 这里是开关类型
				                        },
				                        {
				                            label: '是否知道',
				                            name: 'know',
				                            type: 'radio', // 表单项的类型 这里是单选类型
				                            options: [
				                                {
				                                    label: '知道', // 展示的名称
				                                    value: 1 // 表单提交的值
				                                },
				                                {
				                                    label: '不知道',
				                                    value: 2
				                                }
				                            ]
				                        },
				                        {
				                            label: '你的能力',
				                            name: 'capa',
				                            type: 'checkbox', // 表单项的类型 这里是多选框类型
				                            options: [
				                                {
				                                    label: '变成', // 展示的名称
				                                    value: 1  // 表单提交的值
				                                },
				                                {
				                                    label: '游戏',
				                                    value: 2
				                                },
				                                {
				                                    label: '又晕',
				                                    value: 3
				                                },
				                                {
				                                    label: '上述',
				                                    value: 4
				                                }
				                            ]
				                        }
				                    ],
				                    showSubmitBtn: true, // 是否显示提交按钮
				                    showResetBtn: true   // 是否显示重置按钮
				                },
				                // 这里传入的是数据,注意,这些数据都是双向绑定的,也就是说,表单中的任何操作都会及时的映射到这个对象
				                // 如果要实现监控某些数据变化而进行一些操作,可以使用 vue 中的 watch,同时也可以配合computed完成
				                // 各种各样的实时效果
				                data: {
				                    name: '张三', // 注意:这里的对象key要跟表单定义对象中的name属性值一一对应
				                    hobby: {},
				                    birthday: '',
				                    accept: true,
				                    know: 2,
				                    capa: []
				                }
			};
		},
		onLoad(option){
			 this.user = JSON.parse(decodeURIComponent(option.user));
			
		},
		methods:{
			open(e){
				console.log(e)
			       uni.showModal({
			           title: '提示',
			           content: '这是一个模态弹窗',
			           success: function (res) {
			               if (res.confirm) {
			                   console.log('用户点击确定');
			               } else if (res.cancel) {
			                   console.log('用户点击取消');
			               }
			           }
			       });
			      }
		}
		
	}
	
</script>