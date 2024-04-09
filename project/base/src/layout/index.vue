<script setup lang="ts">
  import BaseHeader from '../components/BaseHeader.vue'
</script>

<template>
  <div class="base-container">
    <BaseHeader></BaseHeader>
    <div class="base-main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="less">
  .base-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .base-main {
      flex: 1;
      height: 0;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
