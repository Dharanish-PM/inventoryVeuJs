<template>
    <div class="navbar">
        <nav-component :text="'My Header'" @alert-text="alertMsg"></nav-component>
    </div>

    <div class="main-section">
            <filter-component class="filters"></filter-component>
        <div class="products">
            <router-view></router-view>
            <!-- <products-component></products-component> -->
        </div>
    </div>
</template>
 
<script src="./js/app"></script>
 
<style lang="scss" scoped>

.main-section{
    margin: 0rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;

}
.products{
    width: 75%;
    margin: 1rem auto;
    padding: 10px;
}
.filters{
    margin-top: 7rem;
}

</style>