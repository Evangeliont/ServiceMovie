import { createPinia } from 'pinia';
import { createApp } from 'vue'
import './assets/scss/main.scss';
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');


