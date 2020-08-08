# 快餐店收银系统

## 01. `MockPlus` 把想法画出来

[下载 `MockPlus`](https://www.mockplus.cn/download/mockplus)

然后按照教程制作页面。第一次接触 `MockPlus`，感觉有点小酷啊！

页面视图布局参见 `项目预览图.mp` 文件。

## 02. `Vue-cli` 搭建项目

在当前目录下创建项目：

	vue init webpack

然后更改首页的样式和内容。

这块没啥要说的。

## 03. 项目图标 `Iconfont`

[IconFont](https://www.iconfont.cn/) 是阿里巴巴的矢量图标库。

挑选图标->添加到购物车->添加至项目->生成链接->在项目中导入链接->使用图标

	<i class="iconfont icon-shouji"></i>

注意：

1. 应用不限于 `i标签`。

2. `clss` 必须包含 `iconfont`。

3. 再次增加标签时，需要更新链接。

## 04. 编写独立的侧边栏导航组件

1. 在 `src/components` 目录下，先新建一个 `common` 和 `page` 文件夹

2. 用列表li来代表导航。菜单栏有收银、店铺、商品、会员、统计。

3. `components`（组件）基本结构写好后，开始动手写CSS样式（重要）。

4. 把 `LeftNav` 组件放到模板中。

## 05. Element

`Element` 是一套为开发者、设计师和产品经理准备的基于 `Vue2.0` 的组件库，提供了配套设计资源，帮助你的网站快速成型。

使用 `npm` 安装：

	npm install element-ui --save

导入：

	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-chalk/index.css';

设置全局使用：

	Vue.use(ElementUI);

### 用 `Element` 的 `el-row` 的布个局

基本用法：

    <div class="pos">
        <el-row>
            <el-col :span='7'>
                我是订单栏
            </el-col>
            <el-col :span='17'>
                我是产品栏
            </el-col>
        </el-row>
    </div>

### 解决 `100%` 高的问题

在页面中使用了 `Element` 组件，这样他会自动给我们生产虚拟 `DOM`，我们无法设置高度100%。这时候可以利用 `javascript`，来设置100%高度问题。

实现方法：

    mounted: function(){
        // 所有虚拟 DOM 都加载后
        var order_height = document.body.clientHeight;
        // console.log(order_height);
        document.getElementById("order-list").style.height = order_height + 'px';
    }

## 06. 利用 `Element` 快速布局（1）

### `el-tabs` 标签页组件

基本用法：

    <el-tabs>
        <el-tab-pane label="点餐">点餐</el-tab-pane>
        <el-tab-pane label="挂单">挂单</el-tab-pane>
        <el-tab-pane label="外卖">外卖</el-tab-pane>
    </el-tabs>

直接在模板中引入 `<el-tabs>` 标签，标签里边用 `<el-tab-pane>` 来代表每个标签页。

`<el-tab-pane>` 里的 `label` 属性就是标签页的标题。内容可以直接写在 `<el-tab-pane>` 里。

### `el-table` 组件制作表格

使用方法：

    <el-table :data="tableData" border style="width:100%">
        <el-table-column prop="goodsName" label="商品名称"></el-table-column>
        <el-table-column prop="count" label="数量" width="50"></el-table-column>
        <el-table-column prop="price" label="金额" width="70"></el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
            <template scope="scope">
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">增加</el-button>
            </template>
        </el-table-column>
    </el-table>

`:data` 是用来绑定数据源的，`border` 代表表格有边框效果。

### `el-button` 按钮组件

用法：

	<div class="div-btn">
		<el-button type="warning">挂单</el-button>
	    <el-button type="danger">删除</el-button>
	    <el-button type="success">结账</el-button>
	</div>

`el-button` 的 `type` 属性是设置按钮样式的。

## 07. 利用 `Element` 快速布局（2）

### 常用商品区域布局

在 `<el-col :span=17>` 标签里增加一个层，然后在层内进行布局。因为里边的商品实际意义上是列表，所以用无序列表 `<li>` 来布局商品。

写法：

	<el-col :span='17'>
	    <div class="hot-goods">
	        <div class="title">常用商品</div>
	        <div class="hot-goods-list">
	            <ul>
	                <li>
	                    <span>香辣鸡腿堡</span>
	                    <span class="hot-goods-price">￥16元</span>
	                </li>
	            </ul>
	        </div>
	    </div>
	</el-col>

定义 `CSS` 样式：

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

### 动态生成商品列表

在 `Vue` 的构造器里临时加一个数组，用作常用商品使用

有了数据，可以使用 `v-for` 循环来输出到html模板中。

### 商品分类布局

使用标签页组件：

	<div class="goods-type">
	    <el-tabs>
	        <el-tab-pane label="汉堡">汉堡</el-tab-pane>
	        <el-tab-pane label="小食">小食</el-tab-pane>
	        <el-tab-pane label="饮料">饮料</el-tab-pane>
	        <el-tab-pane label="套餐">套餐</el-tab-pane>
	    </el-tabs>
	</div>

展开写具体类别：

    <el-tab-pane label="汉堡">
        <div>
            <ul class="cook-list">
                <li>
                    <span class="food-img"><img src="/static/001.png"></span>
                    <span class="food-name">香辣鸡腿堡</span>
                    <span class="food-price">￥20.00元</span>
                </li>
            </ul>
        </div>
    </el-tab-pane>

然后设置 `CSS` 样式

### 动态生成商品分类信息

在 `Vue` 的构造器里临时加一个数组，然后使用 `v-for` 进行循环。

这里需要注意的一点是，本地图片加载不到的问题：

1. 网页把根域名作为相对路径的根目录，然而我们文件的路径是相对于项目文件的根目录的。

2. 需要把静态资源文件放到 `vue-cli` 的文件结构中的 `static` 文件夹。

## 08. `Axios` 从远程读取数据

### 安装 `Axios`

	npm install axios --save

由于 `axios` 是需要打包到生产环境中的，所以我们使用 `–save` 来进行安装。

### 引入`Axios`

	import axios from 'axios'

### 使用

	axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
	     .then(response=>{
	         console.log(response);
	         this.hotGoods = response.data;
	     })
	     .catch(error=>{
	         console.log(error);
	         alert('网络错误，不能访问！');
	     });
	axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
	     .then(response=>{
	         console.log(response);
	         this.type0Goods = response.data[0];
	         this.type1Goods = response.data[1];
	         this.type2Goods = response.data[2];
	         this.type3Goods = response.data[3];
	     })
	     .catch(error=>{
	         console.log(error);
	         alert('网络错误，不能访问！');
	     })

## 09. 订单模块制作 核心功能-1

增加 `添加商品` 的方法：

    methods: {
        addOrderList(goods) {
            this.total_money = 0;
            this.total_count = 0;
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
            this.tableData.forEach(element=>{
                this.total_count += element.count;
                this.total_money += element.price * element.count;
            })
        }
    },

绑定点击方法：

	@click="addOrderList(goods)"

CSS 样式设置光标变为小手：

	cursor: pointer;

使用 `scope.row` 获取改行对象：

    <template slot-scope="scope">
        <el-button type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
    </template>

## 10. 订单模块制作 核心功能-2

### 删除列表中的单个商品

    // 删除单个商品
    deleteSingleGoods(goods) {
        this.tableData = this.tableData.filter(a=>a.goodsId != goods.goodsId);
        this.getAllMoney();
    },

### 删除列表中的全部商品

    // 删除所有商品
    deleteAllGoods() {
        this.tableData = [];
        this.getAllMoney();
    },

### 模拟结账

制作思路：

1. 设置我们Aixos的Pos方法。

2. 接受返回值进行处理。

3. 如果成功，清空现有构造器里的tableData，totalMoney，totalCount数据。

4. 进行用户的友好提示。

这里仅实现提示功能：

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

## 11. 项目打包和上线

**打包注意事项**：

1. 把绝对路径改为相对路径。

打开 `config/index.js` 会看到一个 `build` 属性，这里就打包的基本配置了。

在这里可以修改打包的目录，打包的文件名。最重要的是**一定要把绝对目录改为相对目录**。

	assetsPublicPath:'./'

2. 在命令行中进行打包。

使用命令：

	npm run build

# 最后

花了两天时间看完了，对前端项目有了个大概认识，但感觉很多东西还是没有理解，希望以后多练习吧。

完成于 2020/08/09
