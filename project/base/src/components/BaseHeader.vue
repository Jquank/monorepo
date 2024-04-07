<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="base-header">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
</template>

<style lang="less" scoped>
.base-header {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: red;
}
</style>
