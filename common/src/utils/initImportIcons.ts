// init iconfont

if (import.meta.env.MODE !== 'production') {
  import('../assets/icons/iconfont.js')
} else {
  import('//at.alicdn.com/t/c/font_4380660_b9lbte90tyr.js')
}
