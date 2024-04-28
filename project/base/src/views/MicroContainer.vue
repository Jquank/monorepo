<template>
  <micro-app :name="data.name" :url="data.url" iframe style="height: 100%"
    :class="data.name !== 'data-admin' ? 'micro-child' : ''"></micro-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const getUrl = (name: string) => {
  if (import.meta.env.MODE === 'development') {
    if (name === 'data') {
      return import.meta.env['VITE_URL_' + name!.toUpperCase()]
    } else {
      return 'http://' + location.hostname + ':' + import.meta.env['VITE_URL_' + name!.toUpperCase()].slice(-5, -1)
    }

  } else {
    return import.meta.env['VITE_URL_' + name!.toUpperCase()]
  }
}
const data = computed(() => {
  const name = route.name as string
  return {
    name: name + '-admin',
    url: getUrl(name)
  }
})
</script>
