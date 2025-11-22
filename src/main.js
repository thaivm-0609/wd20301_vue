import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import router from './router'; //cài đặt vue-router

createApp(App).use(router).mount('#app')
