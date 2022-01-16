<template>
  <div class="pt-16 pb-8">
    <div class="max-w-md mx-auto flex justify-between items-center mb-4">
      <div>Checkout</div>
      <router-link
        to="/"
        class="
          inline-block
          px-2
          py-2
          border border-transparent
          text-xs
          font-medium
          rounded-md
          text-white
          bg-gray-600
          hover:bg-gray-700
        "
        >BACK</router-link
      >
    </div>

    <div>
      <div
        v-for="cartItem in cart"
        :key="cartItem.cardId"
        class="
          flex
          justify-between
          max-w-md
          mx-auto
          p-2
          border-b border-gray-300
        "
      >
        <div class="w-1/4 text-left">{{ cartItem.name }}</div>
        <div class="w-1/4">{{ cartItem.quantity }} kgs</div>
        <div class="w-1/4">{{ formattedPrice(cartItem.price) }}$</div>
        <div class="w-1/4 text-right">
          Total: {{ rowFormattedTotalPrice(cartItem.quantity, cartItem.price) }}$
        </div>
      </div>
    </div>
    <div class="mt-4 text-right max-w-md mx-auto">
      Final Price: {{ finalPrice }}$
    </div>

    <div
      class="max-w-md mx-auto bg-indigo-400 text-white p-2 my-2"
      v-if="appliedCoupon"
    >
      Applied coupon: {{ appliedCoupon }}
    </div>

    <div class="max-w-md mx-auto flex items-center mt-4">
      <label class="text-xs">VOUCHER</label>
      <input
        type="text"
        v-model="coupon"
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
          mx-4
        "
      />
      <button
        type="button"
        v-on:click="applyCoupon()"
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
      >
        APPLY
      </button>
    </div>
    <div class="mt-4 max-w-md mx-auto">
      <button
        type="button"
        v-on:click="completeOrder()"
        class="
          w-full
          block
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
      >
        COMPLETE ORDER
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./cart.ts"></script>
