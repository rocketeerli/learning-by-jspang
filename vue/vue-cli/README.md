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

# vue-router 学习笔记

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

### 1. 改造 `App.vue` 的导航代码

    <router-link to="/">首页</router-link> |
    <router-link to="/Hi">Hi 页面</router-link> |
    <router-link to="/hi/hi1">Hi 页面1</router-link> |
    <router-link to="/hi/hi2">Hi 页面2</router-link> |

### 2. 改写 `components/Hi.vue` 页面

把 `Hi.vue` 改成一个通用的模板，加入 `<router-view>` 标签，给子模板提供插入位置。

	<router-view></router-view>

### 3. 在 `components` 目录下新建两个组件模板 `Hi1.vue` 和 `Hi2.vue`

### 4. 修改 `router/index.js` 代码

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

如果页面中有了多个 `<router-view>` 标签，也就是说我们需要在路由里配置这多个区域，配置主要是在 `components` 字段里进行。

例如，我们在 `APP.vue` 里添加三个 `<router-view>` 标签：

	<template>
	  <div id="app">
		<img src="./assets/logo.png">
		<router-view/>
		<router-view name="left" class="left"></router-view>
		<router-view name="right" class="right"></router-view>
	  </div>
	</template>

定义两个 `vue` 页面（`Hi_1`, `Hi_2`），在 `index.js` 文件中改写为：

	export default new Router({
	  routes: [
		{
		  path: '/',
		  name: 'HelloWorld',
		  components: {
			default:HelloWorld,
			left:Hi_1,
			right:Hi_2
		  }
		}
	  ]
	})

## 08. `vue-router` 利用 `url` 传递参数

###  `:` 冒号的形式传递参数

#### 1. 在 `/src/router/index.js` 文件里配置路由。

增加：

    {
      path: '/params/:news_id/:news_title',
      component:Params
    }
	
#### 2. 在 `src/components` 目录下建立 `params.vue` 组件

    <div>
        <h2>{{msg}}</h2>
        <p>news_id: {{$route.params.news_id}}</p>
        <p>news_title: {{$route.params.news_title}}</p>
    </div>

### 3. 在 `App.vue` 文件里加入 `<router-view>` 标签

	<router-link to="/params/333/hei guys!">Params</router-link>

注：可以使用以下方式添加正则表达式，使参数只能为数字

	{
      path: '/params/:news_id(\\d+)/:news_title',
      component:Params
    }

## 09. `vue-router` 的重定向——`redirect`

开发中有时候我们虽然设置的路径不一致，但是我们希望跳转到同一个页面，或者说是打开同一个组件。这时候我们就用到了路由的重新定向 `redirect` 参数。

### `redirect` 基本重定向

在路由配置文件中（`/src/router/index.js`）把原来的 `component` 换成 `redirect` 参数

	{
      path:'/goHome',
      redirect: '/'
    }

添加导航栏：

	<router-link to="/goHome">go home</router-link>

### 重定向时传递参数

只需要在 `ridirect` 后边的参数里复制重定向路径的 `path` 参数就可以

	{
      path:'/goParams/:id(\\d+)/:title',
      redirect: '/params/:id/:title'
    }

## 10. `alias` 别名

### 1. 给路径起个别名：

	{
      path:'/hi1',
      name:'hi1',
      component:Hi_1,
      alias:'/hi_one'
    }

### 2. 配置 `<router-link>`

    <router-link to="/hi_1">Hi_1</router-link> | 
    <router-link to="/hi_one">Hi_1</router-link> 

### `redirect` 和 `alias` 的区别

* redirect：仔细观察URL，`redirect` 是直接改变了url的值，把url变成了真实的path路径。

* alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了 `<router-view>` 中的内容。

注意：**别名请不要用在 `path` 为 `/` 中，如下代码的别名是不起作用的**。

	{
	  path: '/',
	  component: Hello,
	  alias:'/home'
	}

PS：亲测，貌似为根目录设置别名是可以的~所以上面的坑是不存在的~

## 11. 路由的过渡动画

### `<transition>` 标签

想让路由有过渡动画，需要在 `<router-view>` 标签的外部添加 `<transition>` 标签，标签还需要一个 `name` 属性。

### css 过渡类名

组件过渡过程中，会有四个CSS类名进行切换，这四个类名与 `transition` 的 `name` 属性有关，比如 `name=”anim”`,会有如下四个CSS类名：

* anim-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。

* anim-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。

* anim-leave: 离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。

* anim-leave-active: 离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。

