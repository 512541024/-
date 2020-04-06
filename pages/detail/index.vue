<template>
  <section class="Index-Page">
    <s-tabs :effect="false" v-model="activeTab" @change="change" :nav-per-view="5">
      <s-tab title="<span>1</span>">1</s-tab>
      <s-tab title="Tab2">2</s-tab>
      <s-tab title="Tab3">3</s-tab>
      <s-tab title="Tab4">4</s-tab>
      <s-tab title="Tab5">5</s-tab>
      <s-tab title="Tab6">6</s-tab>
    </s-tabs>
  </section>
</template>

<script>
import sTabs from '@/components/s-tabs';
import sTab from '@/components/s-tab';

export default {
  components: {
    sTabs,
    sTab
  },
  data () {
    return {
      activeTab: 0
    };
  },
  methods: {
    change (index) {
      console.log(index);
    }
  }
};
</script>

<style lang="scss">
.Index-Page {
  .s-tab-wrap {
    height: 600rpx;
    padding: 40rpx;
    font-size: 28rpx;
  }
}
</style>
