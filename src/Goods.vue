<template>
  <div id="shopping-cart-goods-container">
    <div class="shopping-cart-goods shopping-cart-dispay">
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

const goods = ref<any>()


onMounted(
  () => {
    axios
      .get('./API.json')
      .then(response => {
        goods.value = response.data
      })
  }
)
</script>

<style scoped></style>