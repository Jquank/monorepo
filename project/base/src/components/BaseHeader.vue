<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import logoUrl from 'common/src/assets/images/logo.png'
  import CircleTabs from 'common/src/components/circle-tabs/index.vue'
  import CircleTag from 'common/src/components/circle-tabs/CircleTag.vue'
  import SvgIcon from 'common/src/components/svg-icon/index.vue'

  const route = useRoute()
  const router = useRouter()

  const tabPanes = [
    { label: '主后台', name: 1, routeName: 'main' },
    { label: '数据后台', name: 2, routeName: 'data' },
    { label: '统计后台', name: 3, routeName: 'statistics' },
    { label: '审核后台', name: 4, routeName: 'audit' }
  ]
  const activeName = ref(1)
  watchEffect(() => {
    if (route.name) {
      const routeItem = tabPanes.find((item) => item.routeName === route.name)
      activeName.value = routeItem?.name || 1
    }
  })
  const tabChange = (name: number) => {
    const item = tabPanes.find((item) => item.name === name)
    console.log(item, 'item')
    router.push({ name: item?.routeName || 'main' })
  }
</script>

<template>
  <header class="base-header">
    <div class="logo">
      <img :src="logoUrl" width="32px" />
      <span class="logo-text">评物后台管理系统</span>
    </div>
    <nav class="header-nav">
      <CircleTabs v-model="activeName" @tab-change="tabChange">
        <el-tab-pane v-for="(item, index) in tabPanes" :key="item.name" :name="item.name">
          <template #label>
            <CircleTag
              :active="index === activeName - 1"
              width="96px"
              class="mr-40"
              :showClose="false"
              bgColor="transparent"
              color="rgba(255,255,255,0.85)">
              <span>{{ item.label }}</span>
            </CircleTag>
          </template>
        </el-tab-pane>
      </CircleTabs>
    </nav>
    <div class="user">
      <SvgIcon icon="user" :size="24"></SvgIcon>
    </div>
  </header>
</template>

<style lang="less" scoped>
  .base-header {
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    background-color: var(--el-color-primary);
    box-shadow: 0px 3px 6px 0px rgba(0, 23, 44, 0.3);
    .logo,
    .user {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo {
      width: 200px;
      .logo-text {
        color: #fff;
        margin-left: 12px;
      }
    }
    .user {
      padding-right: 24px;
    }
    .header-nav {
      flex: 1;
      margin-left: 20px;
    }
  }
</style>
