import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import vant from './assets/js/vant_import_plugin'

import 'vant/lib/index.css';
import './assets/css/index.css'

const app = createApp(App)

app.use(store)
app.use(vant)
app.mount('#app')