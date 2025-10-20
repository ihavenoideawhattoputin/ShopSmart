<template>
    <aside class="sidebar">
        <h2 class="brand">ShopSmart</h2>
        <nav>
            <ul class="nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link :to="{ name: 'Products' }">Products</router-link></li>
                <li><router-link :to="{ name: 'Categories' }">Categories</router-link></li>
                <li><router-link to="/cart">Cart</router-link></li>
                <li><router-link to="/account">Account</router-link></li>
                <li><router-link to="/admin">Admin</router-link></li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
.sidebar {
    width: 250px;
    background-color: #ffffff;
    border-right: 1px solid #e5e7eb;
    padding: 20px;
    box-sizing: border-box;
    height: 100vh;
    position: sticky;
    top: 0;
}
.brand{ margin: 0 0 16px; font-size:18px }
.nav{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px }
.nav a{ display:block; padding:8px 12px; color:#111827; text-decoration:none; border-radius:8px }
.nav a.router-link-active{ background:#eef2ff; color:#1e40af; font-weight:600 }
.nav a:hover{ background:#f3f4f6 }
</style>