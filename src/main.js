// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App';
import router from './router';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAQr1TWMiJXF572V_hHO9sRvQDpEW2Jwq0',
    libraries: 'places',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

export { app };
