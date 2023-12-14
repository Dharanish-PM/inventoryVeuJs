<template>
  <Nav class="navbar">
    <search>
      <!-- <i
        class="fa-solid fa-magnifying-glass"
        @click="$emit('alert-text', text)"
      ></i> -->
      <i
        class="fa-solid fa-magnifying-glass"
      ></i>
      <!-- <p>Message is: {{ message }}</p> -->
      <input ref="input" v-model="userSearch" placeholder="Search for Products,Brands and More" class="search" />
      <!-- <input
        type="text"
        placeholder="Search for Products,Brands and More"
        class="search"
      /> -->
    </search>
    <!-- <h1>{{ text }}</h1> -->
    <useroptions>
      <ul class="options">
        <li class="option">
          <i class="fa-regular fa-user"></i>
          Login
        </li>
      
        <li class="option">
          <i class="fa-solid fa-shop"></i>
          <p>Become a seller</p>
        </li>
        <li @click="navigateHome">
          Products
        </li>
        <li @click="navigateCart" >
          <i class="fa-solid badge fa-cart-shopping" :value="cartCount"></i>
    
        </li>
      </ul>
    </useroptions>
  </Nav>
</template>
<script src="./js/navbar.js"></script>
<style scoped>
* {
  margin: 0;
  border: 0;
}

/*navbar*/
.navbar {
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  background-color: white;
  border-radius: 0 0 10px 10px;
}
.search {
  width: 600px;
  padding: 10px;
  background-color: aliceblue;
  border-radius: 10px;
}
.search:focus {
  outline: none;
}
.options {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
}
.options > * {
  margin-left:2rem ;
  cursor: pointer;
}
.option{
  display: flex;
  justify-content: center;
}
i {
  padding-right: 10px;
}
li:hover {
  color: pink;
}

.cart-details{
  position: relative;
  display: flex;
  align-items: center;
}
.badge:after{
        content:attr(value);
        font-size:12px;
        color: #fff;
        background: grey;
        border-radius:50%;
        position:relative;
        left:-8px;
        top:-10px;
        opacity:0.9;
        padding: 2px 5px;
        
    }
</style>
