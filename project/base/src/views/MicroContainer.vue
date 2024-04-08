<template>
  <micro-app :name="data.name" :url="data.url" iframe style="height: 100%"></micro-app>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const data = computed(() => {
    const name = route.name as string
    return {
      name: name + '-admin',
      url: import.meta.env['VITE_URL_' + name!.toUpperCase()]
    }
  })
</script>
