<script setup lang="ts"></script>

<template>
  <div class="statistics-container">
    <nav class="statistics-nav">
      <h1>导航组件</h1>
    </nav>
    <div class="statistics-section">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="less">
  .statistics-container {
    height: 100%;
    display: flex;
    overflow: hidden;

    .statistics-nav {
      width: var(--nh-nav-width);
      background-color: red;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .statistics-section {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      background-color: blue;
    }
  }
</style>
