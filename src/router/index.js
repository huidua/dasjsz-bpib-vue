import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// router

Vue.use(Router)


/**
 * 动态导入views中的视图组件
 * <p>参数path会自动去除path中的第一个斜杠</p>
 * @param {String} path 
 * @returns 
 */
// const _import = path => require('@/views/' + (path.indexOf('/') === 0 ? path.substring(1) : path) + '.vue')

// TODO 路由自动生成

let routers = require.context('@/views', true, /\.vue$/i).keys() // 匹配后缀是vue的文件

console.log(routers)
let d = [] ;
routers.forEach(item => {
  console.log(item)
  const routerChild = { // 定义路由对象
    path: item.split('.')[1], 
  }

  d.push(routerChild) // views中视图的路由路径

})
console.log(d)

// =======路由匹配部分====
var globalRoutes = [
  {
    path: '/home',
    name: 'home',// 首页
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/echarts',
    name: 'echarts',// linemark
    component: () => import('@/views/charts/line.vue'),
  },
  {
    path: '/echarts/pie',
    name: 'pie',// pie
    component: () => import('@/views/charts/pie.vue'),
  },
  {
    path: '/',
    name: 'HelloWorld',
    redirect: '/home',
    // component: HelloWorld
  }];


// =======创建路由====
const createRouter = () => new Router({
  mode: 'history', // history模式下，地址规整(不带有#)，但需要后台支持
  routes: globalRoutes
})
const router = createRouter();

// ========路由拦截==========
router.beforeEach((to, from, next) => {
  // TODO 登录验证
  // if(to.path === '/1'){

  //   next({path: '/'})
  // }else{
  //   next()
  // }
  next()
})

router.afterEach((to, from) => {

})

// ============暴露出的方法======
/***
 * 路由重载
 */
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // the relevant part
}


export default router

