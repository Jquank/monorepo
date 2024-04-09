<template>
  <el-tabs v-model="activeName" class="nh-circle-tabs" @tab-change="tabChange">
    <el-tab-pane :label="props.title" name="_title" v-if="props.title" disabled class="title-pane"></el-tab-pane>
    <slot></slot>
    <el-tab-pane v-if="props.showAddBtn" name="_addbtn" class="addbtn-pane" disabled>
      <template #label>
        <!-- <el-button round :icon="Plus" @click="add">新增</el-button> -->
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  // import { Plus } from '@element-plus/icons-vue'
  const props = defineProps({
    modelValue: Number,
    title: String,
    showAddBtn: {
      type: Boolean,
      default: true
    }
  })
  const emits = defineEmits(['add', 'update:modelValue', 'tab-change'])
  const activeName = ref(props.modelValue || 0)
  watch(
    () => props.modelValue,
    (val) => {
      // 此处nextTick无效
      setTimeout(() => {
        activeName.value = val!
      }, 20)
    }
  )
  const tabChange = (val: number | string) => {
    emits('update:modelValue', val)
    emits('tab-change', val)
  }
  const add = () => {
    emits('add')
  }
</script>

<style lang="less">
  .nh-circle-tabs {
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-tabs__nav .el-tabs__active-bar {
      width: 0;
      height: 0;
    }
    .el-tabs__header.is-top {
      display: inline-block;
      margin: 0;
    }
    .el-tabs__nav-wrap.is-top::after {
      width: 0;
      height: 0;
    }
    .el-tabs__item {
      padding: 0;
    }
    .el-tabs__nav .el-tabs__item {
      color: inherit;
    }
    .el-tabs__content {
      .el-tab-pane {
        // flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
    #tab-_title {
      font-size: 14px;
      font-weight: 600;
      color: var(--el-text-color-regular);
      margin-right: 18px;
      cursor: default;
    }
    #tab-_addbtn {
      font-size: 14px;
      cursor: default;
      pointer-events: inherit;
    }
  }
</style>
