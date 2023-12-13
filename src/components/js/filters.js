
import { mapState,mapActions} from 'pinia'
import {ProductStore } from '@/stores/ProductStore.js'
export default{
    data(){
        return{
            categories: [
                'smartphones',
                'laptops',
                'fragrances',
                'skincare',
                'groceries',
                'home-decoration',
              ],
              selectedCategory:"",
        }
    },
    computed:{
        ...mapState(ProductStore,['showAll']),

    },
    methods:{
        ...mapActions(ProductStore,[
            "filterProductStoreByCategory","setAll"
          ]),
        filterProducts(){
               this.filterProductStoreByCategory(this.selectedCategory);
        },
        removeFilters(){
            this.setAll();
        }
       

    },
}