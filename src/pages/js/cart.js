import { mapActions, mapState, mapWritableState } from "pinia";
import { ProductStore } from "@/stores/ProductStore.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(ProductStore, ["cartlist", "cartCount"]),
    deleteCart() {
      console.log("wjjsdb");
      this.cartlist = [];
      this.cartCount = 0;
    },
  },
  methods: {
    incrementCount(ind) {
   
        this.cartlist[ind].stock++;
      
    },
    decrementCount(index) {
    
        this.cartlist[index].stock--;
      
    },

  },
  created() {},
};
