# 开始

学完 Vue 之后，感觉自己前端基础知识欠缺太多，来这里补一下 CSS 的基本知识。

# 笔记

* Demo01： 01 设置鼠标进入时的图像平滑变化
* Demo02： 03 动态伪类选择器 & UI 伪类选择器
* Demo03： 04 结构伪类选择器
* Demo04： 05 伪元素
* Demo05： 06 `border-radius` 画圆角
* Demo06： 07 `border` 画对话框
* Demo07： 08 `transform` 画菱形和平行四边形
* Demo08： 09 `border` 画由三角形组成的五角星和六角星

## 01. 嫁汉嫁汉穿衣吃饭

实现鼠标移动到图片上时，图像缓慢变大，移出后，再缓慢变回。

PS：这里实现图像为圆角图。

### `sublime` 的 `emment` 插件

可以使用 `emment` 插件自动生成 `HTML` 文本结构

输入`！`或者`html:5`，按下`ctrl+e`即可自动生成。

### `transform` 的前缀知识

可以在 [caniuse](https://caniuse.com/) 网站中查到。

### `sublime` 中复制一行

	ctr + shift + D

与 `VsCode` 中的 `ctr + shift + ↓` 不同，注意区分。

## 02. CSS3新特性简介和浏览器支持情况

### 新特性

1. 强大的 CSS3 选择器

2. 抛弃图片的视觉效果（并没有完全抛弃图片）

3. 盒模型变化（多列布局和弹性盒模型）

4. 阴影效果

5. `Web` 字体和 `web Font` 图标

6. `CSS3` 过渡与动画交互效果

7. 媒体查询

### 浏览器支持

在 [caniuse](https://caniuse.com/) 网站中查找。

### 渐进增强和优雅降级

* 渐进增强： 先满足可以在所有浏览器上都可以运行的功能，然后再慢慢添加效果。

* 优雅降级：先满足可以在一个浏览器上可以运行的功能，然后再降级，满足其他浏览器。

### 安装 `autoprefixer` 前缀自动插件

`str + shift + P` 打开，输入 `autoprefixer` 进行下载。

使用时，例如，在打好 `transformer` 后，按下 `Tab` 键，可以同时书写前缀属性。

## 03. `CSS3` 伪类选择器1

### 动态伪类选择器

	<style type="text/css">
		a:link{color: #fff;}  /* 默认的*/
		a:visited{color: #f00;}  /* 访问过的*/
		a:hover{color: #000;}  /* 鼠标进入*/
		a:active{color: #0f0;}  /* 鼠标点击时的*/
	</style>

不存在我们的页面中，只有在交互时才能进行渲染。

### UI 元素状态伪类选择器

定义元素的可用和不可用

	<input type="text"><br/>
	<input type="text" disabled="">

设置可用和不可用的样式：

	input:enabled{background-color: #0f0;}
	input:disabled{background-color: #f00;}

还有很多，例如： `radio:checked`。

## 04. `CSS3` 伪类选择器2 结构伪类选择器

1. `:first-child`: 选择某个元素的第一个子元素

2. `:last-child`: 选择某个元素的最后一个子元素

3. `:nth-child()`: 选择某个元素的一个或多个特定的子元素

选择第三个：

	.demo li:nth-child(3) {
		background-color: blue;
	}

选择偶数个：

	.demo li:nth-child(2n) {
		background-color: red;
	}

等价于：

	.demo li:nth-child(even) {...}

同理，奇数行：

	.demo li:nth-child(odd) {...}

从第五个开始：

	.demo li:nth-child(n+5) {
		background-color: red;
	}

4. `:nth-last-child()`: 选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始计算

用法与 `:nth-child()` 相同，只不过是从最后一个开始计算。

5. `:nth-of-type()`: 选择指定的元素

限定子元素标签类型为冒号 `:` 前面的。

6. `:nth-last-of-type()`: 选择指定的元素，从元素的最后一个开始计算

7. `:first-of-type`:  选择一个上级元素下的第一个同类子元素

8. `:last-of-type`:  选择一个上级元素下的最后一个同类子元素

9. `:only-child`: 选择的元素是它的父元素的唯一一个子元素

10. `:only-of-type`: 选择的元素是它的上一级元素的唯一一个相同类型的子元素

11. `:empty`: 选择的元素里面没有任何内容

## 05. `CSS3` 伪元素

`CSS` 伪元素用于向某些选择器设置**特殊效果**。

|  伪元素         | 作用                        |  IE |  F |  N | W3C|
|  ----          | ----                        | ---- |---| -- | -- |
| :first-letter  | 将特殊的样式添加到文本的首字母 | 5    | 1 | 8 | 1 |
| :first-line    | 将特色的样式添加到文本的首行   | 5   | 1  | 8 | 1 |
| :before        | 在某元素之前插入某些内容       |     | 1.5| 8 | 2 |
| :after         | 在某元素之后插入某些内容       |     | 1.5| 8 | 2 |

为区分伪类和伪元素，伪元素使用俩冒号（一个冒号也可以）。

设置首字变大加粗下沉：

	.demo::first-letter {
		font-size: 40px;
		font-weight: bold;
		float: left;
	}

设置首行，浅红色：

	.demo::first-line {
		color: #F66;
	}

注：`:before` 和  `:after` 里面必须加 `content` 属性。

## 06. `CSS3` 用 `border-radius` 画圆形

`Border-radius` 优点：

1. 减少网站的维护工作量。

2. 提高网站性能。

3. 增加了视觉美观性。

### 简写方式

画圆：

	border-radius: 50%;

不规则的圆：

	border-radius: 100px 50px 20px 30px;

### 傻瓜式写法

	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;

### 分别设置一个角的 `x` 轴和 `y` 轴

椭圆变高：

	border-top-left-radius: 100px 200px;

### 画半圆

左半圆：

	.demo-cycle {
		width: 100px;
		height: 200px;
		border: 1px solid #ccc;
		background-color: #F66;
		margin: 50px auto;
		border-radius: 100px 0px 0px 100px;
	}

## 07. `CSS3` 画三角形和对话框

### 设置边框

	.triangle {
		border-top: 50px solid #ccc;
		border-left: 50px solid #F00;
		border-bottom: 50px solid #0f0;
		border-right: 50px solid #00f;
		width: 0px;
		height: 0px;
		margin: 50px auto;
	}

设置三角形：

	.triangle {
		border-top: 50px solid transparent;
		border-left: 0px solid #F00;
		border-bottom: 50px solid transparent;
		border-right: 50px solid #00f;
		width: 0px;
		height: 0px;
		margin: 50px auto;
	}

### 对话框

首先设置不带三角形的对话框：

	.dialog {
		background-color: #6A6;
		margin: 50px auto;
		width: 300px;
		height:  25px;
		line-height: 25px;
		padding: 10px;
		border-radius: 6px;
		color: #fff;
		position: relative;
	}

然后设置三角形：

	.dialog::before {
		content: '';
		border-left: 0px solid #6A6;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-right: 10px solid #F00;
		position: absolute;
		left: -10px;
		top: 10px;
	}

**注意这里需要相对定位**。

## 08. `CSS3` 画菱形和平行四边形

### 画菱形

先画一个正方形，然后旋转 45 度：

	.diamond {
		width: 200px;
		height: 200px;
		background-color: #6A6;
		margin: 100px auto;
		transform: rotate(-45deg);
	}

增加前缀信息，以支持多种浏览器：

	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);

注意：`rotate()` 是正数时，表示顺时针旋转；负数表示逆时针旋转。

### 画平行四边形

利用 `skew()` 倾斜函数，可以接受俩值，分别是 `x` 轴和 `y` 轴的倾斜角度。

一个值也可以，仅代表 `x` 轴倾斜，此时是左右边倾斜。

	.prarllel {
		width: 200px;
		height: 100px;
		background-color: #6A6;
		margin: 100px auto;
		-webkit-transform: skew(20deg, 30deg);
		-ms-transform: skew(20deg, 30deg);
		-o-transform: skew(20deg, 30deg);
		transform: skew(20deg, 30deg);
	}

## 09. 画五角星和六角星

### 五角星

五角星，可以看成由三个三角形组合而成。

先在 `div` 边框上画一个三角形，再利用伪元素，`::before` 和 `::after` 画出另外两个三角形。

在 `transform` 中添加 `rotate` 方法进行元素的旋转，利用 `top` 等进行元素的平移。

注意，这里父元素设置成相对定位 `position: relative`；子元素设置成绝对定位 `position: absolute`

### 六角星

六角星可以看成由两个三角形相互倒立交叉形成的。

首先在 `div` 边框上画正三角，再利用伪元素，画一个倒的正三角。

利用 `CSS3` 的平移属性，即可形成三角形。
