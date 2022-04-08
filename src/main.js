import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'normalize.css';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
  render: (h) => h(App),
}).$mount('#app');
