<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';


const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})


</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <!-- 销毁重建路由来加载数据，缺点是所有数据都会在加载一遍 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <LayoutFooter />
</template>
