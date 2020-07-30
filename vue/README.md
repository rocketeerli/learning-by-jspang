
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

## v-for

模板写法：

	<li v-for="item in items">
        {{item}}
	</li>

需要哪个 `html` 标签循环，`v-for` 就写在哪个上边。

### 计算属性(computed)

对于任何复杂逻辑，你都应当使用**计算属性**。

`computed` 是计算属性，主要作用是把数据存储到内存中，减少不必要的请求。

**注意：`vue` 低版本中 `data` 里面的属性名和 `computed` 里面的可以一样，但是高版本，是不允许相同名称。**
