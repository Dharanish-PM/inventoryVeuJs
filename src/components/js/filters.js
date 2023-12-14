import { mapState, mapActions } from "pinia";
import { ProductStore } from "@/stores/ProductStore.js";
export default {
  data() {
    return {
      categories: [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
      ],
      selectedCategory: [],
    };
  },
  watch: {
    //as radio button is updating in second click, used watchers
    selectedCategory(newCategory, oldCategory) {
      this.filterProductStoreByCategory(newCategory);
    },
  },
  computed: {
    ...mapState(ProductStore, ["showAll"]),
  },
  methods: {
    ...mapActions(ProductStore, ["filterProductStoreByCategory", "setAll"]),
    removeFilters() {
      this.setAll();
    },
  },
};
