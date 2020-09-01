# 开始

学完 Vue 之后，感觉自己前端基础知识欠缺太多，来这里补一下 CSS 的基本知识。

# 代码和代码对应的章节

* Demo01： 01 设置鼠标进入时的图像平滑变化
* Demo02： 03 动态伪类选择器 & UI 伪类选择器
* Demo03： 04 结构伪类选择器
* Demo04： 05 伪元素
* Demo05： 06 `border-radius` 画圆角
* Demo06： 07 `border` 画对话框
* Demo07： 08 `transform` 画菱形和平行四边形
* Demo08： 09 `border` 画由三角形组成的五角星和六角星
* Demo09： 10 `border` 画由三角形+梯形+长方形组成的五边形和六边形
* Demo10： 11 `transform-origin` + `border-radius` 画心形和蛋形
* Demo11： 12 `border-left` + `padding` + `border` 画太极阴阳图
* Demo12： 13 `opacity` 制作透明背景层
* Demo13： 14 `rgba` + `hsla` CSS3 新加的两种颜色模式
* Demo14： 15 `rgba` + `:hover` + `opacity `实例仿天猫商品展示效果
* Demo15： 16 `linear-gradient` 线性渐变
* Demo16： 17 `radial-gradient` 径向渐变
* Demo17： 18 `repeating-x-gradient` + 色标值 实现重复性渐变
* Demo18： 19 `box-shadow` 增加盒子阴影效果
* Demo19： 20 `transition` 过渡效果 制作缓慢变化的方形
* Demo20： 22 实战——仿天猫专题过渡效果
* Demo21： 23 实战——天猫类别过渡效果
* Demo22： 24 动画中的关键帧 `@keyframes` 和 `animation`
* Demo23： 26 实战 —— `animation` loading 效果
* Demo24： 27 实战 —— `animation` 圆形加载效果
* Demo25： 28 `text-shadow` 制作发光字、立体字和苹果字体

# 第一章—— `CSS3` 的简介和新特性

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

# 第二章——使用 `CSS3` 画图形

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

## 10. CSS3 画五边形和六边形

### 画五边形

五边形可以看成由一个三角形和一个梯形组成的。

画梯形时，需要设置 `width` 或 `height` 属性不为 0。

### 画六边形

六边形可以看成由一个长方形和两个三角形组成的。

设置 `div` 为长方形，设置背景颜色。然后增加上下两个三角形边框。

## 11. `CSS3` 画心形和蛋形

### 画心形

使用两个带圆角的长方形，进行旋转+平移，得到心形。

这里需要使用 `transform-origin` 属性来定义旋转的固定点。

### 画蛋形

设置长方形的四角弧度。

`border-radius` 属性，可以使用 `/` 分开，前面代表 `x` 轴，后面代表 `y` 轴。

示例：

	border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

## 12. `CSS3` 画太极阴阳图

太极阴阳图可以看出由三个黑白相间的圆圈组成。

首先，利用 `border-left` 画出一半黑和一半白的圆圈。

然后使用伪元素 `::before` 和 `::after` 增加两个黑白圆环。

其中需要注意的是，利用 `padding` 画内部的小圆，利用 `border` 画外面的大圆。

最后，使用 `left` 和 `bottom` 移动两个小的黑白圆环，形成太极阴阳图。

# 第三章 —— 颜色、渐变、背景和边框

## 13. `CSS3` 制作透明背景层

### 透明的语法

	opacity: value | inherit

value: 数值，代表透明度。

inherit: 继承，如果上一个层是透明的，那么它就是。

### 设置阴影

	box-shadow: x y width color;

x: 代表 `x` 轴

y: 代表 `y` 轴

width： 代表阴影的宽度

color: 代表阴影的颜色

例子：

	box-shadow: 3px 3px 5px #888;

## 14. `CSS3` 的颜色模式(1)

`CSS3` 新加了两种颜色模式：`rgba` 和 `hsla`。

### 语法介绍

第一种：

	rgba(R, G, B, A)

