<template>
  <div id="shopping-cart-goods-container">
    <div class="shopping-cart-goods shopping-cart-dispay" v-for="g in goods">
      <div><input type="checkbox"></div>
      <div><span>{{ g.goodsName }}</span></div>
      <div><img :src="require(`../public/image/${g.goodsImg}`)" alt=""></div>
      <div><span>{{ g.goodsNum }}</span></div>
      <div><span>{{ g.goodsPrice }}</span></div>
      <div><span>{{ g.goodsNum * g.goodsPrice }}</span></div>
      <div><span>删除</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { MySchema } from './goods';

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