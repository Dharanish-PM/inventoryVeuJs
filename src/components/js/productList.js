// 20231213111633
// https://dummyjson.com/products

import { mapActions,mapState,mapWritableState } from 'pinia'
import {ProductStore } from '@/stores/ProductStore.js'
export default {
    data(){
        return {

       

        }
    },
    computed:{
      ...mapState(ProductStore,['products'])
    },
    methods:{
      ...mapActions(ProductStore,[
        "addToCartStore"
      ]),

      incrementCount(ind){
        this.products[ind].stock++;
      },
      decrementCount(index){
        this.products[index].stock--;
      },

      addToCart(product){
          this.addToCartStore(product);
      }

    },
    created(){

  
    }
   
}




