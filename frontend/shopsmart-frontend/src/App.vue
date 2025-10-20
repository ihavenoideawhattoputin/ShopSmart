<template>
  <div class = "layout">
    <Sidebar />
    <div class="main-content">
      <Home/>
    </div>
  </div>
</template>

<script setup>
import  Home from './pages/Home.vue';
import Sidebar from './components/Sidebar.vue';
// Empty — RouterView will render pages
</script>



<style>
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 0;
  background: #f9fafb;
}
.layout {
  display : flex;
}
</style>