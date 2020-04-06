<template>
  <div class="test-component">
    <hm-row-video-card class="hm-row-video-card" :options="item" v-for="item in optionList"></hm-row-video-card>
  </div>
</template>

<script>
import HmRowVideoCard from '@/components/hm-row-video-card/index.vue'

export default {
 props: {
	 optionList:{
		 type:Array,
		 default:function(){
			 return [{
			 		options: {
			 		  constants: {
			 		      image1:
			 		        'http://hm-static-img.oss-cn-beijing.aliyuncs.com/uniapp/hm-components/video.png'
			 		    }
			 		},
					},
					{
							options: {
							  constants: {
							      image1:
							        'http://hm-static-img.oss-cn-beijing.aliyuncs.com/uniapp/hm-components/video.png'
							    }
							},
							
							
							
					},
			  ]
		 } 
	 }
 },	
 components: {HmRowVideoCard},
  data() {
    return {
      options: {
        constants: {
            image1:
              'http://hm-static-img.oss-cn-beijing.aliyuncs.com/uniapp/hm-components/video.png'
          }
      }
    };
  },
  methods: {

  }
};
</script>
<style>
	.hm-row-video-card{
		margin-bottom: 15px;
	}
</style>