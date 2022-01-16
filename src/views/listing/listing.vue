<template>
  <div class="pt-16 pb-8">
    <div v-for="product in products" :key="product.id">
      <div>{{ product.name }}</div>
      <div>{{ formattedPrice(product.price) }}</div>
      <button type="button" v-on:click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script lang="ts" src="./listing.ts"></script>
