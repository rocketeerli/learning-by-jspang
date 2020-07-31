
## 01. Hello World

### HTML Snippets

很好用的 VSCode 的 html 代码补全工具。

安装参考：[vscode自动补全html相关代码](https://blog.csdn.net/gyx1549624673/article/details/101558641)

### live-server

live-server 插件实现了: 

* 修改文件浏览器自动刷新
* 浏览器自动打开项目
* 本地开发搭建临时的服务

安装：

	npm install -g live-server

## 02. v-if & v-else & v-show

* `v-if`: 用来判断是否加载 `html` 的 `DOM`。

* `v-else`: 一般与 `v-if` 成对出现。

* `v-show`: 调整 css 中 `display` 属性，DOM已经加载，只是 CSS 控制没有显示出来。

`v-if` 和 `v-show` 的区别：

	v-if：判断是否加载，可以减轻服务器的压力，在需要时加载。
	v-show：调整 css dispaly 属性，可以使客户端操作更加流畅。

## 03. v-for

模板写法：

	<li v-for="item in items">
        {{item}}
	</li>

需要哪个 `html` 标签循环，`v-for` 就写在哪个上边。

### 计算属性(computed)

对于任何复杂逻辑，你都应当使用**计算属性**。

`computed` 是计算属性，主要作用是把数据存储到内存中，减少不必要的请求。

**注意：`vue` 低版本中 `data` 里面的属性名和 `computed` 里面的可以一样，但是高版本，是不允许相同名称。**

## 04. v-text & v-html

我们已经使用的 `{{xxx}}`,这种情况是有弊端的。就是当我们网速很慢或者 `javascript` 出错时，会暴露我们的 `{{xxx}}`。

这时，我们可以使用 `v-text`:

	<span v-text="message"></span>

如果在 `javascript` 中写有 `html` 标签，用 `v-text` 是输出不出来的，这时候我们就需要用 `v-html` 标签了：

	<span v-html="msgHtml"></span>

需要注意的是：**在生产环境中动态渲染HTML是非常危险的，因为容易导致XSS攻击。**

## 05. v-on

`v-on` 就是监听事件，可以用 `v-on` 指令监听 `DOM` 事件来触发一些 `javascript` 代码。

举例：

	<button v-on:click='add_score'>加分</button>

`v-on` 还有一种简单的写法，就是用`@`代替：

	<button @click='sub_score'>减分</button>

还可以绑定其它事件，比如键盘回车事件 `v-on:keyup.enter`

## 06. v-model

`v-model` 指令，绑定数据源。就是把数据绑定在特定的表单元素上，可以很容易的实现双向数据绑定。

基本用法：

	<p>{{message}}</p>
    <p><input type="text" v-model='message'></p>

### 修饰符

* `.lazy`：取代 `imput` 监听 `change` 事件。

* `.number`：输入字符串转为数字。

* `.trim`：输入去掉首尾空格。

### 绑定一个值、数组和单选框

	<h3>多选框绑定一个值</h3>
	<input type="checkbox" id="isTrue" v-model="is_true">
    <label for="isTrue">{{is_true}}</label>
    <hr>
    <h3>多选框绑定一个数组</h3>
    <p>
        <input type="checkbox" id="rocketeerli" value="rocketeerli" v-model='web_names'>
        <label for="rocketeerli">rocketeerli</label>
        <input type="checkbox" id="fightingstone" value="fightingstone" v-model='web_names'>
        <label for="fightingstone">fightingstone</label>
        <input type="checkbox" id="tututu" value="tututu" v-model='web_names'>
        <label for="tututu">tututu</label>
        <p>{{web_names}}</p>
    </p>
    <hr>
    <h3>单选框绑定</h3>
    <p>
        <input type="radio" id="one" value="male" v-model='sex'>
        <label for="one">male</label>
        <input type="radio" id="two" value="female" v-model='sex'>
        <label for="two">female</label>
        <p>the sex you have chose is {{sex}}</p>
    </p>

## 07. v-bind

`v-bind` 是处理 `HTML` 中的标签属性的。

