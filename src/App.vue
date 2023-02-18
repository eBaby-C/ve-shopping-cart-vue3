<template>
  <div id="shopping-cart-container">
    <div id="shopping-cart-header" class="shopping-cart-dispay">
      <div><input type="checkbox" v-model="checkAll"></div>
      <div class="goods-name"><span>名字</span></div>
      <div><span>照片</span></div>
      <div><span>数量</span></div>
      <div><span>单价</span></div>
      <div><span>总价</span></div>
      <div><span>操作</span></div>
    </div>
    <Goods :handle-checkAll="handleCheckAll" />
    <div id="shopping-cart-footer"></div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import Goods from './Goods.vue';

const checkAll = ref(false)

/**
 * 
 * @param checkValue 这个值决定是否全选
 */
const handleCheckAll = (checkValue: boolean) => {
  // checkValue === true ? 
}

watch(
  () => checkAll.value,
  (newV, oldV) => {
    if (newV) 
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

.shopping-cart-dispay>div {
  flex-basis: 10%;
}

#shopping-cart-header {
  height: 60px;
  background-color: pink;
  line-height: 60px;
  font-size: 25px;
}

#shopping-cart-goods-container {
  max-height: calc(100vh - 120px);
  overflow-y: scroll;
}

.shopping-cart-goods {
  flex-basis: 10%;
}

#shopping-cart-footer {
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