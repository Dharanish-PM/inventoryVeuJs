
import { mapActions,mapState } from "pinia";
import { ProductStore } from "@/stores/ProductStore";
export default {
    data(){
        return{
            productId:null,
            customerId:1,
            inputQuantity:0
        }
    },
    computed:{
        ...mapState(ProductStore,['purchasedProduct'])

    },
   
    methods:{
        ...mapActions(ProductStore,['purchaseProduct','getProductById']),

        initiatePurchase(){
            const payload={
                customerId: this.customerId,
                productId: Number(this.productId),
                productQuantity:Number(this.inputQuantity) 
            }
            this.purchaseProduct(payload);
        }
    },

    mounted(){
        this.productId = this.$route.params.id;
        this.getProductById(this.productId);
    }
    
  };