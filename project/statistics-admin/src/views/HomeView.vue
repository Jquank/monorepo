<template>
  <div class="portrait-list-container">
    <div class="portrait-list">
      <div class="portrait-list-box">
        <div class="list-main">
          <!-- 页头 -->
          <ListHeader
            title="肖像列表"
            @headerDelete="deleteItem()"
            @headerAdd=";(editRowId = ''), (addDialogVisible = true)"
            :delBtnDisabled="!multipleTableRef.length"></ListHeader>
          <!-- 搜索 -->
          <div class="search-bar">
            <el-form @submit.prevent :inline="true" :model="searchModel">
              <el-form-item class="form-item search-form-item">
                <el-input
                  v-model="searchModel.keyword"
                  clearable
                  @clear="handleSearch"
                  @keydown.enter="handleSearch"
                  placeholder="请输入肖像名称"
                  style="width: 210px"></el-input>
              </el-form-item>
              <el-form-item class="form-item">
                <el-button @click="handleSearch" type="primary"
                  ><SvgIcon icon="search" class="mr-4"></SvgIcon>搜索</el-button
                >
                <el-button @click="reset"><SvgIcon icon="refresh" class="mr-4"></SvgIcon>重置</el-button>
              </el-form-item>
            </el-form>
            <div class="search-right">
              <el-dropdown trigger="click">
                <el-link :underline="false">
                  {{ activeSortName
                  }}<SvgIcon
                    icon="arrow-down"
                    :size="16"
                    style="position: relative; top: 2px; padding-left: 3px"></SvgIcon>
                </el-link>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item v-for="item in orderOptions" :key="item.code" @click="sortByCreateTime(item)">{{
                      item.name
                    }}</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-link @click="filterDialogVisible = true" :underline="false" class="ml-20">
                筛选<SvgIcon icon="filter" :size="16" style="position: relative; top: 2px; padding-left: 3px"></SvgIcon>
              </el-link>
            </div>
          </div>
          <!-- table -->
          <div class="table-wrapper">
            <el-table :data="tableData" v-loading="showLoading" height="100%" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55" fixed="left" />
              <el-table-column type="index" label="序号" width="55" />
              <el-table-column prop="name" label="肖像名" min-width="180" show-overflow-tooltip />
              <el-table-column label="图标" min-width="100">
                <template #default="{ row }">
                  <div v-if="row.logoUrl" style="cursor: pointer">
                    <el-image
                      :src="row.logoUrl"
                      style="width: 56px; height: 56px; border-radius: 6px"
                      fit="cover"
                      :preview-src-list="[row.logoUrl]"
                      :preview-teleported="true"></el-image>
                  </div>
                  <div v-else style="width: 56px; height: 56px"></div>
                </template>
              </el-table-column>
              <el-table-column prop="createByName" label="创建人" min-width="80" />
              <el-table-column prop="createTime" label="创建时间" min-width="160" />
              <el-table-column prop="updateByName" label="更新人" min-width="80" />
              <el-table-column prop="updateTime" label="更新时间" min-width="160" />
              <el-table-column label="操作" width="120" fixed="right">
                <template #default="scope">
                  <el-button @click="editItem(scope.row)" type="primary" link>编辑</el-button>
                  <el-button @click="deleteItem(scope.row)" type="danger" link>删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <ListPagination :callback="getTableList" :total="total" :key="pageKey"></ListPagination>
      </div>
    </div>

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
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'

  import { getPortraitListBy, getDictData, deletePortrait } from '@/api/portrait'
  import { ElMessage, ElMessageBox } from 'element-plus'
  const router = useRouter()

  // #region 初始化字典数据
  const orderOptions = ref([])
  const creatorsOptions = ref([])
  const updatersOptions = ref([])
  getDictData().then((res) => {
    if (res.code === 200) {
      orderOptions.value = res.data.orders
      activeSortName.value = orderOptions.value[0].name
      creatorsOptions.value = res.data.creators
      updatersOptions.value = res.data.updaters
    }
  })
  // #endregion

  // #region 列表页逻辑
  const searchModel = reactive({
    keyword: '',
    creators: [],
    updaters: [],
    status: [],
    orders: ['update_time-desc']
  })
  let listParams = {}
  const tableData = ref([])
  const showLoading = ref(false)
  const total = ref(0)
  const pageKey = ref('')
  /** 获取表格数据*/
  const getTableList = (page?: any) => {
    listParams = Object.assign({}, listParams, searchModel, page)
    Object.keys(filterModel).forEach((key) => {
      listParams[key] = filterModel[key]
    })
    showLoading.value = true
    return getPortraitListBy(listParams)
      .then((res) => {
        showLoading.value = false
        tableData.value = res.rows
        total.value = +res.total
      })
      .catch(() => {
        showLoading.value = false
      })
  }
  const refreshTableList = () => {
    pageKey.value = Date.now() + ''
  }
  /** 点击升序降序 */
  const activeSortName = ref('')
  const sortByCreateTime = (item) => {
    activeSortName.value = item.name
    searchModel.orders = [item.code]
    getTableList()
  }
  // #endregion

  // #region 搜索重置按钮
  const handleSearch = () => {
    refreshTableList()
  }
  const reset = () => {
    searchModel.keyword = ''
    filterFormRef.value?.resetFields()
    refreshTableList()
  }
  // #endregion

  // #region 筛选弹窗
  const filterDialogVisible = ref(false)
  const filterModel = reactive({
    creators: [],
    updaters: []
  })
  const filterFormRef = ref()
  /** 重置 */
  const resetFilter = () => {
    filterFormRef.value?.resetFields()
    refreshTableList()
    filterDialogVisible.value = false
  }
  /** 点击确认 */
  const filterConfirm = () => {
    refreshTableList()
    filterDialogVisible.value = false
  }
  // #endregion

  // #region 编辑
  const addDialogVisible = ref(false)
  const editRowId = ref('')
  const editItem = (row) => {
    editRowId.value = row.id
    addDialogVisible.value = true
  }
  const addSuccess = (id) => {
    id ? getTableList() : refreshTableList()
  }
  // #endregion

  // #region 删除
  const multipleTableRef = ref([])
  const handleSelectionChange = (val: any[]) => {
    multipleTableRef.value = val
  }
  const deleteItem = (row) => {
    let ids
    if (row) {
      ids = [row.id]
    } else {
      ids = multipleTableRef.value.map((item) => item.id)
    }
    if (!ids.length) {
      return ElMessage.error('请选择要删除的肖像!')
    }
    ElMessageBox.confirm(`请确认是否删除选中的肖像?`, '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      'close-on-click-modal': false,
      type: 'warning'
    }).then(async () => {
      await deletePortrait(ids.toString())
      pageKey.value = Date.now() + ''
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
  }
  // #endregion
</script>

<style lang="less" scoped>
  .portrait-list-container {
    height: 100%;
    .portrait-list {
      position: relative;
      background: #ffffff;
      box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.04);
      border-radius: 6px 6px 6px 6px;
      padding: 20px;
      height: 100%;
      .portrait-list-box {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        height: 100%;
        .list-main {
          height: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          .search-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            .search-right {
              display: flex;
              align-items: center;
            }
          }
          .form-item {
            margin-bottom: 0;
          }
          .search-form-item {
            margin-right: 12px;
          }
          .table-wrapper {
            height: 0;
            flex: 1;
          }
        }
      }
    }
  }
</style>
