<template>
  <div id="app">
    <div class="container">
      <router-view v-if="!error" :products="products" :cart="cart" v-on:addToCart="addToCart" />
      <div v-else class="max-w-md mx-auto bg-red-400 text-white p-2 my-2">Something went wrong</div>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style src="./app.css" ></style>
