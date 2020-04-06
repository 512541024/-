<template>
  <div class="box">
    <img class="video" :src="constants.image1" />
    <div class="side">
      <span class="title">标题</span>
      <span class="desc">描述行</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HmRowVideoCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-row-video-card'
    },
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      constants: {
        image1:
          'http://hm-static-img.oss-cn-beijing.aliyuncs.com/uniapp/hm-components/video.png'
      }
    };
  },
  methods: {}
};
</script>
<style>
@import './index.css';
</style>
