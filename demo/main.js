/* eslint-disable */
import Vue from 'vue';
import SmWidgets from '../src/mapboxgl';
import App from './App';

Vue.config.productionTip = false;
Vue.use(SmWidgets,
  //{
  // locale: {
  //   el: {
  //     messagebox: {
  //       confirm: '确定SM',
  //     },
  //   },
  //   layerList: {
  //     title: "MMMMMMMMMMMMM"
  //   }
  // },
  //theme:"dark"
  //}
);

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
});
