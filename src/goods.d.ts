interface MySchema {
  [k: string]: GoodsType
}

type GoodsType = {
  goodsName: string;
  goodsNum: number;
  goodsImg: string;
  goodsPrice: number;
}