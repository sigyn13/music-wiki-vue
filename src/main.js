import Vue from 'vue';
import VueSecureHTML from 'vue-html-secure';
import App from './App.vue';
import store from './store';
import 'normalize.css';
import router from './router';
import './scss/main.scss';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;
Vue.use(VueSecureHTML);
Vue.prototype.$safeHTML = VueSecureHTML.safeHTML;

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
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
