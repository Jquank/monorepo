<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <nav class="main-nav">
      <h1>导航组件</h1>
    </nav>
    <div class="main-section">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="less">
  .main-container {
    height: 100%;
    display: flex;
    overflow: hidden;

    .main-nav {
      width: var(--nh-nav-width);
      background-color: red;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .main-section {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      background-color: blue;
    }
  }
</style>
