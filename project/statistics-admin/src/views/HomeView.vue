<template>
  <div>
    <h1 @click="addDialogVisible = true">统计后台</h1>
    <el-dialog
      v-model="addDialogVisible"
      title="新增"
      :append-to-body="true"
      align-center
      :close-on-click-modal="false"
      modal-class="_dialog-large">
      <template #footer>
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const addDialogVisible = ref(false)
</script>
