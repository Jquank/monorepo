<template>
  <div class="circle-tag" :class="{ 'tag-active': props.active, 'tag-color': props.color }">
    <slot></slot>
    <!-- <el-icon v-show="showClose" @click="removeTag" class="close"
      ><Close
    /></el-icon> -->
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    color: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    }
  })
  const emit = defineEmits(['clear'])
  const removeTag = (e: Event) => {
    e.stopPropagation()
    emit('clear')
  }
</script>

<style lang="less" scoped>
  .circle-tag + .circle-tag {
    margin-left: 16px;
  }
  .circle-tag {
    width: v-bind('props.width');
    background-color: v-bind('props.bgColor');
    color: var(--el-text-color-primary);
    display: inline-flex;
    height: 32px;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    // border: 1px solid #dcdfe6;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0 12px;
    .close {
      padding-left: 10px;
      box-sizing: content-box;
      cursor: pointer;
    }
  }
  .tag-active {
    background: rgba(255, 255, 255, 0.18);
    border: none;
    font-weight: 550;
  }
  .tag-color {
    color: v-bind('props.color');
  }
</style>
