interface MySchema {
  [k: string]: GoodsType
}

interface GoodsType {
  goodsName: string;
  goodsNum: number;
  goodsImg: string;
  goodsPrice: number;
}