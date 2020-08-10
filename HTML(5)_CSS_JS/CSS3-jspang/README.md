# 开始

学完 Vue 之后，感觉自己前端基础知识欠缺太多，来这里补一下 CSS 的基本知识。

# 笔记

* Demo01： 01 设置鼠标进入时的图像平滑变化

* Demo02： 03 动态伪类选择器 & UI 伪类选择器

* Demo03： 04 结构伪类选择器

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

