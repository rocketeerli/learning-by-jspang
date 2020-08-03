
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

基础用法：

	<img src="http://blogimages.jspang.com/blogtouxiang1.jpg"/>
	<img v-bind:src="img_src" width="200px"/>

简写：

	<!-- 完整语法 -->
	<a v-bind:href="url"></a>
	<!-- 缩写 -->
	<a :href="url"></a>

通常用来**绑定 CSS 样式**。

## 08. v-pre & v-cloak & v-once

### v-pre

在模板中跳过 `vue` 的编译，直接输出原始值。就是在标签中加入 `v-pre` 就不会输出 `vue` 中的 `data` 值了。

基础语法：

	<div v-pre>{{message}}</div>

### v-cloak

在 `vue` 渲染完指定的整个 `DOM` 后才进行显示。它必须和CSS样式一起使用。

### v-once

在第一次 `DOM` 时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。

## 09. Vue.directive

`Vue.directive` 可以用来自定义新的指令。

### 自定义指令中传递的三个参数

* el: 指令所绑定的元素，可以用来直接操作 `DOM`。

* binding: 一个对象，包含指令的很多信息。

* vnode: `Vue` 编译生成的虚拟节点。

### 自定义指令的生命周期

自定义指令有五个生命周期（也叫钩子函数），分别是 `bind`, `inserted`, `update`, `componentUpdated`, `unbind`。

1. bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。

2. inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 `document` 中）。

3. update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。

4. componentUpdated:被绑定元素所在模板完成一次更新周期时调用。

5. unbind:只调用一次，指令与元素解绑时调用。

## 10. Vue.extend

`Vue.extend` 是构造器的延伸。

返回的是一个“扩展实例构造器”,也就是预设了部分选项的 `Vue` 实例构造器。

经常服务于 `Vue.component` 用来生成组件。

## 11. Vue.set

Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法。

### 在外部改变数据的三种方法

	1. 用Vue.set改变
	
	function add(){
		Vue.set(outData,'count',4);
	}
	
	2. 用Vue对象的方法添加
	
	app.count++;
	
	3. 直接操作外部数据
	
	outData.count++;

### Vue.set 存在的意义

由于 `Javascript` 的限制，`Vue` 不能自动检测以下标变动的数组。

* 当你利用索引直接设置一个项时，`vue` 不会为我们自动更新。

* 当你修改数组的长度时，`vue` 不会为我们自动更新。

## 12. Vue的生命周期（钩子函数）

`Vue` 一共有10个生命周期函数，我们可以利用这些函数在 `vue` 的每个阶段都进行操作数据或者改变内容。

例子：

	beforeCreate:function(){
	    console.log('1-beforeCreate 初始化之前');
	},
	created:function(){
	    console.log('2-created 创建完成');
	},
	beforeMount:function(){
	    console.log('3-beforeMount 挂载之前');
	},
	mounted:function(){
	    console.log('4-mounted 被挂载之后');
	},
	beforeUpdate:function(){
	    console.log('5-beforeUpdate 数据更新前');
	},
	updated:function(){
	    console.log('6-updated 被更新后');
	},
	activated:function(){
	    console.log('7-activated');
	},
	deactivated:function(){
	    console.log('8-deactivated');
	},
	beforeDestroy:function(){
	    console.log('9-beforeDestroy 销毁之前');
	},
	destroyed:function(){
	    console.log('10-destroyed 销毁之后')
	}

## 13. Template 制作模版

### 选项模板

直接在构造器里的 `template` 选项后边编写，这种写法比较直观，但是不适合模板 `html` 代码太多的情况。

例子：

	var app=new Vue({
		el:'#app',
		data:{
			message:'hello Vue!'
		},
		template:`
			<h1 style="color:red">我是选项模板</h1>
		`
	})
	
这里需要注意的是模板的标识不是单引号和双引号，而是 `Tab` 上面的键。

### 写在 template 标签里的模板

