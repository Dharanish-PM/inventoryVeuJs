<template>
  <div class="product-filter">
    <h4>Category</h4>

    <!-- <div>
      <div v-for="category in categories" :key="category" class="category">
        <input
          type="radio"
          :value="category"
          v-model="selectedCategory"
          name="category"
          @click="filterProducts"
        />
        <p class="cat">{{ category }}</p>
      </div>
    </div> -->

    <div>
      <div v-for="category in categories" :key="category" class="category">
        <input
          type="checkbox"
          :value="category"
          v-model="selectedCategory"
          name="category"
        />
        <p class="cat">{{ category }}</p>
      </div>
    </div>



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
      <button class="clear-btn" @click="removeFilters">CLEAR FILTERS</button>
    </div>
  </div>
</template>

<script src="./js/filters"></script>

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
  padding: 0;
  display: flex;
  align-items: center;
}

.cat {
  width: 65%;
  cursor: pointer;
}
.category .cat:hover {
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