R: 红色值。 正整数|百分数
G: 绿色值。 正整数|百分数
B: 蓝色值。 正整数|百分数
A: Alpha 透明度。 取值 0~1 之间

第二种：

	hsla(H, S, L, A)

H: Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0-360
S: Saturation(饱和度)。取值为：0.0% - 100.0%
L: Lightness(亮度)。取值为：0.0% - 100.0%
A: Alpha(透明度)。取值 0-1 之间。

### 对比

`clear` 属性定义了元素的哪边上不允许出现浮动元素。

`opacity`： 设置透明度时，如果层里面有内容，透明度跟着一起变化。

`rgba`: 设置背景颜色，只改变背景的透明度，层内的内容透明度不变。

`rgba` 理论上可以设置任何地方，不仅背景颜色，也可以设置边框等。理论上所有可以设置颜色的地方都可以使用。

## 15. CSS3的颜色模式（2）-实例仿天猫商品展示效果

首先写出 `HTML` 的基本结构

### 设置 `border` 边框效果

为了使鼠标进入时，再出现边框，需要先将边框颜色设为透明；然后使用 `:hover` 动态伪类选择器设置边框出现。

### 设置图片变透明

为使鼠标进入时，展示的图片变透明，使用 `:hover` 动态伪类选择器设置 `opacity` 属性。

为使变化变得平滑一些，设置标签的 `transition` 属性，设置动画的时间。

## 16. `CSS3` 线性渐变

### 语法介绍

	line-gradient([<point> || <angle>,]? <stop>, <stop> [, <stop>]*)

* `<angle>`: 用角度值指定渐变的方向（或角度）

	* `to left`: 设置渐变为从右到左。相当于: 270deg

	* `to right`: 设置渐变为从左到右。相当于: 90deg

	* `to top`: 设置渐变为从下到上。相当于: 0deg

	* `to bottom`: 设置渐变为从上到下。相当于: 180deg

* `<color-stop>`: 用于指定渐变的起止颜色

	* `<color>`: 指定颜色。

	* `<length>`: 用长度值指定起止色位置，不允许负值。

	* `<percentage>`: 用百分比指定起止色位置。

### 使用

渐变最好放在 `background-image` 下，虽然理论上可以放在任何有颜色的地方，但浏览器支持并不好。

最简单的例子，我们可以只传两种颜色：

	background-image: linear-gradient(orange, black);

默认是从上到下进行渐变。

### 更改渐变的方向

我们可以更改渐变的方向：

	background-image: linear-gradient(to left, orange, black);

使用角度（效果与上面的代码一样）：

	background-image: linear-gradient(270deg, orange, black);

### 控制渐变的位置

	background-image: linear-gradient(to left, orange 50%, black 100%);

### 增加渐变的颜色

使用百分比的形式：

	background-image: linear-gradient(to left, orange 30%, black 60%, red 100%);

使用像素的形式：

	background-image: linear-gradient(to left, orange 100px, black 160px, red 260px);

### 增加前缀信息

为使更多的浏览器支持，我们需要增加前缀：

	background-image: linear-gradient(to left, orange 100px, black 160px, red 260px);
	background-image: -webkit-linear-gradient(to left, orange 100px, black 160px, red 260px);
	background-image: -o-linear-gradient(to left, orange 100px, black 160px, red 260px);

**注意**：

当使用数值来确定渐变角度时，会出现一些问题。

**加了前缀的角度如果设置成正值的话，和标准语法解析是相反方向的(逆时针旋转)**！

例如：

	background-image: linear-gradient(270deg, orange 100px, black 160px, red 260px);
	background-image: -webkit-linear-gradient(270deg, orange 100px, black 160px, red 260px);
	background-image: -o-linear-gradient(270deg, orange 100px, black 160px, red 260px);

与上面的效果不同，但按照标准，效果应该是一样的。

## 17. `CSS3` 径向渐变

径向渐变是按照圆或是椭圆进行渐变。

### 语法介绍

	radial-gradient([<bg-position> || <angel>,]?[<shape> || <size,>]? <color-stop>, <color-stop>[, >color-stop?]*);

