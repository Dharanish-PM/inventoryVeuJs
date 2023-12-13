<template>
    <div class="navbar">
        <nav-component :text="'My Header'" @alert-text="alertMsg"></nav-component>
    </div>

    <div class="main-section">

            <filter-component></filter-component>
        <div class="products">

            <products-component></products-component>
        </div>
    </div>
       
</template>
 
<script src="./js/app"></script>
 
<style lang="scss" scoped>

.main-section{
    margin: 2rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.products{
    width: 75%;
    margin: 1rem auto;
    padding: 10px;
}

</style>