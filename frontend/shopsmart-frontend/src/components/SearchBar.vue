<template>
  <form class="search-bar" @submit.prevent="onSubmit">
    <label class="visually-hidden" for="site-search">Search</label>
    <div class="input-wrap">
      <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.99 5L20.49 19l-5-5zM10 14a4 4 0 110-8 4 4 0 010 8z"/></svg>
      <input
        id="site-search"
        v-model="q"
        type="search"
        placeholder="Search for products..."
        class="search-input search-input-global"
        aria-label="Search products"
      />
    </div>
    <button class="search-button" aria-label="Submit search">Search</button>
  </form>
</template>

<script setup>

</script>

<style scoped>
.search-bar{
  display:flex;
  gap:10px;
  align-items:center;
  width:100%;
}
.input-wrap{
  position:relative;
  flex:1;
}
.icon{
  position:absolute;
  left:12px;
  top:50%;
  transform:translateY(-50%);
  width:18px;
  height:18px;
  color:#9ca3af;
}
.search-input{
  width:100%;
  padding:10px 12px 10px 36px;
  border-radius:9999px;
  border:1px solid #e6e9ee;
  background:#fff;
  box-shadow:0 1px 2px rgba(16,24,40,0.04);
  font-size:14px;
  color:#111827;
  transition:box-shadow .12s, border-color .12s;
}
.search-input::placeholder{ color:#9ca3af; }
.search-input:focus{ outline:none; border-color:#60a5fa; box-shadow:0 0 0 4px rgba(96,165,250,0.08);} 
.search-button{
  padding:9px 14px;
  border-radius:9999px;
  background:#2563eb;
  color:#fff;
  border:none;
  cursor:pointer;
  font-weight:600;
}
.search-button:hover{ background:#1e40af }
.visually-hidden{ position:absolute!important; height:1px; width:1px; overflow:hidden; clip:rect(1px,1px,1px,1px); white-space:nowrap; }
</style>