### 使用

### 在中间的圆形渐变和椭圆形渐变

默认渐变方向，圆形渐变：

	background-image: radial-gradient(yellow, blue);

也可以写成：

	background-image: radial-gradient(circle at center, yellow, blue);

椭圆形渐变：

	background-image: radial-gradient(ellipse at center, yellow, blue);

### 更改位置

在右侧开始渐变：

	background-image: radial-gradient(circle at right, yellow, blue);

从头部开始渐变：

	background-image: radial-gradient(circle at top, yellow, blue);

从左上角开始渐变：

	background-image: radial-gradient(circle at top left, yellow, blue);

注意，这里的 `top` 和 `left` 是没有顺序的。

### 控制渐变范围

	background-image: radial-gradient(20px circle at center, yellow, blue);

注意，这里的 `20px` 不能写成百分制，也不能应用在椭圆渐变上。

在椭圆渐变上，应该使用两个值，分别控制 `x` 轴和 `y` 轴。

	background-image: radial-gradient(20px 40px ellipse at center, yellow, blue);

### 多种颜色渐变

	background-image: radial-gradient(20px 40px ellipse at center, yellow, blue, red);

## 18. `CSS3` 重复性渐变

注意：重复性渐变必须增加色标值。

### 线性渐变

在线性渐变的基础上添加色标值，然后增加前缀： `repeating`，表示重复。

	background-image: repeating-linear-gradient(red 0px, green 40px, orange 80px);

### 径向渐变

同样的，在径向渐变的基础上添加色标值，然后也同样增加前缀： `repeating`，表示重复。

	background-image: repeating-radial-gradient(red 0px, green 30px, orange 50px);

## 19. `CSS3` 盒子阴影效果

### 语法介绍

	box-shadow: h-shadow v-shadow blur spread color inset;

* `h-shadow`: 必需。水平阴影的位置，允许负值。
* `v-shadow`: 必需。垂直阴影的位置，允许负值。
* `blur`: 可选。模糊距离。
* `spread`: 可选。阴影的尺寸。
* `color`: 可选。阴影的颜色。
* `inset`: 可选。将外部阴影(outset)改为内部。

### 基础用法

	box-shadow: 12px 12px 18px #aaa;

增加前缀：

	-webkit-box-shadow: 12px 12px 18px #aaa;
	box-shadow: 12px 12px 18px #aaa;

# 第四章 —— `CSS3` 过渡效果

## 20. `CSS3` 制作缓慢变长的方形

### 语法介绍

`Transition` 复合属性

* `transition-property`: 过渡属性(默认值为 all)
* `transition-duration`: 过渡持续时间(默认值为0s)
* `transition-timing-function`: 过渡函数(默认值为 `ease` 函数)
* `transition-delay`: 过渡延迟时间(默认值为0s)

### 实现鼠标进入，动画缓慢变化

	.layer {
		width: 150px;
		height: 150px;
		margin: 50px auto;
		background-color: pink;
		cursor: pointer;
		transition-duration: 2s;
		transition-property: all;
		transition-delay: .2s;
		transition-timing-function: ease;
	}
	.layer:hover {
		width: 300px;
		height: 200px;
		background-color: blue;
		border-radius: 50%;
	}

四个与过渡有关的属性可以写在一起，简写方法：

	transition: all 2s .2s ease;

## 21. `CSS3` 过渡的 `timing-function` 属性

* `ease`: 慢 -> 快 -> 慢。
* `linear`: 匀速。
* `ease-in`: 慢 -> 快。
* `ease-out`: 快 -> 慢。
* `ease-in-out`: 慢 -> 快 -> 慢，与 `ease` 很相似，区别很小。
* `step-start`: 直接从开始到结束，没有过渡效果。
* `step-end`: 等待动画时间 `duration` 结束后，才开始直接变化到结束状态，没有过渡效果。

