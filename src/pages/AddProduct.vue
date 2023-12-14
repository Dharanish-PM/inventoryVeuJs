<template>
  <!-- choose catrgory div -->
  <div class="categories">
    <p>Available Categories : </p>
    <p>Fruits</p>
    <p>Electronics</p>
  </div>

  <div class="input-container">

    <div class="inputs">
        <h3>Add New Product</h3>
        <input type="number" v-model="categoryId" placeholder="Category ID" />
        <input type="text" v-model="categoryName" placeholder="Category Name" />
        <input type="number" v-model="productId" placeholder="Product ID" />
        <input type="text" v-model="name" placeholder="Product Name" />
        <input type="number" v-model="price" placeholder="Product Price" />
        <input type="number" v-model="quantity" placeholder="Quantity" />
        <button @click="addProduct">Add</button>
    </div>
  </div>

</template>

<script src="./js/addProduct"></script>
<style scoped>

.categories{
    display: flex;
    justify-content: center; 
   
}
.categories>*{
    margin: 20px;
    background: teal;
    color: white;
    padding: 10px;
}
.input-container{
 
    width: 100%;
    padding: 30px;
}
.inputs{
    width: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 50px;
    box-shadow: 2px 2px 10px black;
}
input{
    margin: 0.6rem 0;
    outline: none;
    border: 0;
    padding: 8px;
    background: pink;
    color: black;
    border-radius:10px ;
}
button{
    width: 40%;
    margin: 0 auto;
    background: grey;
    border-radius: 20px;
    color: white;
}
button:hover{
    cursor: pointer;
    transform: scale(0.9);
}


</style>
