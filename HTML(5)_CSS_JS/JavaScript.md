# JavaScript 入门篇

## 第1章 请做好准备

### 代码位置

可以将 `JavaScript` 代码放在 `html` 文件中任何位置，但是我们一般放在网页的 `head` 或者 `body` 部分。

* 放在 `<head>` 部分:

	最常用的方式是在页面中 `head` 部分放置 `<script>` 元素，浏览器解析 `head` 部分就会执行这个代码，然后才解析页面的其余部分。

* 放在 `<body>` 部分:

	`JavaScript` 代码在网页读取到该语句的时候就会执行。

注意：

`javascript` 作为一种脚本语言可以放在html页面中任何位置，但是浏览器解释html时是按先后顺序的，所以前面的script就先被执行。

比如进行页面显示初始化的 `js` 必须放在 `head` 里面，因为初始化都要求提前进行（如给页面`body`设置`css`等）；而如果是通过事件调用执行的`function`那么对位置没什么要求的。

### 变量

例子：

	var mynum = 6;

变量虽然也可以不声明，直接使用，但不规范，需要先声明，后使用。

### 函数

语法：

	function 函数名()
	{
		函数代码;
	}

## 第2章 请和我互动（常用互动方法）

### 输出内容（document.write）

例子：

	<script type="text/javascript">
		var mystr="我是";
		var mychar="JavaScript";
		document.write(mychar + "<br />");
		document.write(mystr + mychar + "的忠实粉丝!");
	</script>

### 对话框

#### 警告（alert 消息对话框）

语法:

	alert(字符串或变量);  

注: 

1. `alert` 弹出消息对话框(包含一个确定按钮)。

2. 在点击对话框"确定"按钮前，不能进行任何其它操作。

3. 消息对话框通常可以用于调试程序。

#### 确认（confirm 消息对话框）

`confirm` 消息对话框通常用于允许用户做选择的动作，如：“你对吗？”等。弹出对话框(包括一个确定按钮和一个取消按钮)。

语法:

	confirm(str);

参数说明:

	str：在消息对话框中要显示的文本
	返回值: Boolean值

**注: 消息对话框是排它的，即用户在点击对话框按钮前，不能进行任何其它操作。**

#### 提问（prompt 消息对话框）

`prompt` 弹出消息对话框,通常用于询问一些需要与用户交互的信息。弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）。

语法:

	prompt(str1, str2);

参数说明：

	str1: 要显示在消息对话框中的文本，不可修改
	str2：文本框中的内容，可以修改

返回值:

	点击确定按钮，文本框中的内容将作为函数返回值
	点击取消按钮，将返回null

**注:在用户点击对话框的按钮前，不能进行任何其它操作。**

### 窗口

#### 打开新窗口（window.open）

`open()` 方法可以查找一个已经存在或者新建的浏览器窗口。

语法：

	window.open([URL], [窗口名称], [参数字符串])

参数说明:

* URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。

* 窗口名称：可选参数，被打开窗口的名称。
    
	1. 该名称由字母、数字和下划线字符组成。
    
	2. "_top"、"_blank"、"_self"具有特殊意义的名称。

		_blank：在新窗口显示目标网页
		_self：在当前窗口显示目标网页
		_top：框架网页中在上部窗口中显示目标网页

	3. 相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
    
	4. name 不能包含有空格。

* 参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。

#### 关闭窗口（window.close）

用法：

	window.close();   //关闭本窗口
	<窗口对象>.close();   //关闭指定的窗口
	
## 第3章 你也有控制权（DOM操作）

### 通过ID获取元素

语法:

	document.getElementById("id") 

### innerHTML 属性

`innerHTML` 属性用于获取或替换 `HTML` 元素的内容。

语法:

	Object.innerHTML
	
例子：

	<script type="text/javascript">
		var mychar=document.getElementById("con");
		document.write("原标题:"+mychar.innerHTML+"<br>"); //输出原h2标签内容
		mychar.innerHTML = "Hello world!"
		document.write("修改后的标题:"+mychar.innerHTML); //输出修改后h2标签内容
	</script>

### 改变 HTML 样式

语法:

	Object.style.property=new style;
	
例子：

	<script type="text/javascript">
		var mychar= document.getElementById("con");
		mychar.style.color = "red";
		mychar.style.backgroundColor = "#CCC";
		mychar.style.width = "300px";
	</script>

### 显示和隐藏（display属性）

语法：

	Object.style.display = value

例子：

	<script type="text/javascript"> 
        function hidetext()  
		{  
		var mychar = document.getElementById("con");
        mychar.style.display = "none";
		}  
		function showtext()  
		{  
		var mychar = document.getElementById("con");
        mychar.style.display = "block";
		}
    </script> 

### 控制类名（className 属性）

`className` 属性设置或返回元素的 `class` 属性。

语法：

	object.className = classname

作用:

1. 获取元素的 `class` 属性

2. 为网页内的某个元素指定一个 `css` 样式来更改该元素的外观


