<template>
  <el-config-provider :z-index="3000" :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<script lang="ts" setup>
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  // import en from 'element-plus/dist/locale/en.mjs'
</script>
