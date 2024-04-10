<template>
  <el-pagination
    v-model:current-page="page.pageNum"
    v-model:page-size="page.pageSize"
    :page-sizes="[10, 20, 30, 40, 50, 100]"
    :layout="layout"
    :total="props.total"
    @size-change="sizeChange"
    @current-change="currentChange" />
</template>

<script setup lang="ts">
  import { ref, reactive, useAttrs, watchEffect, onMounted, onUnmounted } from 'vue'
  import { debounce } from 'lodash-es'

  const props = defineProps({
    callback: {
      type: Function,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  })
  const attrs = useAttrs()
  const page = reactive({
    pageNum: 1,
    pageSize: 10
  })
  const layoutPreset = 'total, sizes, prev, pager, next, jumper'
  let layout = ref(layoutPreset)

  watchEffect(() => {
    let pageSizes = attrs['page-sizes']
    if (pageSizes) {
      page.pageSize = pageSizes[0]
    }
    layout.value = (attrs.layout as string) || layoutPreset
  })
  const sizeChange = () => {
    page.pageNum = 1
    props.callback(page)
  }
  const currentChange = () => {
    props.callback(page)
  }
  props.callback(page)
  const initLayout = debounce(() => {
    if (document.documentElement.clientWidth < 1050) {
      layout.value = layout.value
        .split(',')
        .filter((str) => !['total', 'sizes', 'jumper'].includes(str.trim()))
        .join(',')
    } else {
      layout.value = layoutPreset
    }
  }, 100)
  onMounted(() => {
    initLayout()
    window.addEventListener('resize', initLayout)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', initLayout)
  })
</script>

<style lang="less" scoped>
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    padding: 20px 10px 0;
  }
</style>
