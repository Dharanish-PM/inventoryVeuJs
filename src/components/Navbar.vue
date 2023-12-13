<template>
  <Nav class="navbar">
    <search>
      <i
        class="fa-solid fa-magnifying-glass"
        @click="$emit('alert-text', text)"
      ></i>
      <!-- <p>Message is: {{ message }}</p> -->
      <input v-model="userSearch" placeholder="Search for Products,Brands and More" class="search" />
      <!-- <input
        type="text"
        placeholder="Search for Products,Brands and More"
        class="search"
      /> -->
    </search>
    <h1>{{ text }}</h1>
    <useroptions>
      <ul class="options">
        <li>
          <i class="fa-regular fa-user"></i>
          Login
        </li>
        <li @click="navigateCart">
          <i class="fa-solid fa-cart-shopping"></i>
          Cart
          <p>{{ cartCount }}</p>
        </li>
        <li>
          <i class="fa-solid fa-shop"></i>
          Become a Seller
        </li>
        <li @click="navigateHome">
          Products
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
  padding-left: 1rem;
  cursor: pointer;
}
i {
  padding-right: 10px;
}
i:hover {
  color: pink;
}
</style>
