<template>
  <header class="list-header">
    <span class="list-header-title">{{ props.title }}</span>

    <div class="right">
      <el-button v-if="showAddBtn" type="primary" plain @click="emit('headerAdd')">
        <SvgIcon icon="plus" class="mr-4"></SvgIcon>新增
      </el-button>
      <el-button v-if="showDeleteBtn" :disabled="props.delBtnDisabled" @click="emit('headerDelete')" type="danger" plain
        ><SvgIcon icon="delete" class="mr-4"></SvgIcon>删除</el-button
      >
      <slot name="extraBtns"></slot>
    </div>
  </header>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    showAddBtn: {
      type: Boolean,
      default: true
    },
    showDeleteBtn: {
      type: Boolean,
      default: true
    },
    delBtnDisabled: {
      type: Boolean,
      default: true
    }
  })

  const emit = defineEmits(['headerAdd', 'headerDelete'])
</script>

<style lang="less" scoped>
  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 18px;
    .list-header-title {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }
  }
</style>
