<template>
  <div id="shopping-cart-container">
    <div id="shopping-cart-header"></div>
    <div class="shopping-cart-goodList">
    </div>
    <div id="shopping-cart-footer"></div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, reactive } from 'vue';
import axios from 'axios';


const goods: MySchema = reactive({})

onMounted(
  () => {
    axios
      .get('./API.json')
      .then(response => goods.value = response.data)
  }
)




</script>

<style scoped>

</style>