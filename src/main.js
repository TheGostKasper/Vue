import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import ProductList from './productList.vue'
import Product from './product.vue'
import Movies from './movies/movies.vue'
import Blogs from './blogs/blog.vue'

Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    redirect:'/products'
  },{
    path:'/products',
    component:ProductList
  },
  {
    path:'/product/:id',
    component:Product
  },
  {
    path:'/movies',
    component:Movies
  },
  {
    path:'/blogs',
    component:Blogs
  }
]

var router=new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
