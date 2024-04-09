// init import

// element-plus 主题色css变量
import 'element-plus/theme-chalk/dark/css-vars.css'
// 全局ElMessage, ElNotification 样式
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/notification/style/css'

import '../assets/css/index.less'

if (import.meta.env.MODE !== 'production') {
  import('../assets/icons/iconfont.js')
} else {
  import('//at.alicdn.com/t/c/font_4380660_b9lbte90tyr.js')
}