如果精度要求很高，也可以使用 `bezier` 曲线。可以在 [cubic-bezier](https://cubic-bezier.com/) 上进行调试。

## 22. 制作天猫首页的展示效果

1. 基本的方法设置结构，包括字体和图像；同时设置 `cursor`、 `width`、 `height` 等。

2. 使用 `::before` 增加背景层，设置 `z-index` 等。

3. 增加 `transform` 缩放效果和 `transition` 简单的动画效果。

## 23. 天猫类别过渡效果

1. 设置网页的基本结构，并设置元素位置。

2. 使用 `:hover` + `right` 进行移动。

3. 增加 `transition` 过渡效果。

# 第五章 —— `CSS3` 的动画效果

## 24. 动画中的关键帧 `@keyframes`

### `from {} to {}`

从左侧 20% 移动到左侧 80%。

首先定义移动帧：

	@keyframes my_move {
		from {top: 0; left: 20%;}
		to {top: 0; left: 80%;}
	}

然后将其加入到 `animation` 中：

	animation: my_move 2s infinite;

### `%` 用法

增加正方形移动轨迹：

	@keyframes circle {
		0% {top:0; left: 20%}
		25% {top: 0; left: 80%}
		50% {top: 80%; left: 80%}
		70% {top: 80%; left: 20%}
		100% {top:0; left: 20%}
	}

增加背景颜色的改变：

	@keyframes circle {
		0% {top:0; left: 20%; background-color: red;}
		25% {top: 0; left: 80%; background-color: blue;}
		50% {top: 80%; left: 80%; background-color: green;}
		70% {top: 80%; left: 20%; background-color: yellow;}
		100% {top:0; left: 20%; background-color: red;}
	}

## 25. `animation` 复合属性

一共六个复合属性：

* `animation-name`: 指定动画的名字。
* `animation-duration`: 动画的时间。
* `animation-timing-function`： 指定动画效果，如 `linear` 匀速变化；`ease` 慢快慢。
* `animation-delay`: 延迟的运行时间
* `animation-iteration-count`: 执行的次数，`infinite` 一直运行。
* `animation-direction`: `noraml` 正常运行；`alternate` 反方向运行。

## 26. 实战 —— `animation` 做 loading 加载动画

1. 构建基本的 HTML 结构

2. 创建动画

	@keyframes loading {
		0%, 40%, 100% {transform: scale(0.4);}
		20% {transform: scale(1);}
	}

3. 设置加速效果

	.spinner > div:nth-child(2) {
		animation-delay: -1.1s
	}
	.spinner > div:nth-child(3) {
		animation-delay: -1.0s
	}
	.spinner > div:nth-child(4) {
		animation-delay: -0.9s
	}
	.spinner > div:nth-child(5) {
		animation-delay: -0.8s
	}

## 27. 实战 —— `animation` 做圆形加载动画

1. 设置 HTML 基本结构

2. 定义缩放动画

	@keyframes circle {
		0%, 100% {transform: scale(0.0);}
		50% {transform: scale(1.0);}
	}

3. 加载并设置动画延时

	animation: circle 2.0s infinite ease-in-out;

	.spinner > div:nth-child(2) {
		animation-delay: -1s;
	}

# 第六章 —— `CSS3` 的字体效果

## 28. 制作发光字、立体字和苹果字体

### 发光效果

利用 `text-shadow` 设置 x、y 轴偏移为 0，设置模糊范围和颜色值。

	text-shadow: 0px 0px 20px yellow;

正常的阴影效果：

	text-shadow: 2px 2px 3px yellow;

### 苹果字体

使用 `text-shadow` 设置 x 轴不偏移，y 轴向下偏移，设置颜色。

	text-shadow: 0px 1px 1px #fff;

### 3D 字体效果

设置阴影，然后设置偏移。

	text-shadow: 1px 1px rgba(197, 223, 248, 0.8),
				 2px 2px rgba(197, 223, 248, 0.8),
				 3px 3px rgba(197, 223, 248, 0.8),
				 4px 4px rgba(197, 223, 248, 0.8),
				 5px 5px rgba(197, 223, 248, 0.8);
