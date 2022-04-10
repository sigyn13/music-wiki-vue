import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'normalize.css';
import router from './router';
import './scss/main.scss';

Vue.config.productionTip = false;

const files = require.context('./', true, /\.vue$/i);
files.keys().map((key) => Vue.component(
  key
    .split('/')
    .pop()
    .split('.')[0],
  files(key).default,
));

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
