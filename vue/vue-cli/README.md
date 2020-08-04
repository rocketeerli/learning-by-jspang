# 开始

vue-cli 学习笔记

## 01. vue-cli 初体验

### 安装 vue-cli

	npm install vue-cli -g
	
### 初始化项目

	vue init <template-name> <project-name>

参数解释：

`<template-name>`: 模板，`vue-cli` 官方提供了5种模板：

* webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。

* webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。

* browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。

* browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。

* simple-一个最简单的单页应用模板。

`<project-name>`：标识项目名称，这个你可以根据自己的项目来起名字。

## 02. vue-cli 项目结构讲解

### 项目结构

教程的里的例子：

	.
	|-- build                            // 项目构建(webpack)相关代码
	|   |-- build.js                     // 生产环境构建代码
	|   |-- check-version.js             // 检查node、npm等版本
	|   |-- dev-client.js                // 热重载相关
	|   |-- dev-server.js                // 构建本地服务器
	|   |-- utils.js                     // 构建工具相关
	|   |-- webpack.base.conf.js         // webpack基础配置
	|   |-- webpack.dev.conf.js          // webpack开发环境配置
	|   |-- webpack.prod.conf.js         // webpack生产环境配置
	|-- config                           // 项目开发环境配置
	|   |-- dev.env.js                   // 开发环境变量
	|   |-- index.js                     // 项目一些配置变量
	|   |-- prod.env.js                  // 生产环境变量
	|   |-- test.env.js                  // 测试环境变量
	|-- src                              // 源码目录
	|   |-- components                     // vue公共组件
	|   |-- store                          // vuex的状态管理
	|   |-- App.vue                        // 页面入口文件
	|   |-- main.js                        // 程序入口文件，加载各种公共组件
	|-- static                           // 静态文件，比如一些图片，json数据等
	|   |-- data                           // 群聊分析得到的数据用于数据可视化
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 定义代码格式
	|-- .gitignore                       // git上传需要忽略的文件格式
	|-- README.md                        // 项目说明
	|-- favicon.ico 
	|-- index.html                       // 入口页面
	|-- package.json                     // 项目基本信息
	.
### 重要文件讲解

#### `package.json`

定义该项目开发所需要的各种模块以及一些项目配置信息（如项目名称、版本、描述、作者等）

`package.json` 里的 `scripts` 字段，这个字段定义了你可以用 `npm` 运行的命令。

`dependencies` 字段和 `devDependencies` 字段:

	dependencies字段指项目运行时所依赖的模块；

	devDependencies字段指定了项目开发时所依赖的模块；

#### `build\webpack.base.conf.js`

		entry: {
			app: './src/main.js'
		}

定义了入口文件的位置。

#### `.babelrc`

`Babel` 解释器的配置文件，存放在根目录下。`Babel`是一个转码器，项目里需要用它将 `ES6` 代码转为 `ES5` 代码。

#### `.editorconfig`

该文件定义项目的编码规范，编译器的行为会与 `.editorconfig` 文件中定义的一致。

并且其优先级比编译器自身的设置要高，这在多人合作开发项目时十分有用而且必要。

解释：

	root = true
	
	[*]    // 对所有文件应用下面的规则
	charset = utf-8                    // 编码规则用utf-8
	indent_style = space               // 缩进用空格
	trim_trailing_whitespace = true    // 是否删除行尾的空格
	indent_size = 2                    // 缩进数量为2个空格
	end_of_line = lf                   // 换行符格式
	insert_final_newline = true        // 是否在文件的最后插入一个空行

## 03. 解读 Vue-cli 的模板

这节主要了解一下 `Vue-cli` 的模板操作，包括增加模板，修改模板，以及一个常规模板的基本结构。

### 放到服务器上

在命令行中输入 `npm run build` 命令后，`vue-cli` 会自动进行项目发布打包。

在执行完命令后，项目的根目录生成了 `dist` 文件夹，这个文件夹里边就是我们要传到服务器上的文件。

`dist`文件夹下目录包括：

* index.html主页文件:因为我们开发的是单页web应用，所以说一般只有一个html文件。

* static 静态资源文件夹：里边js、CSS和一些图片。

### main.js文件解读

`main.js` 是整个项目的入口文件,在 src 文件夹下：

内容：

	import Vue from 'vue'      
	import App from './App'
	import router from './router'

	Vue.config.productionTip = false   //生产环境提示，这里设置成了false

	/* eslint-disable no-new */
	new Vue({
	  el: '#app',
	  router,
	  template: '<App/>',
	  components: { App }
	})

这里引进了App的组件和的模板，它是通过 `import App from ‘./App’` 这句代码引入的。

### `App.vue` 文件

我们找到 `App.vue` 文件，打开查看：

	<template>
	  <div id="app">
		<img src="./assets/logo.png">
		<router-view/>
	  </div>
	</template>

	<script>
	export default {
	  name: 'App'
	}
	</script>

	<style>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
	}
	</style>

`App.vue` 文件可以分成三部分解读：

* `<template></template>` 标签包裹的内容：

	这是模板的 `HTMLDom` 结构，里边引入了一张图片和 `<router-view></router-view>` 标签，`<router-view>` 标签说明使用了路由机制。

* `<script></script>` 标签包括的js内容：

	你可以在这里些一些页面的动态效果和Vue的逻辑代码。

* `<style></style>` 标签包裹的css内容：

	这里就是你平时写的CSS样式，对页面样子进行装饰用的，需要特别说明的是你可以用 `<style scoped></style>` 来声明这些css样式只在本模板中起作用。

我们可以看到 `import Hello from ‘@/components/Hello’` 这句话，文件引入了`/components/Hello.vue`文件。

这个文件里就配置了一个路由，就是当我们访问网站时给我们显示 `Hello.vue` 的内容。	

### `Hello.vue` 文件解读

这个文件就是初始时看到的页面，也是分为 `<template><script><style>` 三个部分，以后我们大部分的工作都是写这些 `.vue` 结尾的文件。
