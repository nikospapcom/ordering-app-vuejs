import Vue from 'vue';
import App from '@/app';
import router from './router';
import './styles/index.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
