import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import 'dragula/dist/dragula.css'

// @ts-ignore
import { Vue2Dragula } from "vue2-dragula"

var dragulaOptions = {
  // @ts-ignore
  isContainer: function (el) {
    console.log('isContainer');
    return false; // only elements in drake.containers will be taken into account
  },
  // @ts-ignore
  moves: function (el, source, handle, sibling) {
    console.log('movingg');
    return true; // elements are always draggable by default
  },
  // @ts-ignore
  accepts: function (el, target, source, sibling) {
    console.log('accepts');
    return true; // elements can be dropped in any of the `containers` by default
  },
  // @ts-ignore
  invalid: function (el, handle) {
    console.log('invalid');
    return false; // don't prevent any drags from initiating by default
  },
  direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
  copy: false,
  logging: {
    service: true // to only log methods in service (DragulaService)
  }
}

Vue.use(Vue2Dragula, dragulaOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
