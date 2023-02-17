<template>
  <div id="shopping-cart-container">
    <div id="shopping-cart-header" class="shopping-cart-dispay">
      <div><input type="checkbox" id=""></div>
      <div class="goods-name"><span>名字</span></div>
      <div><span>照片</span></div>
      <div><span>数量</span></div>
      <div><span>单价</span></div>
      <div><span>总价</span></div>
      <div><span>操作</span></div>
    </div>
    <div 
      class="shopping-cart-goodList "
      v-for="g in goods"
      :key=g.key
    >
      <div class="shopping-cart-dispay">
        <div><input type="checkbox" id=""></div>
        <div class="goods-name"><span>{{ g.goodsName }}</span></div>
        <div><img :src="require(`../public/image/${g.goodsImg}`)" alt=""></div>
        <div><input type="number" v-model="g.goodsNum" id="goods-num"></div>
        <div><span>{{ g.goodsPrice }}</span></div>
        <div><span>{{ g.goodsNum * g.goodsPrice }}</span></div>
        <div><span>操作</span></div>
      </div>
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

<style>



body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.shopping-cart-dispay {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.shopping-cart-dispay > div {
  flex-basis: 10%;
}

#shopping-cart-header {
  height: 60px;
  background-color: pink;
  line-height: 60px;
  font-size: 25px;
}

img {
  width: 60px;
  height: 60px;
}

.goods-name {
  flex-basis: 100px;
}

#goods-num {
  width: 50px;
  line-height: 40px;
  font-size: 30px;

}

</style>