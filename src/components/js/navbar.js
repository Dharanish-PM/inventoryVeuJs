import { mapActions,mapState,mapWritableState } from 'pinia'
import {ProductStore } from '@/stores/ProductStore.js'
export default {
    data(){
        return {
            userSearch:""

        }

        
    },
    computed:{
        ...mapState(ProductStore,['cartCount']),
    },
    methods:{
    
        getuserData(){
            alert("hy")
        },
        navigateCart(){
            this.$router.push("/cart")
        },
        navigateHome(){
            this.$router.push("/")
        }


    },
    mounted(){
        console.log(this.$refs.input);

    },
    props:['text'],
    emits:['alert-text']
}