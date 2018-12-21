LESS基础语法
## LESS中的变量 ##
- Mixin混合
 - Parametric Mixins 带参数的函数
 - Mixin Guards 设置条件
- Parent Selectors 当前选择器和父选择器
- Loops 递归调用
- Merge 多样式效果

## Css 预编译语言-LESS

### 作用
> css层叠样式表，是标记语言，不是编程语言；
所有预编译CSS语言(less/sass)都是赋予了css面向对象思想

###LESS的编译
> Less 叫预编译css:写好的LEss代码浏览器是不能渲染的，需要我们
把它编译成能渲染的css

- 开发环境
> 导入Less插件 less-2.5.3.min.js
> 每一次加载页面，都需要导入less.js，并把less编译为css，生产环境需要把写好的less编译为正常的css后再上线
```
<link rel='stylesheet/less' href=''>
<script src='less.min.js'>
```
- 生产环境 服务器环境
> 使用NOde编译
```
安装less模块 npm install less -g
lessc 1.less 11.css 编译
lessc 1.less 11.min.css -x 编译压缩
```
> 编译工具

### LESS基础语法
- 设置变量使用@
- 在less中只要设置了一个样式类，就可以把它称为一个方法，其他地方需要用到这些样式，直接.类名 调用即可（原理:把当前样式类中的代码原封不动copy一份过去）
- 不加()是普通样式类，也是封装的一个函数，编译的时候，这个样式类中的代码依然跟着编译
- 加()仅仅是封装的函数，编译的时候不编译函数
```
@a:1;
@img-url: '../img/pub';
url("@{img-url}/xx.png")
.box
.box()//加()不编译
unit(@res,px)//加单位除单位？
```

### 作用域
- 变量连值提升

### extend
- 让当前类和继承类公用一套样式类，编译为群组选择器方式
- .box,.pub
```
.pub{
    width:100px;
    height:100px;
    background:red;
}
.box:extend(.pub){
    background:green;
}
.box{
    &:extend(.pub,.com);
    background:green;
}
 &:extend(.mark)
 &:extend(.box .mark)

```

