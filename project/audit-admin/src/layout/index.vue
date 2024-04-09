<script setup lang="ts"></script>

<template>
  <div class="audit-container">
    <nav class="audit-nav">
      <h1>导航组件</h1>
    </nav>
    <div class="audit-section">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="less">
  .audit-container {
    height: 100%;
    display: flex;
    overflow: hidden;

    .audit-nav {
      width: var(--nh-nav-width);
      background-color: red;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .audit-section {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      background-color: blue;
    }
  }
</style>
