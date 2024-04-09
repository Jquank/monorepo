import 'common/utils/initImport'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgIcon from 'common/components/svg-icon/index.vue'

import microApp from '@micro-zoe/micro-app'
microApp.start()

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
