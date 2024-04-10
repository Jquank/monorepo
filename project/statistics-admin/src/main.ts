import 'common/utils/initImport'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgIcon from 'common/components/svg-icon/index.vue'
import ListPagination from 'common/components/list/ListPagination.vue'
import ListHeader from 'common/components/list/ListHeader.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.component('ListHeader', ListHeader)
app.component('ListPagination', ListPagination)
app.use(createPinia())
app.use(router)

app.mount('#app')
