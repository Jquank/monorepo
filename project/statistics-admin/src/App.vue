<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">首页</RouterLink>
  <RouterLink to="/about">about</RouterLink>
  <RouterView></RouterView>
</template>
