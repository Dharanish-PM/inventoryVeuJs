import { mapActions,mapState } from "pinia";
import { ProductStore } from "@/stores/ProductStore";

export default{
    data(){
        return{
            categoryId:null,
            categoryName:null,
            productId:null,
            name:null,
            price:0,
            quantity:null, 
        }

    },
    methods:{
        ...mapActions(ProductStore,['addProductStore']),
        addProduct(){
            const payload={
                
                id:this.categoryId,
                name:this.categoryName,
                products:[
                    {
                        id:this.productId,
                        name:this.name,
                        price:this.price,
                        quantity:Number(this.quantity),
                        category:{
                            id:this.categoryId,
                            name:this.categoryName,
                        }

                    }
                ]
            }
            console.log(payload);
            this.addProductStore(payload);
        }

    },



}