这种写法更像是在写 `HTML` 代码，就算不会写 `Vue` 的人，也可以制作页面。

例子：

    <template id="demo2">
             <h2 style="color:red">我是template标签模板</h2>
    </template>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            template:'#demo2'
        })
    </script>

### 写在 script 标签里的模板

这种写模板的方法，可以让模板文件从外部引入。

例子：

	<script type="x-template" id="demo3">
        <h2 style="color:red">我是script标签模板</h2>
    </script>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                message:'hello Vue!'
            },
            template:'#demo3'
        })
    </script>

## 14. Component 初识组件

组件就是制作自定义的标签，这些标签在HTML中是没有的。

### 全局化注册组件

全局化就是在构造器的外部用 `Vue.component` 来注册。

例子：

    <div id="app">
        <rocketeerli></rocketeerli>
    </div>
    <script type="text/javascript">
        Vue.component("rocketeerli", {
            template:`<div style="color: blue">全局 rocketeerli 组件</div>`
        })
        var app = new Vue({
            el:"#app",
            data:{}
        })
    </script>

需要注意的是：**它必须放到构造器的作用域里**。

### 局部注册组件局部

局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。

例子：

    <div id="app">
        <tututu></tututu>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el:"#app",
            data:{},
            components:{
                "tututu":{
                    template:`<div style="color: yellow">局部 tututu 组件</div>`
                }
            }
        })
    </script>

可以看出局部注册其实就是写在构造器里，但是你需要注意的是，构造器里的 `components` 是加 `s` 的，而全局注册是不加 `s` 的。

### 组件和指令的区别

**组件注册的是一个标签，而指令注册的是已有标签里的一个属性**。

在实际开发中我们还是用组件比较多，指令用的比较少。因为指令看起来封装的没那么好。

## 15. Component 组件 props 属性设置

`props` 选项就是设置和获取标签上的属性值的。

### 定义属性并获取属性值

定义属性我们需要用 `props` 选项，加上数组形式的属性名称，例如：`props:[‘here’]`。

在组件的模板里读出属性值只需要用插值的形式，例如`{{ here }}`。

### 属性中带’-‘的处理方式

我们在写属性时经常会加入 `-` 来进行分词，比如：`<fightingstone from-here="China"></fightingstone>`。

这时我们在 `props` 里如果写成 `props:[‘form-here’]` 是错误的，我们必须用小驼峰式写法 `props:[‘formHere’]`。

`javascript` 代码：

    <script type="text/javascript">
        var app = new Vue({
            el:"#app",
            data:{},
            components:{
                "fightingstone":{
                    template:`<div style="color: green"> fightingstone is from {{fromHere}}</div>`,
                    props:['fromHere']
                }
            }
        });
    </script>

### 在构造器里向组件中传值

把构造器中 `data` 的值传递给组件，我们只要进行绑定就可以了。

例子：

	<div id="app">
        <fightingstone :from-here="message"></fightingstone>
    </div>

    <script type="text/javascript">
        var app = new Vue({
            el:"#app",
            data:{
                message: "Harbin China"
            },
            components:{
                "fightingstone":{
                    template:`<div style="color: green"> fightingstone is from {{fromHere}}</div>`,
                    props:['fromHere']
                }
            }
        });
    </script>

## 16. Component 父子组件关系

我们可以在外部引用组件，先声明一个外部组件，再在 `Vue` 实例中进行引用。

父子组件关系：我们可以在一个外部组件中引用另一个外部组件，这两个组件形成父子关系。

注意：**子组件需要在父组件中进行注册**。

例子：

	<div id="app">
        <rocketeerli></rocketeerli>
    </div>

    <script type="text/javascript">
        var addr = {
            template:`<div style="color: yellow">rocketeerli is from China.</div>`
        }
        var rocketeerli_component = {
            template:`
            <div>
                <p style="color: blue">rocketeerli 局部组件</p>
                <addr></addr>
            </div>
            `,
            components:{
                "addr": addr
            }
        };
        var app = new Vue({
            el: "#app",
            data: {},
            components:{
                "rocketeerli":rocketeerli_component
            }
        })
    </script>

