import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import '@/assets/compiled/css/app.css'
import '@/assets/compiled/css/app-dark.css'
import '@/assets/compiled/css/auth.css'
import '@/assets/compiled/css/iconly.css'
import '@/assets/compiled/css/callout.css'

import '@/assets/static/js/initTheme.js'
import '@/assets/static/js/components/dark.js'

import '@/assets/main/styles/datatable.css';

import App from './App.vue'
import router from './router'

import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import VueApexCharts from 'vue3-apexcharts'

import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

const globalOptions = {
  mode: 'auto'
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(VueSweetalert2)
app.use(VueTelInput, globalOptions)

app.mount('#app')
