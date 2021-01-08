import Vue from 'vue';
import App from './App.vue';
const style = require('./styles/main.css');
console.log(style);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
