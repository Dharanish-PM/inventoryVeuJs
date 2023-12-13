import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import Filters from '@/components/Filters.vue'
import Cart from '@/pages/Cart.vue'
// import { app, pages } from '@/config'
const beauty={
  template: `<div>User</div>`,
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "productList",
      component: ProductList,

    },
    {
      path: "/cart",
      name:"cart",
      component: Cart,
      // children:
      // [
      //   {
      //     path:"beauty",
      //     component:beauty
      //   }

      // ]
      
    }
  ]
})

export default router
