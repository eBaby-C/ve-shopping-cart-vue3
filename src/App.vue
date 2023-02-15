<template>
  <div id="shopping-cart-container">
    <div id="shopping-cart-header">
      <div>全选</div>
      <div>名字</div>
      <div>照片</div>
      <div>数量</div>
      <div>单价</div>
      <div>总价</div>
      <div>操作</div>
    </div>
    <div 
      class="shopping-cart-goodList"
      v-for="g in goods"
      :key="g.goodsName"
    >
    </div>
    <div id="shopping-cart-footer"></div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';


const goods = ref<MySchema>({})

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