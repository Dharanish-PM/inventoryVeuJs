<template>

<div
        class="box"
      >
        <div class="image" >
          <img :src="img" alt="" />
        </div>
        <div class="info">
          <div class="price-container">
            <p class="title">{{ purchasedProduct.name }}</p>
            <p class="price">
              &#x20B9; <span>{{ purchasedProduct.price }}</span>
            </p>
          </div>
          <div class="subInfo">
            
            <input type="text" v-model="inputQuantity" placeholder="Enter Quantity">
            <div class="addtocart">
                <button @click="initiatePurchase">Purchase</button>
            </div>
          
          </div>
        </div>
      </div>

    
</template>
<script src="./js/purchase"></script>
<style lang="scss" scoped>
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
.hovered {
  cursor: pointer;
  transform: scale(0.98);
}
.update{
  border: 2px solid black;
}
</style>