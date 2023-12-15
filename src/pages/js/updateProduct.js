import { mapActions,mapState } from "pinia";
import { ProductStore } from "@/stores/ProductStore";
export default{
    data(){
        return{
            productId:null,
            name:null,
            price:null,
            quantity:null, 
        }

    },
    computed:{
        ...mapState(ProductStore,['updateInitiatedProduct'])

    },
    methods:{
        ...mapActions(ProductStore,['updateProductDetails','getProductByIdUpdate']),
        
        onSuccess(){
            alert("Product is updated!!")
            this.$router.push("/");

        },

        onFailure(){
            alert("server error")
            this.$router.push("/");
        
        },
      

        updateProduct(){
            const payload={
                id: Number(this.productId),
                name:this.name,
                price:this.price,
                quantity:Number(this.quantity) 
            }
            const actions={
                failure: this.onFailure,
                success: this.onSuccess
            }

            if(this.name!=='' && this.price>0 && this.quantity>0){
                console.log("yes");
                this.updateProductDetails(payload,actions);
            }
            else{
                alert("Enter all fields");
            }

        }




    },
    mounted(){
        this.productId = this.$route.params.id;
        this.getProductByIdUpdate(this.productId);
    }
}