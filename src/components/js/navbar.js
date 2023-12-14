import { mapActions, mapState, mapWritableState } from "pinia";
import { ProductStore } from "@/stores/ProductStore.js";
export default {
  data() {
    return {
      userSearch: "",
    };
  },
  watch: {
    userSearch(newSearch, old) {
      this.printHello();
    },
  },
  computed: {
    ...mapState(ProductStore, ["cartCount"]),
  },
  methods: {
    getuserData() {
      alert("hy");
    },
    navigateCart() {
      this.$router.push("/cart");
    },
    navigateHome() {
      this.$router.push("/");
    },
    printHello() {
      console.log("Helooo People!!");
    },
  },

  mounted() {
    this.$refs.input.focus();
    console.log(this.$refs.input);
  },
  props: ["text"],
  emits: ["alert-text"],
};
