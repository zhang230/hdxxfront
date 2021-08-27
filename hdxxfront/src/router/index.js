import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router=new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: () => import('../page/mainPage/mainPage.vue')
    },
    {
      path: '/admin/adminUserManagerPage',
      name: 'adminUserManagerPage',
      component: () => import('../page/adminPage/adminUserManagerPage/adminUserManagerPage.vue'),
      children: [
        {
          path: '/admin/adminUserManagerPage/userInfoList',
          name: 'userInfoList',
          component: () => import('../page/adminPage/adminUserManagerPage/components/userInfoList.vue')
        },
        {
          path: '/admin/adminUserManagerPage/classInfoList',
          name: 'classInfoList',
          component: () => import('../page/adminPage/adminUserManagerPage/components/classInfoList.vue')
        }
      ]
    },
    {
      path: '/teacher/teacherClassManagerPage',
      name: 'teacherClassManagerPage',
      component: () => import('../page/teacherPage/teacherClassManagerPage/teacherClassManagerPage.vue'),
      children: [
        {
          path: '/teacher/teacherClassManagerPage/classInfoList',
          name: 'classInfoList',
          component: () => import('../page/teacherPage/teacherClassManagerPage/components/classInfoList.vue')
        },
        {
          path: '/teacher/teacherClassManagerPage/distributionInfoList',
          name: 'distributionInfoList',
          component: () => import('../page/teacherPage/teacherClassManagerPage/components/distributionInfoList.vue')
        }
      ]
    },
    {
      path: '/user/loginPage',
      name: 'loginPage',
      component: () => import('../page/mainPage/components/loginPage.vue')
    },
    {
      path: '/user/userLookVideo',
      name: 'userLookVideo',
      component: () => import('../page/userPage/userLookVideo/userLookVideo.vue')
    },
    {
      path: '/teacher/teacherClassManagerPage',
      name: 'teacherClassManagerPage',
      component: () => import('../page/teacherPage/teacherClassManagerPage/teacherClassManagerPage.vue')
    },
    {
      path: '/userMain',
      name: 'userMain',
      component: () => import('../page/userPage/userMainPage/userMainPage.vue'),
    },
    {
      path: '/userMain/userPerson',
      name: 'userPerson',
      component: () => import('../page/userPage/userPersonPage/userPersonPage.vue'),
    }
  ]

})

//使用router的全局守卫  来拦截非法访问页面
router.beforeEach((to,from,next) =>{
  //to 是将要访问的路径
  //from 从哪里跳转来的
  //next 是一个函数，表示放行

    const tokenStr = window.sessionStorage.getItem("user_id");
    if(to.path == "/"){
       return next();
    }else{
       if(tokenStr == undefined || tokenStr == null){
         //如果没有登陆就访问其他页面，那么就跳转到登陆页面去
           return next("/");
       }else{
           return next();
       }
    }
})

export default router