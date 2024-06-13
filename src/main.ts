import App from "./App.vue";
import { createApp } from 'vue'

import Navigation from '@/components/Navigation/index.vue'
import Sidebar from '@/components/Sidebar/index.vue'

const app = createApp(App)
import router from './router/index';
app.use(router)

// 注册全局组件
app.component('Navigation', Navigation);
app.component('Sidebar', Sidebar)


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

app.mount("#app");