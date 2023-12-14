import { mapActions, mapState, mapWritableState } from "pinia";
import { ProductStore } from "@/stores/ProductStore.js";
import img from "@/assets/images/poster.jpeg"
export default {
  data() {
    return {
      loading:false,
      img,
      isHovered: false
    };
  },
  computed: {
    ...mapState(ProductStore, ["productsList", "filteredProductsList", "showAll"]),
  },
  methods: {
    ...mapActions(ProductStore, ["addToCartStore",'getAllProducts']),
    incrementCount(ind, visibleAll) {
      if (visibleAll === true) {
        this.productsList[ind].quantity++;
      } else {
        this.filteredProductsList[ind].quantity++;
      }
    },
    decrementCount(index, visibleAll) {
      if (visibleAll === true) {
        this.productsList[index].quantity--;
      } else {
        this.filteredProductsList[index].quantity--;
      }
    },
    addToCart(product) {
      this.addToCartStore(product);
    },
    handleMouseOver(item) {
      item.isHovered = true;
    },
    handleMouseOut(item) {
      item.isHovered = false;
    },

    navigatePurchase(id){
      this.$router.push({name:'purchase',params: { id }});
    },
    navigateUpdateProduct(id){
      console.log(id);
     this.$router.push({name:'updateProduct',params: { id }});

    },

  },
  created() {
    // ProductStore().copyState();
    // this.loading=true;
      // setTimeout(()=>{
      //   this.getAllProducts(
      //     {success:this.onSucces,failure:this.onFailure}
      //   );
      // },2000);

      this.getAllProducts();
    
  },
};