## 17. Component 标签

标签是 `Vue` 框架自定义的标签，它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件。

例子：

    <div id="app">
        <component :is="which_component"></component>
        <p><button @click="change_component">Change Component</button></p>
    </div>

    <script type="text/javascript">
        var componentA = {
            template: `<div style="color: red">I'm the componentA</div>`
        };
        var componentB = {
            template: `<div style="color: blue">I'm the componentB</div>`
        };
        var componentC = {
            template: `<div style="color: yellow">I'm the componentC</div>`
        };
        var app = new Vue({
            el:"#app",
            data:{
                which_component: 'componentB'
            },
            components:{
                "componentA": componentA,
                "componentB": componentB,
                "componentC": componentC
            },
            methods:{
                change_component: function(){
                    if(this.which_component == "componentA"){
                        this.which_component = 'componentB';
                    } else if (this.which_component == "componentB"){
                        this.which_component = 'componentC';
                    } else {
                        this.which_component = 'componentA';
                    }
                }
            }
        });
    </script>

## 18. propsData Option 全局扩展的数据传递

`propsData` 不是和属性有关，他用在全局扩展时进行传递数据。

实际我们并比推荐用全局扩展的方式作自定义标签，我们学了组件，完全可以使用组件来做。

例子：

    <header></header>
    <script type="text/javascript">
        var header_a = Vue.extend({
            template:`
                <p>{{message}} - {{a}}</p>
            `,
            data:function(){
                return {
                    message: 'Hello, I am header!'
                }
            },
            props:['a']
        });
        new header_a({propsData:{a:1}}).$mount("header");
    </script>

## 19. computed Option 计算选项

`computed` 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。

例子：

	<div id="app">
        <p>{{new_price}}</p>
        <hr>
        <ul>
            <li v-for="news in revers_news">
                {{news.title}}——{{news.date}}
            </li>
        </ul>
    </div>
    <script type="text/javascript">
        var new_list = [
            {title: '香港特区政府欢迎中央政府支援队协助特区抗疫工作', date:'2020/08/01'},
            {title: '赵一德任陕西代省长，成全国最年轻省级政府“一把手”', date:'2020/08/03'},
            {title: '法国主流媒体传播涉新疆假新闻 中国驻法国大使馆:纯属谎言', date:'2020/08/04'},
            {title: '空军原司令员王海逝世 抗美援朝曾警告美军:再来还打下来', date:'2020/08/02'},
        ]
        var app = new Vue({
            el:"#app",
            data:{
                price: 100,
                new_list: new_list
            },
            computed:{
                new_price:function(){
                    return '￥' + this.price + '元';
                },
                revers_news: function(){
                    return this.new_list.reverse();
                }
            }
        })
    </script>

## 20. Methods Option 方法选项

### methods 中参数的传递

使用方法和正常的 `javascript` 传递参数的方法一样，例子：

	<div id="app">
        <p>{{number}}</p>
        <p><button @click="add(6)">ADD</button></p>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el:"#app",
            data:{
                number: 1
            },
            methods:{
                add:function(num){
                    if(num!=''){
                        this.number+=num;
                    }else{
                        this.number++;
                    }
                }
            }
        })
    </script>

### methods 中的 $event 参数

传递的 `$event` 参数都是关于点击鼠标的一些事件和属性。

例子：

	<div id="app">
        <p>{{number}}</p>
        <p><button @click="add(6, $event)">ADD</button></p>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el:"#app",
            data:{
                number: 1
            },
            methods:{
                add:function(num, event){
                    if(num!=''){
                        this.number+=num;
                    }else{
                        this.number++;
                    }
                    console.log(event);
                }
            }
        })
    </script>

### native 给组件绑定构造器里的原生事件

如何让组件调用构造器里的方法，而不是组件里的方法。就需要用到我们的 `.native` 修饰器了。

