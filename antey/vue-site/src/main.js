import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './sass/main.sass'
import '../node_modules/bootstrap/js/dist/carousel'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(VueAxios, axios).use(router).mount('#app')
