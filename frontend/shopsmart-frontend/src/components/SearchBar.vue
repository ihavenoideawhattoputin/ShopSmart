<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search for products..."
      class="search-input"
    />
    <button class="search-button">Search</button>
    </div>
</template>

<style scoped>
.search-bar {
    display: flex;
    margin: 10px 20px;
}
.search-input {
    border-radius : 30px;
    width : 80%;
}
.search-button {
    margin: 10px;
    border-radius: 600%;
}
</style>