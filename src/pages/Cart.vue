<template>
  <div class="box-container">
    <h1>Cart List :</h1>
    <div class="clear clearBtn" @click="deleteCart">Clear</div>
    <div class="products">
      <div class="box" v-for="(product, index) in cartlist" :key="index">
        <div class="image">
          <!-- <img :src="product.images[0]" alt="" /> -->
        </div>
        <div class="info">
          <div class="price-container">
            <p class="title">{{ product.name }}</p>
            <p class="price">&#x20B9; <span>{{ product.price }}</span></p>
          </div>
          <div class="subInfo">
            <div class="quantity-container">
              <i
                class="fa-solid fa-minus decrement"
                @click="decrementCount(index, showAll)"
              ></i>

              <p class="quantity">{{ product.quantity }}</p>
              <i
                class="fa-solid fa-plus increment"
                @click="incrementCount(index, showAll)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./js/cart"></script>

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
.quantity {
  margin: 0 5px;
  border: 1px solid black;
  padding: 0 20px;
  border-radius: 10px;
}

.box-container {
  position: relative;
}
.clearBtn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80px;
  font-size: large;
  padding: 5px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  right: 0;
  top: 10px;
}
.increment:hover,
.decrement:hover {
  transform: scale(0.95);
  cursor: pointer;
}

.clearBtn:hover {
  transform: scale(0.95);
  cursor: pointer;
}
</style>
