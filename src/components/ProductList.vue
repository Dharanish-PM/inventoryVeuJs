<template>
  <!-- <div class="electronics container">
    <h1 class="elec">Best Of Electronics</h1>
    <div class="products">
      <ul v-if="showAll" class="electronic products">
        <li v-for="(product, index) in products" :key="index" class="eitem">
          <img :src="product.images[0]" class="eimg" alt="" />
          <p>{{ product.category }}</p>
          <div class="add-to-cart">
            <i
              class="fa-solid fa-minus decrement"
              @click="decrementCount(index, showAll)"
            ></i>

            <p class="quantity">{{ product.stock }}</p>
            <i
              class="fa-solid fa-plus increment"
              @click="incrementCount(index, showAll)"
            ></i>
          </div>
          <button @click="addToCart(product)">AddToCart</button>
        </li>
      </ul>

      <ul v-else class="electronic products">
        <li
          v-for="(product, index) in filteredProductsList"
          :key="index"
          class="eitem"
        >
          <img :src="product.images[0]" class="eimg" alt="" />
          <p>{{ product.category }}</p>
          <div class="add-to-cart">
            <i
              class="fa-solid fa-minus decrement"
              @click="decrementCount(index, showAll)"
            ></i>
            <p class="quantity">{{ product.stock }}</p>
            <i
              class="fa-solid fa-plus increment"
              @click="incrementCount(index, showAll)"
            ></i>
          </div>
          <button @click="addToCart(product)">AddToCart</button>
        </li>
      </ul>
    </div>
  </div> -->

  <div class="box-container">
    <h1>Product List :</h1>

    <div class="products" v-if="showAll">
      <div class="box" v-for="(product, index) in products" :key="index">
        <div class="image">
          <img :src="product.images[0]" alt="" />
        </div>
        <div class="info">
          <div class="price-container">
            <p class="title">{{ product.category }}</p>
            <p class="price">&#x20B9; <span>5000</span></p>
          </div>

          <div class="subInfo">
            <div class="quantity-container">
              <i
                class="fa-solid fa-minus decrement"
                @click="decrementCount(index, showAll)"
              ></i>

              <p class="quantity">{{ product.stock }}</p>
              <i
                class="fa-solid fa-plus increment"
                @click="incrementCount(index, showAll)"
              ></i>
            </div>
            <div class="addtocart">
              <div @click="addToCart(product)" class="addBtn">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="products" v-else>
      <div
        class="box"
        v-for="(product, index) in filteredProductsList"
        :key="index"
      >
        <div class="image">
          <img :src="product.images[0]" alt="" />
        </div>
        <div class="info">
          <div class="price-container">
            <p class="title">{{ product.category }}</p>
            <p class="price">&#x20B9; <span>5000</span></p>
          </div>

          <div class="subInfo">
            <div class="quantity-container">
              <i
                class="fa-solid fa-minus decrement"
                @click="decrementCount(index, showAll)"
              ></i>

              <p class="quantity">{{ product.stock }}</p>
              <i
                class="fa-solid fa-plus increment"
                @click="incrementCount(index, showAll)"
              ></i>
            </div>
            <div class="addtocart">
              <div @click="addToCart(product)" class="addBtn">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/productList"></script>

<style scoped>
.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.box {
  background: white;
  position: relative;
  overflow: hidden;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}
.box .image {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.box .image img {
  height: 150px;
  width: 200px;
  object-fit: cover;

  filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.7));
}

.price-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.subInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.addBtn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  font-size: 10px;
  padding: 5px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}
.increment:hover,
.decrement:hover {
  transform: scale(0.95);
  cursor: pointer;
}
.addBtn:hover {
  transform: scale(0.95);
  cursor: pointer;
}
.quantity {
  margin: 0 5px;
  border: 1px solid black;
  padding: 0 20px;
  border-radius: 10px;
}
</style>
