// 20231213111633
// https://dummyjson.com/products

import { mapActions, mapState, mapWritableState } from "pinia";
import { ProductStore } from "@/stores/ProductStore.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(ProductStore, ["products", "filteredProductsList", "showAll"]),
  },
  methods: {
    ...mapActions(ProductStore, ["addToCartStore"]),
    incrementCount(ind, visibleAll) {
      if (visibleAll === true) {
        this.products[ind].stock++;
      } else {
        this.filteredProductsList[ind].stock++;
      }
    },
    decrementCount(index, visibleAll) {
      if (visibleAll === true) {
        this.products[index].stock--;
      } else {
        this.filteredProductsList[index].stock--;
      }
    },
    addToCart(product) {
      this.addToCartStore(product);
    },
  },
  created() {
    ProductStore().copyState();
  },
};
