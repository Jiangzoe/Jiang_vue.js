import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'
import Error from '@/components/Error'



Vue.use(Router)

export default new Router({
  // mode有两个数值，hash/history
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
      // alias在这里不管用
      // alias:'/Home1'
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component:params,
      // beforeEnter:(to,from,next) => {
      //   console.log(to);
      //   console.log(from);
      //   // next 允许跳转
      //   // next(true)
      //   // 跳转到根目录
      //   // next('/')
      //   next();
      // }
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/hi1',
      component:Hi1,
      alias:'/jiang'
    },
    // 404页面
    {
      path:'*',
      component:Error
    }
  ]
})
