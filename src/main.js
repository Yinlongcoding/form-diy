import Vue from 'vue'
import App from './views/index/Home'
import router from '@/router'
import './styles/index.scss'
import '@/icons';
import axios from 'axios'
import Tinymce from '@/components/tinymce/index.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component('tinymce', Tinymce)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
