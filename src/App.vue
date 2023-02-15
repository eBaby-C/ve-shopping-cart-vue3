<template>
  <div id="shopping-cart-container">
    <div id="shopping-cart-header" class="shopping-cart-dispay">
      <div><input type="checkbox" id=""></div>
      <div><span>名字</span></div>
      <div><span>照片</span></div>
      <div><span>数量</span></div>
      <div><span>单价</span></div>
      <div><span>总价</span></div>
      <div><span>操作</span></div>
    </div>
    <div 
      class="shopping-cart-goodList shopping-cart-dispay"
      v-for="g in goods"
      :key=g.key
    >
      <div><input type="checkbox" id=""></div>
      <div><span>名字</span></div>
      <div><span>照片</span></div>
      <div><span>数量</span></div>
      <div><span>单价</span></div>
      <div><span>总价</span></div>
      <div><span>操作</span></div>
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

.shopping-cart-dispay {
  display: flex;
  width: 100%;
  justify-content: space-between;

}

</style>