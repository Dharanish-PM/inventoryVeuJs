<template>
  <div class="product-filter">
    <h4>Category</h4>

    <ul class="category">
      <li class="visited">All</li>
      <li>Mobile</li>
      <li>Laptop</li>
      <li>Computer</li>
      <li>Accessories</li>
      <li>Watch</li>
    </ul>

    <h4>Company</h4>
    <div class="select-container">
      <select v-model="selected" class="select-box">
        <option value="getuserData">Please select one</option>
        <option>All</option>
        <option>Nokia</option>
        <option>Samsung</option>
      </select>

    </div>

    <h4>Color</h4>
    <div class="colors">
      <div class="colorAll">All</div>
      <div class="red color"></div>
      <div class="black color"></div>
      <div class="grey color"></div>
      <div class="blue color"></div>
    </div>
    <div class="clear-filters">
      <button class="clear-btn">CLEAR FILTERS</button>
    </div>
  </div>
</template>

<script src=""></script>

<style scoped>
.product-filter {
  height: 50%;
  padding: 30px;
  width: 20%;
  box-shadow: -5px -2px 7px rgba(0, 0, 0, 0.5);
  background-color: white;
}
.product-filter h4 {
  margin-top: 30px;
}

.category {
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
}
.category li {
  margin-bottom: 10px;
  width: 20px;
}
.category li:hover {
  cursor: pointer;
  transform: scaleY(1.1);
  color: #750e21;
  border-bottom: 1px solid #750e21;
}

.select-container {
  width: 100px;
  height: 50px;
}
.select-box {
  outline: 0;
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
}
.select-box:hover {
  border: 1px solid #750e21;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.colors {
  display: flex;
  justify-content: space-between;
  width: 100px;
  align-items: center;
  margin-top: 20px;
}
.color {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  cursor: pointer;
}
.color:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  transform: scale(0.9);
}
.colorAll {
  cursor: pointer;
}
.red {
  background-color: red;
}
.black {
  background-color: black;
}
.blue {
  background-color: lightblue;
}
.grey {
  background-color: grey;
}
.clear-filters {
  width: 100%;
  margin-top: 20px;
}
.clear-btn {
  border: 1px solid #750e21;
  padding: 5px;
  color: white;
  font-size: small;
  background-color: #750e21;
}
.clear-btn:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  transform: scale(0.9);
  cursor: pointer;
}
</style>
