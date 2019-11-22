// 路由相关

// 引入要切换的组件
import Index from '../pages/Index'
import About from '../pages/About'
import News from '../pages/News'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import NewsDetails from '../pages/NewsDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProductDetails from '../pages/ProductDetails'

// 制作一个数组，存放对应关系，需要导出
export const routes=[
  {
    path:'/',
    component:Index
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/news',
    component:News
  },
  {
    path:'/product',
    component:Product
  },
  {
    path:'/contact',
    component:Contact
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/news_details',
    component:NewsDetails
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/product_details',
    component:ProductDetails
  }

]