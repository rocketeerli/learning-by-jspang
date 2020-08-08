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
                                    <el-button type="text" size="small" @click="deleteSingleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="total-div">
                            <small>数量：</small>{{total_count}} &nbsp;&nbsp;&nbsp;&nbsp; <small>金额：</small>{{total_money}} 元
                        </div>
                        <div class="div-btn">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger" @click="deleteAllGoods">删除</el-button>
                            <el-button type="success" @click="checkout">结账</el-button>
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
                            <li v-for="goods in hotGoods" @click="addOrderList(goods)">
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
                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="food-img"><img :src="goods_img[goods.goodsId-1]" width="100%"></span>
                                        <span class="food-name">{{goods.goodsName}}</span>
                                        <span class="food-price">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <div>
                                <ul class="cook-list">
                                    <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                                        <span class="food-img"><img :src="goods_img[goods.goodsId-1]" width="100%"></span>
                                        <span class="food-name">{{goods.goodsName}}</span>
                                        <span class="food-price">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <div>
                                <ul class="cook-list">
                                    <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                                        <span class="food-img"><img :src="goods_img[goods.goodsId-1]" width="100%"></span>
                                        <span class="food-name">{{goods.goodsName}}</span>
                                        <span class="food-price">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <div>
                                <ul class="cook-list">
                                    <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                                        <span class="food-img"><img :src="goods_img[goods.goodsId-1]" width="100%"></span>
                                        <span class="food-name">{{goods.goodsName}}</span>
                                        <span class="food-price">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'pos',
    data() {
        return {
            tableData:[],
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
                    goodsName:'大包薯条',
                    price:12
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
                    goodsName:'儿童欢乐套餐',
                    price:80
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
                }
            ],
            type1Goods:[
                {
                    goodsId:4,
                    goodsImg:"/static/011.png",
                    goodsName:'大包薯条',
                    price:12
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
                }
            ],
            type2Goods:[
                {
                    goodsId:7,
                    goodsImg:"/static/007.png",
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsImg:"/static/008.png",
                    goodsName:'雪顶咖啡',
                    price:18
                }
            ],
            type3Goods:[
                {
                    goodsId:9,
                    goodsImg:"/static/012.png",
                    goodsName:'儿童欢乐套餐',
                    price:80
                }, {
                    goodsId:10,
                    goodsImg:"/static/004.png",
                    goodsName:'快乐全家桶',
                    price:80
                }
            ],
            goods_img:[
                "./static/001.png",  // 香辣鸡腿堡
                "./static/002.png",  // 田园鸡腿堡
                "./static/003.png",  // 和风汉堡
                "./static/011.png",  // 大包薯条
                "./static/005.png",  // 脆皮炸鸡腿
                "./static/006.png",  // 魔法鸡块
                "./static/007.png",  // 可乐大杯
                "./static/008.png",  // 雪顶咖啡
                "./static/012.png",  // 儿童欢乐套餐
                "./static/004.png",  // 快乐全家桶
                "./static/009.png",  // 大块鸡米花
                "./static/010.png",  // 香脆鸡柳
            ],
            total_money: 0,
            total_count: 0
        }
    },
    methods: {
        addOrderList(goods) {
            // 商品是否已经存在列表中
            let is_exist = false;
            for (let i=0; i<this.tableData.length; i++){
                if(this.tableData[i].goodsId == goods.goodsId) {
                    is_exist = true;
                }
            }
            // 根据判断的值编写业务逻辑
            if(is_exist){
                // 改变列表中的商品数量
                let arr = this.tableData.filter(a=>a.goodsId==goods.goodsId);
                arr[0].count++;
            } else {
                // 增加新商品
                let new_goods = {
                    goodsId: goods.goodsId,
                    goodsName: goods.goodsName,
                    price: goods.price,
                    count: 1
                };
                this.tableData.push(new_goods);
            }
            this.getAllMoney();
        },
        // 删除单个商品
        deleteSingleGoods(goods) {
            this.tableData = this.tableData.filter(a=>a.goodsId != goods.goodsId);
            this.getAllMoney();
        },
        // 删除所有商品
        deleteAllGoods() {
            this.tableData = [];
            this.getAllMoney();
        },
        // 汇总数量和金额
        getAllMoney() {
            this.total_count = 0;
            this.total_money = 0;
            if (this.tableData) {
                this.tableData.forEach(element=>{
                    this.total_count += element.count;
                    this.total_money += element.price * element.count;
                })
            }
        },
        // 模拟结账
        checkout() {
            if(this.total_count != 0) {
                this.deleteAllGoods();
                this.$message({
                    message: '结账成功，感谢！',
                    type: 'success'
                })
            } else {
                this.$message.error("对不起，不能空结！");
            }
        }
    },
    created() {
        // axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
        //      .then(response=>{
        //          console.log(response);
        //          this.hotGoods = response.data;
        //      })
        //      .catch(error=>{
        //          console.log(error);
        //          alert('网络错误，不能访问！');
        //      });
        // axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
        //      .then(response=>{
        //          console.log(response);
        //          this.type0Goods = response.data[0];
        //          this.type1Goods = response.data[1];
        //          this.type2Goods = response.data[2];
        //          this.type3Goods = response.data[3];
        //      })
        //      .catch(error=>{
        //          console.log(error);
        //          alert('网络错误，不能访问！');
        //      })
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
    cursor: pointer;
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
    cursor: pointer;
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
.total-div{
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3DCE6;
}
</style>
