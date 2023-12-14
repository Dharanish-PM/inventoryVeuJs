import { mapActions,mapState } from "pinia";
import { ProductStore } from "@/stores/ProductStore";
export default{
    data(){
        return{
            productId:null,
            name:null,
            price:0,
            quantity:null, 
        }

    },
    computed:{
        ...mapState(ProductStore,['updateInitiatedProduct'])


    },
    methods:{
        ...mapActions(ProductStore,['updateProductDetails','getProductByIdUpdate']),
        updateProduct(){
            const payload={
                id: Number(this.productId),
                name:this.name,
                price:this.price,
                quantity:Number(this.quantity) 
            }
            this.updateProductDetails(payload);
        }


    },
    mounted(){
        this.productId = this.$route.params.id;
        this.getProductByIdUpdate(this.productId);
    }
}