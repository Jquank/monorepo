<template>
  <el-breadcrumb separator="/" class="bread-container" v-if="matchedRouteInfo.length">
    <template v-for="(item, index) in matchedRouteInfo" :key="item.path">
      <el-breadcrumb-item :to="props.breadSuffix.length && index === matchedRouteInfo.length - 1 ? { path: item.path } : undefined">{{
        item.title
      }}</el-breadcrumb-item>
    </template>
    <template v-for="(item, index) in props.breadSuffix" :key="item.name || index">
      <el-breadcrumb-item :to="item.routeName ? { name: item.routeName } : undefined">{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  // const props = defineProps({
  //   breadSuffix: {
  //     type: Array,
  //     default: () => []
  //   }
  // })
  const props = withDefaults(defineProps<{ breadSuffix: { name?: string; routeName?: string }[] }>(), {
    breadSuffix: () => []
  })
  const route = useRoute()
  const router = useRouter()
  const allRoutes = router.getRoutes()

  const matchedRouteInfo = computed(() => {
    const allPathOrder = new Set<string>()
    route.matched.forEach((m) => {
      // 匹配疑似详情路由
      const matches = m.path.match(/\/([^/]+)/g)
      if (matches) {
        const lastReduce = matches.reduce((pre, cur) => {
          if (pre !== '/index') {
            allPathOrder.add(pre)
          }
          return pre + cur
        })
        if (lastReduce !== '/index') {
          allPathOrder.add(lastReduce)
        }
      }
    })
    const result: { title: string; path: string }[] = []
    for (let item of allPathOrder.keys()) {
      const res = allRoutes.find((v) => v.path === item)
      if (res && res.meta && res.meta.title) {
        result.push({
          title: res.meta!.title,
          path: res.path
        })
      }
    }
    return result
  })
</script>

<style lang="less" scoped>
  .bread-container {
    padding-bottom: 18px;
    :deep(.el-breadcrumb__inner.is-link) {
      font-weight: normal;
      // color: var(--el-text-color-regular);
    }
  }
</style>
