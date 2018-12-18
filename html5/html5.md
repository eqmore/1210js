> HTML 超文本标记语言（文字，图片，音视频）
> XHTML HTML比较规范严谨的一代版本
```
<?xml>
<!doctype html >

```
> XML 可扩展标记语言（HTML中使用的标签都是W3c标准中规定的，xml允许扩展标签）
  作用，不是写页面结构，清晰明了的展示数据结构
> ajax async javascript and xml
> html5 当前html最新的一代，增加一些有助于开发的内容，对原有规范的修改调整很少
```
<!DOCTYPE html>
<html lang='en'>
    <head>
    <meta charset='utf-8'>
<html>
```
- GBK (GB2312)中国编码
- utf-8 国际统一编码
- lang='en' 声明页面的语言模式,如果页面中出现了英文单词，浏览器会自主发起是否翻译

### HTML5提供的新语法规范
** 对原有语义化标签的升级 **
> 语义化标签： 每一个html标签都有自己特殊的含义，搭建页面结构的时候，让合理的标签做合适的事情
> html5 中新增语义化标签
```
article 文章区域
main 主体内容区域
header 头部区域
footer 尾部区域
section 普通区域，用来做区域划分
figure 配图区域
figcaption 配图说明
aside 一般用来打广告
nav 导航区域
```
> h5  新增标记标签
```
mark 高亮显示文本
time 标记日期文本
```
> h5中对原有标签调整
```
strong 加粗->重点朗读
small 变小->附属细则
hr 直线->分割线
```
> h5删除
```
font 
center
```
> ie6-8不能识别h5语义化标签，无法设置具体样式
- 在当前页面的head中,css后,导入一个js插件 html5.min.js
用来把页面中所有用到的不兼容的h5标签进行兼容处理
1 替换标签
2 css 标签选择器 也替换

#### 条件注释 严格区分大小写
```
<!-- [if lt IE 9]>
<script src="js/html5.min.js"></script>
<![endif]-->
```

** H5对表单元素升级 ** 
> from 
> input : text password button submit reset file hidden radio checkbox
> button 
> select
> label
> textarea

```
<input type="radio" name='sex' id='man' > <label for='man'></label>
```
> label有for属性，只想对应表单元素id,操作label相当于操作响应表单元素，多用在单选复选框
> submit有默认行为 跳转到action对应地址
> select selected
> checkbox checked

** 对于表单升级 **
> input新类型 type search email tel number range color date time
> [优势]
- 使用合适类型，移动开发的时候可以调取出最符合输入内容格式的虚拟键盘
- 部分类型提供了表单验证
- email js 通过checkValidity()或 css :valid 设置样式
- placeholder
```
<input type='text' id='department' list='departmentlist'>
<datalist id='departmentlist'>//做了筛选
<option value='a'>a</option>
<option value='b'>b</option>
</datalist>
```
> h5针对表单元素升级的部分，在IE低（有的IE9 10)都不兼容，而且没办法处理，
    所以移动端用新特性，pc依然延续传统的操作方法

** h5 其他新增内容 **
> 增加了新的媒体解决方案
> 音频: audio video
> canvas
- echarts 基于canvas开发的

> 提供了很多强大的js api 
- application programming interface应用程序接口

`本地存储` 物理空间 （缓存是虚拟空间）
- 实现多页面之间信息共享
- 非登录态存在本地 登录态同步到服务器上
- 数据的2级存储时效1分钟？
> webStorage 
> localStorage 本地信息存储
> sessionStorage 本地会话存储



`获取本机地理位置`
> 精度、纬度、精准度,再结合第三方地图

`提供了新的通信方式: websocket`
> 想要实现实时通讯类的产品，基本上现在都是基于socket.id这个框架完成的

`提供操作收集硬件的API`
> 调取手机的重力感应器，实现摇一摇，或者实现一些小游戏
> 调取手机的摄像头或者通讯录等
> 不是所有手机浏览器都支持，即使支持实现效果也不理想（不稳定、卡顿）

`h5离线缓存`

Mainifest 离线缓存
> 第一次联网请求完成页面，把信息缓存到本地，下一次即使断网的情况下，也可以看到上一次信息


IndexedDB 本地数据库

