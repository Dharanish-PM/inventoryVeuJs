import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/ProductList.vue";
import Cart from "@/pages/Cart.vue";
import Purchase from "@/pages/Purchase.vue"
import UpdateProduct from '@/pages/UpdateProduct.vue'
import AddProduct from '@/pages/AddProduct.vue'
// import { app, pages } from '@/config'
const beauty = {
  template: `<div>User</div>`,
};
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
      name: "cart",
      component: Cart,
      // children:
      // [
      //   {
      //     path:"beauty",
      //     component:beauty
      //   }

      // ]
    },
    {
      path:"/purchase/:id",
      name:"purchase",
      component:Purchase,
    },
    {
      path:"/updateProduct/:id",
      name:"updateProduct",
      component:UpdateProduct,
    },
    {
      path:"/addProduct",
      name:"addProduct",
      component:AddProduct,
    },

  ],
});

export default router;
