<template>
  <div>
    <h1 @click="addDialogVisible = true">统计后台</h1>
    <el-dialog
      v-model="addDialogVisible"
      title="新增"
      :append-to-body="true"
      align-center
      :close-on-click-modal="false">
      <el-form label-width="auto" label-position="left">
        <el-form-item label="用户名" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="用户名" required>
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="用户名xxxxxxx">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-select></el-select>
        </el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
        <el-form-item label="用户名"></el-form-item>
      </el-form>
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
