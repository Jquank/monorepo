<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import logoUrl from '@/assets/images/logo.png'
import logoErrorUrl from '@/assets/images/avatar-error.png'
import CircleTabs from 'common/components/circle-tabs/index.vue'
import CircleTag from 'common/components/circle-tabs/CircleTag.vue'
import { useReactiveData } from '@/utils/reactive'

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
    if (routeItem) {
      activeName.value = routeItem.name
    }
  }
})
const tabChange = (name: number) => {
  const item = tabPanes.find((item) => item.name === name)
  router.push({ name: item?.routeName || 'main' })
}
const loginOut = () => {
  localStorage.setItem('token', '')
  router.push({ name: 'login' })
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
            <CircleTag style="margin-right: 40px" :active="index === activeName - 1" width="96px" :showClose="false"
              bgColor="transparent" color="rgba(255,255,255,0.85)">
              <span>{{ item.label }}</span>
            </CircleTag>
          </template>
        </el-tab-pane>
      </CircleTabs>
    </nav>
    <div class="user">
      <div class="bell mr-20">
        <el-badge :max="99" style="height: 24px">
          <SvgIcon icon="bell" :size="24" color="#fff"></SvgIcon>
        </el-badge>
      </div>
      <div class="avatar">
        <el-dropdown trigger="click">
          <el-avatar :size="32" :src="useReactiveData.userInfo.avatar">
            <img :src="logoErrorUrl" />
          </el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <SvgIcon icon="user" class="mr-6"></SvgIcon><span>个人中心</span>
              </el-dropdown-item>
              <el-dropdown-item @click="loginOut">
                <SvgIcon icon="exit" class="mr-6"></SvgIcon><span>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
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

    .avatar,
    .bell {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      cursor: pointer;
    }

    .avatar {
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .header-nav {
    flex: 1;
    margin-left: 20px;
  }
}
</style>
