<template>
  <div id="app">
    <div class="container">
      <router-view :products="products" :cart="cart" v-on:addToCart="addToCart" />
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style src="./app.css" ></style>
