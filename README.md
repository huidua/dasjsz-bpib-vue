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


# TODO：
1、大屏组件（1、大屏组件，如饼图、柱状图）`参考：vue-element-adminbyvue-cli4.0项目@/components/Charts/`
2、实现大屏的缩放效果，当屏幕小的时候给最外层容器`style="transform: scaleX(1) scaleY(0.978704);"`的样式，容器内的各个图表外层也需要包裹一层容器，并且使用绝对定位，给之后的拖拽实现做铺垫。

# echarts 
版本比较：https://zhuanlan.zhihu.com/p/349299200
echarts封装：https://www.cnblogs.com/zhangnan35/p/12680038.html (TODO：重点之后要去封装)

业务数据和样式配置数据分离，我只需要传入业务数据就行了
它的大小要完全由使用者决定
不会因为缩放出现变形问题，而是能很好地自适应
有时候某个图表的样式可能有点不一样，希望能保留自己配置样式的灵活性
无论传入什么数据都能正确地更新视图
如果我传入的数据为空，能展示一个空状态


## echarts实现方案1（似阿里DataV，大屏数据展示，但这个是开源免费的）
来源：http://www.zhe94.com/631.html
http://datav.jiaminghi.com/
## echarts实现方案2（百度Sugar）

# lodash 安装
``` 
npm install lodash --save
```

# VUE
## 组件参数传递
https://blog.csdn.net/liyunkun888/article/details/83269692


# Router 
Vue Router: https://router.vuejs.org/zh/
## 路由自动化实现
> https://www.cnblogs.com/mianbaodaxia/p/11452123.html

> // 动态路径参数 以冒号开头
> { path: '/user/:id', component: User }
> // 可获取参数
> {{ this.$route.params.id }} 
> 除了params，还提供了其他的有用信息 [api文档](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1)
> 当路由参数发生改变是，可以做监听 watch (监测变化) $route 对象  [api文档](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96)
>   // 会匹配以 `/user-` 开头的任意路径
>  path: '/user-*'

> 当路由有name时候可以根据name跳转路由 https://router.vuejs.org/zh/guide/essentials/named-routes.html

> 确保 next 函数在任何给定的导航守卫中都被严格调用一次。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错。这里有一个在用户未能验证身份时重定向到 /login 的示例：[全局前置守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)
``` javascript
// BAD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next()
})

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
```

> 路由嵌套 ：[路由嵌套](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)



# webpack
https://webpack.docschina.org/guides/getting-started/

# git

git config list
git config user.name

git add .
git commit -m ''
## 问题
warning: LF will be replaced by CRLF in README.md.
The file will have its original line endings in your working directory
## 原因
原因是路径中存在 / 的符号转义问题，false就是不转换符号默认是true，相当于把路径的 / 符号进行转义，这样添加的时候就有问题
## 解决办法
但是我不选择解决
git config --global core.autocrlf false


# 一篇关于DDD看法的文章
https://www.jdon.com/43715


# 什么是 Fuse.js？
Fuse.js 是一个功能强大、轻量级的模糊搜索库，零依赖。
https://fusejs.io/


# Web API 接口参考文档
[MDN Web Docs Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API)