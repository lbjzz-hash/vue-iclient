/* eslint-disable */
import Vue from 'vue';
import SmComponents from '../src/mapboxgl';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(SmComponents,
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
  render: (h) => h(App)
}).$mount('#app');