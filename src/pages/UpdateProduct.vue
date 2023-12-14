<template>
  <div class="input-container">
    <div class="inputs">
      <h3>Update Product</h3>
      <input type="text" v-model="name" placeholder="Input 1" />
      <input type="number" v-model="price" placeholder="Input 2" />
      <input type="number" v-model="quantity" placeholder="Input 3" />
      <button @click="updateProduct">update</button>
    </div>
  </div>
</template>
<script src="./js/updateProduct.js"></script>
<style lang="scss" scoped>

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
