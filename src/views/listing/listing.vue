<template>
  <div class="pt-16 pb-8 max-w-md mx-auto">
    <div class="text-left mb-4">
      <div>Checkout</div>
    </div>
    <form ref="form" class="mb-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="
          flex
          justify-between
          items-center
          max-w-md
          mx-auto
          p-2
          border-b border-gray-300
        "
      >
        <div class="w-1/4 text-left">{{ product.name }}</div>
        <div class="w-1/4">{{ formattedPrice(product.price) }}$</div>
        <div class="w-1/4 flex items-center text-xs">
          <input
            type="number"
            v-model="product.quantity"
            class="
              border border-gray-300
              rounded
              appearance-none
              w-full
              py-2
              px-2
              text-gray-700 text-sm
              leading-tight
              outline-none
              bg-white
              mr-1
            "
            min="1"
            required
          />
          kgs
        </div>
        <div class="w-1/4 text-right">
          <button
            type="button"
            class="
              inline-block
              px-4
              py-2
              border border-transparent
              text-xs
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
            "
            v-on:click="addToCart(product)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </form>
    <router-link
      to="/cart"
      v-if="cart.length"
      class="
        inline-block
        px-4
        py-2
        border border-transparent
        text-sm
        font-medium
        rounded-md
        text-white
        bg-indigo-600
        hover:bg-indigo-700
      "
      >CHECKOUT</router-link
    >
  </div>
</template>

<script lang="ts" src="./listing.ts"></script>
