<template>
    <div class="pos">
        <el-row>
            <el-col :span='7' class="pos-order" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width:100%">
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                            <el-table-column prop="count" label="数量" width="50"></el-table-column>
                            <el-table-column prop="price" label="金额" width="70"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small">删除</el-button>
                                    <el-button type="text" size="small">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="div-btn">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger">删除</el-button>
                            <el-button type="success">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span='17'>
                <div class="hot-goods">
                    <div class="title">常用商品</div>
                    <div class="hot-goods-list">
                        <ul>
                            <li v-for="goods in hotGoods">
                                <span>{{goods.goodsName}}</span>
                                <span class="hot-goods-price">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <div>
                                <ul class="cook-list">
                                    <li v-for="goods in type0Goods">
                                        <span class="food-img"><img :src="goods.goodsImg" width="100%"></span>
                                        <span class="food-name">{{goods.goodsName}}</span>
                                        <span class="food-price">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小食">小食</el-tab-pane>
                        <el-tab-pane label="饮料">饮料</el-tab-pane>
                        <el-tab-pane label="套餐">套餐</el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'pos',
    data() {
        return {
            tableData:[{
                goodsName: '可口可乐',
                price: 8,
                count:1
            }, {
                goodsName: '香辣鸡腿堡',
                price: 15,
                count:1
            }, {
                goodsName: '爱心薯条',
                price: 8,
                count:1
            }, {
                goodsName: '甜筒',
                price: 8,
                count:1
            }],
            hotGoods:[
                {
                    goodsId: 1,
                    goodsName: "香辣鸡腿堡",
                    price:18
                }, {
                    goodsId:2,
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                    goodsName:'香脆鸡柳',
                    price:17
                }
            ],
            type0Goods:[
                {
                    goodsId:1,
                    goodsImg:"/static/001.png",
                    goodsName:'香辣鸡腿堡',
                    price:18
                }, {
                    goodsId:2,
                    goodsImg:'/static/002.png',
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsImg:"/static/003.png",
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                    goodsImg:"/static/004.png",
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                    goodsImg:"/static/005.png",
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                    goodsImg:"/static/006.png",
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                    goodsImg:"/static/007.png",
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsImg:"/static/008.png",
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                    goodsImg:"/static/009.png",
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                    goodsImg:"/static/010.png",
                    goodsName:'香脆鸡柳',
                    price:17
                }
            ]
        }
    },
    mounted: function(){
        // 所有虚拟 DOM 都加载后
        var order_height = document.body.clientHeight;
        // console.log(order_height);
        document.getElementById("order-list").style.height = order_height + 'px';
    }
}
</script>
<style scoped>
.pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
    height: 100%;
}
.div-btn {
    margin-top: 10px;
}
.title{
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    background-color: #F9FAFC;
    padding: 10px;
    text-align: left;
}
.hot-goods-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
    background-color: #FFF;
}
.hot-goods-price {
    color: #58B7FF;
}
.goods-type{
    clear: both;
}
.cook-list li{
    list-style: none;
    width: 20%;
    border: 1px silid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color: #FFF;
    padding: 2px;
    margin: 2px;
    float: left;
}
.cook-list li span {
    display: block;
    float: left;
}
.food-img {
    width: 40%;
    height: 100px;
}
.food-name {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
}
.food-price {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
}
</style>
