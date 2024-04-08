// 全局ElMessage, ElNotification 样式
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/notification/style/css'
// element-plus 主题色css变量
import 'element-plus/theme-chalk/dark/css-vars.css'
// 引入css入口文件
import 'common/src/assets/css/index.less'
// 引入iconfont
import 'common/src/utils/initImportIcons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import microApp from '@micro-zoe/micro-app'
microApp.start()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
