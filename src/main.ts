import './assets/main.css'
import './assets/style/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTailwindDatepicker from 'vue-tailwind-datepicker';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTailwindDatepicker);
app.mount('#app')
