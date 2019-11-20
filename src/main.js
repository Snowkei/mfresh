import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //运行时，系统会自动传递一个函数给render，此函数会赋值给h，然后h(App),使用函数
  render: h => h(App),//挂载App.vue
}).$mount('#app')
