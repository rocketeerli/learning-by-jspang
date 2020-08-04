# 开始

vue-cli & vue-router 学习笔记

# vue-cli 学习笔记

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

# vue-router 

## 04. Vue-router入门

### 安装 vue-router

`vue-router` 是一个插件包，所以我们还是需要用 `npm` 来进行安装的。

进入项目目录，输入下面命令：

	npm install vue-router --save-dev

### `router/index.js` 文件

代码解释：

	import Vue from 'vue'   //引入Vue
	import Router from 'vue-router'  //引入vue-router
	import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件

	Vue.use(Router)  //Vue全局使用Router

	export default new Router({
	  routes: [              //配置路由，这里是个数组
		{                    //每一个链接都是一个对象
		  path: '/',         //链接路径
		  name: 'Hello',     //路由名称，
		  component: Hello   //对应的组件模板
		}
	  ]
	})

### 增加一个Hi的路由和页面 

1. 在 `src/components` 目录下，新建 `Hi.vue` 文件。编写文件内容，和我们之前讲过的一样，文件要包括三个部分 `<template>`, `<script>`和 `<style>`。

2. 引入 `Hi` 组件：我们在 `router/index.js` 文件的上边使用 `import` 引入 `Hi` 组件。

3. 增加路由配置：在 `router/index.js` 文件的 `routes[]` 数组中，新增加一个对象。

### router-link 制作导航

例子：

	<div>
        <router-link to="/">首页</router-link> |
        <router-link to="/Hi">Hi 页面</router-link> |
    </div>

## 05. vue-router 配置子路由

子路由的情况一般用在一个页面有他的基础模版，然后它下面的页面都隶属于这个模版，只是部分改变样式。

步骤：

1. 改造 `App.vue` 的导航代码

    <router-link to="/">首页</router-link> |
    <router-link to="/Hi">Hi 页面</router-link> |
    <router-link to="/hi/hi1">Hi 页面1</router-link> |
    <router-link to="/hi/hi2">Hi 页面2</router-link> |

2. 改写 `components/Hi.vue` 页面

把 `Hi.vue` 改成一个通用的模板，加入 `<router-view>` 标签，给子模板提供插入位置。

	<router-view></router-view>

3. 在 `components` 目录下新建两个组件模板 `Hi1.vue` 和 `Hi2.vue`

4. 修改 `router/index.js` 代码

我们现在导航有了，母模板和子模板也有了，只要改变我们的路由配置文件就可以了。

子路由的写法是在原有的路由配置下加入 `children` 字段。

	children:[
	{path:'/',component:xxx},
	{path:'xx',component:xxx},
	]

## 06. vue-router 参数传递

### 用 `name` 传递参数

1. 在路由文件 `src/router/index.js` 里配置 `name` 属性。

2. 模板里(`src/App.vue`)用 `$route.name` 的形势接收，比如直接在模板中显示：

### 通过 `<router-link>` 标签中的to传参

基本语法：

	<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>

把 `src/reouter/index.js` 文件里给 `hi1` 配置的路由添加 `name` 属性 `name:'hi1'`。

	{path:'/hi1',name:'hi1',component:Hi1},
	
最后在模板里(`src/components/Hi1.vue`)用 `$route.params.username` 进行接收。

	{{$route.params.username}}
	
**name的用途：一是传参，二是在传参时起到名称作用**。

## 07. 单页面多路由区域操作


