import { createApp } from 'vue'
import App from './App.vue'

import i18n from './lang.js';
import router from './router.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../public/css/homepage.css';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#app');