**给`vue`组件绑定事件时候，必须加上`native`，不然不会生效**。

### 作用域外部调用构造器里的方法

这种不经常使用，如果你出现了这种情况，说明你的代码组织不够好。

例子：
	
	<button onclick="app.add(3)">外部ADD</button>

## 21. Watch 选项 监控数据

数据变化的监控经常使用。

既可以在内部定义，也可以在外部使用实例属性：

    <div id="app">
        <p>今日温度：{{temperature}} 摄氏度</p>
        <p>穿衣建议：{{suggest}}</p>
        <p>
            <button @click="add_temp">升高温度</button>
            <button @click="sub_temp">降低温度</button>
        </p>
    </div>
    <script type="text/javascript">
        var suggest_list = ["棉衣羽绒服", '夹克长裙', "T 恤短袖"];
        var app = new Vue({
            el:"#app",
            data:{
                temperature: 16,
                suggest: suggest_list[1]
            },
            methods:{
                "add_temp":function(){
                    this.temperature += 6;
                },
                "sub_temp":function(){
                    this.temperature -= 3;
                }
            },
            // 内部选项
            // watch:{
            //     temperature:function(new_val, old_val){
            //         if(new_val >= 26) {
            //             this.suggest = suggest_list[2];
            //         } else if (new_val > 0) {
            //             this.suggest = suggest_list[1];
            //         } else {
            //             this.suggest = suggest_list[0];
            //         }
            //     }
            // }
        });
        // 外部使用实例属性
        app.$watch('temperature', function(new_val, old_val){
                    if(new_val >= 26) {
                        this.suggest = suggest_list[2];
                    } else if (new_val > 0) {
                        this.suggest = suggest_list[1];
                    } else {
                        this.suggest = suggest_list[0];
                    }
                });
    </script>

## 22. Mixins 混入选项操作

### Mixins的基本用法

例子（监测数值变化）：

    <div id="app">
        <p>{{number}}</p>
        <p><button @click="add">ADD</button></p>
    </div>
    <script type="text/javascript">
        var add_console = {
            updated:function(){
                console.log('数据发送变化，变成了：' + this.number);
            }
        }
        var app = new Vue({
            el:"#app",
            data:{
                number: 1
            },
            methods:{
                add:function(){
                    this.number++;
                }
            },
            mixins:[add_console]
        });
    </script>

### mixins 的调用顺序

从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行。

需要注意的是，这并不是方法的覆盖，而是被执行了两边。

### 全局 API 混入方式

我们也可以定义全局的混入，这样在需要这段代码的地方直接引入 `js`，就可以拥有这个功能了。

注意：**全局混入的执行顺序要前于混入和构造器里的方法。**。

## 23. Extends Option 扩展选项

通过外部增加对象的形式，对构造器进行扩展。它和我们上节课的混入非常的类似。

例子：

    <div id="app">
        <p>{{number}}</p>
        <p><button @click="add">ADD</button></p>
    </div>
    <script type="text/javascript">
        var extends_obj = {
            updated:function(){
                console.log('扩展的 updated');
            },
            add:function(){
                console.log('扩展的方法');
                this.number++;
            }
        }
        var app = new Vue({
            el:"#app",
            data:{
                number:1
            },
            methods:{
                add:function(){
                    console.log('原生的方法');
                    this.number++;
                }
            },
            updated:function(){
                console.log("原生的 updated");
            },
            extends:extends_obj
        })
    </script>

注意：**如果扩展的方法与原生的方法重名，扩展的方法是不被执行的**。

`mixins` 与 `Extends`：

1. 同扩展一样，混入如果扩展的方法重名，也是不会被执行的。

2. 扩展只能放一个对象，混入是放一个数组。

### delimiters 选项

`delimiters` 的作用是改变我们插值的符号。`Vue` 默认的插值是双大括号 `{{}}`。但有时我们会有需求更改这个插值的形式。

例子：

	delimiters:['${', '}']

现在我们的插值形式就变成了 `${}`。
