<template>
  <el-scrollbar>
    <el-menu class="menu-box-el" router :default-active="$route.meta.activeMenu || $route.path">
      <MenuTree :menuData="props.menuData"></MenuTree>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
  import MenuTree from './MenuTree.vue'
  import type { RouteRecordRaw } from 'vue-router'
  const props = withDefaults(
    defineProps<{
      menuData: RouteRecordRaw[]
    }>(),
    {
      menuData: () => []
    }
  )
</script>

<style lang="less">
  .menu-box-el {
    &.el-menu {
      width: 100%;
      min-height: 100%;
      .el-menu-item,
      .el-sub-menu {
        .svg-icon {
          margin-right: 5px;
          margin-top: -2px;
        }
      }
    }
    &.el-menu--collapse {
      width: 50px;
      .el-menu-item,
      .el-sub-menu {
        .svg-icon {
          width: 20px;
          height: 20px;
          margin: 0;
        }
      }
    }
    .el-sub-menu.is-active > .el-sub-menu__title {
      &,
      & > span {
        color: var(--el-color-primary);
        font-weight: 550;
      }
    }
    .el-menu-item.is-active {
      &,
      & > span {
        color: var(--el-color-primary);
        font-weight: 550;
      }
    }
    .el-sub-menu__title,
    .el-menu-item {
      &:hover {
        background-color: unset;
      }
    }

    &.el-menu,
    .el-menu.el-menu--inline {
      border: none;
    }
    /* 设置menu不同层级的缩进 */
    @el-menu-deep: 1, 2, 3, 4;
    each(@el-menu-deep, {
      .el-menu-item-deep@{value},.el-sub-menu-deep@{value}>.el-sub-menu__title {
        padding-left: @value*15px + if((@value > 1), 5px, 0px) !important;
      }
    });
  }

  div[id^='el-popper-container-'] .self-el-popper {
    border: none;
    .el-menu {
      padding: 0;
      border: none;
      .el-menu-item:hover {
        background-color: unset;
      }
    }
  }
</style>
