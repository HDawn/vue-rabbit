<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomePanel from './components/HomePanel.vue';
import HomeProduct from './components/HomeProduct.vue';
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
    <div>我是新鲜好物的插槽部分</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="新鲜好物 好多商品">
    <div>我是新鲜好物的插槽部分</div>
  </HomePanel>
</template>
