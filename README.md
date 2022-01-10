# dasjsz-bpib-vue

> 大数据思政-大屏展示-Vue项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# vue拖动组件demo，这个项目之后可以参考。
视频：https://www.bilibili.com/video/BV183411q7nP/?spm_id_from=autoNext
github地址：https://github.com/mrzhouxl/comRenderDemo

### 具体的拖动实现方案参考vue-element-adminbyvue-cli4.0项目，有个directive指令文件夹中有相关拖动的指令v-el-drag-dialog，不过好像需要基于element-ui实现


今日任务：
1、大屏组件（1、大屏组件，如饼图、柱状图）`参考：vue-element-adminbyvue-cli4.0项目@/components/Charts/`
2、git管理

git config list
git config user.name


git add .
git commit -m ''

# echarts 
版本比较：https://zhuanlan.zhihu.com/p/349299200
echarts封装：https://www.cnblogs.com/zhangnan35/p/12680038.html

业务数据和样式配置数据分离，我只需要传入业务数据就行了
它的大小要完全由使用者决定
不会因为缩放出现变形问题，而是能很好地自适应
有时候某个图表的样式可能有点不一样，希望能保留自己配置样式的灵活性
无论传入什么数据都能正确地更新视图
如果我传入的数据为空，能展示一个空状态


# VUE
## 组件参数传递
https://blog.csdn.net/liyunkun888/article/details/83269692



# git

## 问题
warning: LF will be replaced by CRLF in README.md.
The file will have its original line endings in your working directory
## 原因
原因是路径中存在 / 的符号转义问题，false就是不转换符号默认是true，相当于把路径的 / 符号进行转义，这样添加的时候就有问题
## 解决办法
但是我不选择解决
git config --global core.autocrlf false