/**
 * ES6的导出  需要
 */
import Vue from "vue"
import VueRouter from 'vue-router'
// 导出路由对象
import { routes } from "./routes"

// 让vue加载，router使用路由
Vue.use(VueRouter)

//实例化让一个路由对象，导出
//实例化时必须传入router:[] ，{}存放对应关系
export const router=new VueRouter({
  // routes:routes   ES6省略
  routes
})
// App.vue加载该路由