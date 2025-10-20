<template>
    <div class="home-page">
        <h1>Welcome to ShopSmart</h1>
        <p>Your one-stop shop for all your needs!</p>
        <SearchBar />
    </div>
</template>
<script setup>
import SearchBar from '../components/SearchBar.vue';
</script>
<style scoped>

    .home-page {
        justify-content : center;
        align-items: center;
    }
</style>