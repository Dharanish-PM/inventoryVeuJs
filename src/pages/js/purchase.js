
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

        onSuccess(){
            alert("Thanks For Purchasing!!")
            this.$router.push("/");

        },

        onFailure(){
            alert("server error")
        
        },

        initiatePurchase(){
            const payload={
                customerId: this.customerId,
                productId: Number(this.productId),
                productQuantity:Number(this.inputQuantity) ,
            }
            const actions={
                failure: this.onFailure,
                success: this.onSuccess
            }

            this.purchaseProduct(payload,actions);
        }
    },

    mounted(){
        this.productId = this.$route.params.id;
        this.getProductById(this.productId);
    }
    
  };