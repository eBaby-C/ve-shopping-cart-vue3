<template>
  <div id="shopping-cart-goods-container">
    <div class="shopping-cart-goods shopping-cart-dispay" v-for="g in goods">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { MySchema } from './goods';

const goods = ref<MySchema>()


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