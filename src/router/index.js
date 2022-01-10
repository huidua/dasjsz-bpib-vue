import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// router

Vue.use(Router)


// =======路由匹配部分====
var globalRoutes = [
  {
    path: '/home',
    name: 'home',// 首页
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/',
    name: 'HelloWorld',
    redirect:'/home',
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

router.afterEach((to, from)=>{

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