例子：

	.anim-enter {
	  opacity:0;
	}
	.anim-enter-active{
	  transition: opacity .5s;
	}
	.anim-leave{
	  opacity: 1;
	}
	.anim-leave-active{
	  opacity: 0;
	  transition: opacity .5s;
	}

### 过渡模式 `mode`

上边的代码设置了改变透明度的动画过渡效果，**但是默认的`mode`模式`in-out`模式**，这并不是我们想要的。

* in-out: 新元素先进入过渡，完成之后当前元素过渡离开。

* out-in: 当前元素先进行过渡离开，离开完成后新元素过渡进入。

例子：

    <transition name="anim" mode="out-in">
      <router-view/>
    </transition>

## 12. `mode` 的设置和404页面的处理

### mode

在路由的属性中还有一个`mode`，`mode` 有两个值

* histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！

* hash:默认`hash`值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。

### 404 页面

1. 设置我们的路由配置文件：

在 `/src/router/index.js` 中添加：

	{
	   path:'*',
	   component:Error
	}

2. 新建404页面

在 `/src/components/` 文件夹下新建一个 `Error.vue` 的文件。

## 13. 路由中的钩子

路由的钩子选项可以写在路由配置文件中，也可以写在我们的组件模板中。

### 路由配置文件中的钩子函数

我们可以直接在路由配置文件（`/src/router/index.js`）中写钩子函数。

但是在路由文件中我们只能写一个`beforeEnter`,就是在进入此路由配置时。

	{
      path: '/params/:news_id(\\d+)/:news_title',
      component:Params,
      beforeEnter:(to, from, next)=>{
        console.log(to);
        console.log(from);
        next();
      }
    }

三个参数：

* to:路由将要跳转的路径信息，信息是包含在对像里边的。

* from:路径跳转前的路径信息，也是一个对象的形式。

* next:路由的控制参数，常用的有 `next(true)` 和 `next(false)`。

### 写在模板中的钩子函数

写在模板中就可以有两个钩子函数可以使用：

* beforeRouteEnter：在路由进入前的钩子函数。

* beforeRouteLeave：在路由离开前的钩子函数。

在 `params.vue` 中添加：

    beforeRouteEnter:(to, from, next)=>{
        console.log('准备进入 params 路由模板');
        next();
    },
    beforeRouteLeave: (to, from, next)=>{
        console.log('准备离开 params 路由模板');
        next();
    }

## 14. 编程式导航

### 前进和后退

使用 `this.$router.go(-1)` 和 `this.$router.go(1)`

先添加按钮：

    <div>
      <p><button @click="go_back">后退</button><button @click="go_forward">前进</button></p>
    </div>

然后添加方法：

	  methods: {
		go_back(){
		  this.$router.go(-1);
		},
		go_forward(){
		  this.$router.go(1);
		}
	  }

### 跳转

使用 `this.$router.push(‘/xxx ‘)`

添加按钮：

	<button @click="go_home">返回首页</button>

添加方法：

    go_home(){
      this.$router.push('/');
    }

# vuex 学习笔记

## 15. 初出茅庐 来个小Demo

### 安装 vuex

利用 `npm` 包管理工具，进行安装 `vuex`

	npm install vuex --save

这里一定要加上 `–save`，因为你这个包我们在生产环境中是要使用的。

### 使用 vuex

#### 1. 新建 `store.js` 文件，文件中引入我们的 `vue` 和 `vuex`。

	import Vue from 'vue';
	import Vuex from 'vuex';

#### 2. 使用我们 `vuex`，引入之后用 `Vue.use` 进行引用。

	Vue.use(Vuex);

#### 3. `store.js` 文件里增加一个常量对象

	const state={
		count:1
	}

#### 4. 用 `export default` 封装代码，让外部可以引用

	export default new Vuex.Store({
		state
	})

#### 5. 在模板中用 `$store.state.count` 输出 `count` 的值

	<template>
		<div>
			<h2>{{msg}}</h2><hr/>
			<h3>{{$store.state.count}}</h3>
			<p>
				<button @click="$store.commit('add')">ADD</button>
				<button @click="$store.commit('sub')">SUB</button>
			</p>
		</div>
	</template>
	<script>
	import store from '@/vuex/store';
	export default {
		data(){
			return{
				msg: 'Hello Vuex !'
			}
		},
		store
	}
	</script>

#### 6. 在 `store.js` 文件中加入两个改变 `state` 的方法

	const mutations={
		add(state){
			state.count++;
		},
		sub(state){
			state.count--;
		}
	}

#### 7. 在 `count.vue` 模板中加入两个按钮，并调用 `mutations` 中的方法


