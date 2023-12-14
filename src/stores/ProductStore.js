import { defineStore } from "pinia";
import TodoService from "../services/service";

export const ProductStore = defineStore("productList", {
  state: () => ({
    productsList: {},
    cartlist: [],
    cartCount: 0,
    filteredProductsList: [],
    showAll: true,
    purchasedProduct: "",
    updateInitiatedProduct: "",
  }),
  actions: {
    addToCartStore(product) {
      if (!this.cartlist.includes(product)) {
        // const found = this.cartlist.find((element) => element === product);
        this.cartlist.push(product);
        this.cartCount = this.cartlist.length;
      } else {
        alert("Already in cart");
      }
    },
    filterProductStoreByCategory(category) {
      // this.filteredProductsList = this.products.filter(
      //   (product) => product.category === category
      // );
      this.filteredProductsList = [];
      for (var cat of category) {
        for (var prod of this.productsList) {
          if (prod.category === cat) {
            this.filteredProductsList.push(prod);
          }
        }
        console.log(this.filteredProductsList);
      }
      this.showAll = false;
    },
    copyState() {
      this.filteredProductsList = JSON.parse(JSON.stringify(this.products));
    },
    setAll() {
      this.showAll = true;
    },

    async getAllProducts() {
      const segregatedData = [];
      try {
        const response = await TodoService.getAllProducts("/getAllProducts");
        if (response.status === 404) {
          throw new Error("Page not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        data.forEach((category) => {
          const categoryName = category.name;

          category.products.forEach((product) => {
            // Create a new product object with the category key
            const productWithCategory = { ...product, category: categoryName };
            segregatedData.push(productWithCategory);
          });
        });
        this.productsList = segregatedData;
        this.filteredProductsList = segregatedData;
        console.log(segregatedData);
      } catch (error) {
        console.error(error);
      }
    },

    async getProductById(id) {
      try {
        const url = `/getProductById/${id}`;
        const response = await TodoService.getAllProducts(url);
        if (response.status === 404) {
          throw new Error("Page not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.purchasedProduct = data;
        console.log(data);
      } catch (eror) {
        console.log(eror);
      }
    },
    async getProductByIdUpdate(id) {
      try {
        const url = `/getProductById/${id}`;
        const response = await TodoService.getAllProducts(url);
        if (response.status === 404) {
          throw new Error("Page not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.updateInitiatedProduct = data;
        console.log(data);
      } catch (eror) {
        console.log(eror);
      }
    },

    async purchaseProduct(payload) {
      try {
        const response = await TodoService.purchaseProduct(payload);
        if (response.status === 404) {
          throw new Error("Page not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        alert("Product Purchased");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },

    async updateProductDetails(payload){
      try {
        const response = await TodoService.updateProductDetails(payload);
        if (response.status === 404) {
          throw new Error("Page not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }

    },

    async addProductStore(payload){
      try {
        console.log(payload);
        const response = await TodoService.addProduct(payload);
        if (response.status === 404) {
          throw new Error("Page not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }

    }
  },
});
