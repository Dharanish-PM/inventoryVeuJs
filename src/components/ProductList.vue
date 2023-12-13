<template>
  <!--categories-->
  <div class="categories">
    <ul class="category">
      <li v-for="product in products" :key="product" class="item">
        <img :src="product.images[0]" class="iimg" alt="" />
        <p>{{ product.category }}</p>
      </li>
    </ul>
  </div>
  <!--Electronics-->

  <div class="electronics">
    <h1 class="elec">Best Of Electronics</h1>
    <ul class="electronic">
      <li v-for="(product, index) in products" :key="index" class="eitem">
        <img :src="product.images[0]" class="eimg" alt="" />
        <p>{{ product.category }}</p>
        <div class="add-to-cart">
          <i
            class="fa-solid fa-minus decrement"
            @click="decrementCount(index)"
          ></i>
          <p class="quantity">{{ product.stock }}</p>
          <i
            class="fa-solid fa-plus increment"
            @click="incrementCount(index)"
          ></i>
        </div>
        <button @click="addToCart(product)">AddToCart</button>
      </li>
    </ul>
    <div class="poster">
      <div class="text">
        <h2>Shop Your</h2>
        <h2>fashion Needs</h2>
        <p>lorem ipsum jsdjkn</p>
        <p>jdjdsjdsjcjd</p>
        <button class="btn">Click</button>
      </div>
    </div>
  </div>

  <div class="others">
    <h1 class="othertxt">Beauty, Food, Toys and More</h1>
    <ul class="other">
      <li v-for="product in products" :key="product" class="oitem">
        <img :src="product.images[0]" class="oimg" alt="" />
        <p>{{ product.category }}</p>
      </li>
    </ul>
  </div>
</template>
<script src="./js/productList"></script>

<style scoped>
.categories {
  padding: 5px 100px;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.category {
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 6rem;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-top: 50px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 5rem;
}
.iimg {
  height: 60px;
  max-width: 100%;
  margin-bottom: 5px;
}

/*electronics*/

.electronics {
  margin-top: 25px;
  background-color: white;
  height: 300px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.elec {
  position: absolute;
  left: 1rem;
  top: 0.1rem;
}
.electronic {
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 80%;
  overflow-y: hidden;
  overflow-x: scroll;
  height: 70%;
  margin-top: 5rem;
}
.electronic .eitem {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.eimg {
  height: 100px;
  width: fit-content;
  margin-bottom: 10px;
}
.poster {
  width: 20%;
  margin-left: 10px;

  height: 100%;
  margin-left: 10px;
  background: url("@/assets/images/poster.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.poster .text {
  margin-top: 4rem;
  margin-left: 1rem;
  font-size: small;
  color: whitesmoke;
}
.poster .btn {
  border-radius: 5px;
  margin-top: 10px;
}
.btn:hover {
  background-color: chocolate;
  cursor: pointer;
}

/*other images*/
.others {
  margin-top: 25px;
  background-color: white;
  height: 300px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.othertxt {
  position: absolute;
  left: 1rem;
  top: 0.5rem;
}
.other {
  list-style-type: none;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  height: 60%;
  margin-top: 5rem;
}
.oitem {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
.oimg {
  height: 100px;
  width: fit-content;
  margin-bottom: 10px;
}
.add-to-cart {
  display: flex;
  align-items: center;
  font-size: small;
  justify-content: space-evenly;
  width: 100%;
}
</style>
