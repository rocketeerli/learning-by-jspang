# 快餐店收银系统

## 01. `MockPlus` 把想法画出来

[下载 `MockPlus`](https://www.mockplus.cn/download/mockplus)

然后按照教程制作页面。第一次接触 `MockPlus`，感觉有点小酷啊。

页面视图布局参见 `项目预览图.mp` 文件。

## 02. `Vue-cli` 搭建项目

在当前目录下创建项目：

	vue init webpack

然后更改首页的样式和内容。

这块没啥要说的。

## 03. 项目图标 `Iconfont`

[IconFont](https://www.iconfont.cn/) 是阿里巴巴的矢量图标库。

挑选图标->添加到购物车->添加至项目->生成链接->在项目中导入链接->使用图标

	<i class="iconfont icon-shouji"></i>

注意：

1. 应用不限于 `i标签`。

2. `clss` 必须包含 `iconfont`。

3. 再次增加标签时，需要更新链接。
