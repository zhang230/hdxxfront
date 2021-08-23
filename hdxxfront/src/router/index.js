import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/video',
    //   name: 'vedio',
    //   component: ()=>import('../page/userPage/userLookVideo/components/video.vue')
    // },
    // {
    //     path: '/teacherUpdate',
    //     name: 'teacherUpdate',
    //     component: ()=>import('../page/teacherPage/teacherClassManagerPage/components/teacherUpdateClassPage.vue')
    // },
    // {
    //   path: '/teacher',
    //   name: 'teacher',
    //   component: ()=>import('../page/teacherPage/teacherClassManagerPage/teacherClassManagerPage.vue')
    // },
    {
      path: '/',
      name: 'mainPage',
      component: ()=>import('../page/mainPage/mainPage.vue')
    },
    {
      path: '/admin/adminUserManagerPage',
      name: 'adminUserManagerPage',
      component: ()=>import('../page/adminPage/adminUserManagerPage/adminUserManagerPage.vue'),
      children:[
        {
          path: '/admin/adminUserManagerPage/userInfoList',
          name: 'userInfoList',
          component: ()=>import('../page/adminPage/adminUserManagerPage/components/userInfoList.vue')
        },
        {
          path: '/admin/adminUserManagerPage/classInfoList',
          name: 'classInfoList',
          component: ()=>import('../page/adminPage/adminUserManagerPage/components/classInfoList.vue')
        }
      ]
    },
    {
      path: '/teacher/teacherClassManagerPage',
      name: 'teacherClassManagerPage',
      component: ()=>import('../page/teacherPage/teacherClassManagerPage/teacherClassManagerPage.vue'),
      children:[
        {
          path: '/teacher/teacherClassManagerPage/classInfoList',
          name: 'classInfoList',
          component: ()=>import('../page/teacherPage/teacherClassManagerPage/components/classInfoList.vue')
        },
        {
          path: '/teacher/teacherClassManagerPage/distributionInfoList',
          name: 'distributionInfoList',
          component: ()=>import('../page/teacherPage/teacherClassManagerPage/components/distributionInfoList.vue')
        }
      ]
    },
    {
       path: '/user/loginPage',
       name: 'loginPage',
       component: ()=>import('../page/mainPage/components/loginPage.vue')
    },
    {
      path: '/user/userLookVideo',
      name: 'userLookVideo',
      component: ()=>import('../page/userPage/userLookVideo/userLookVideo.vue')
    },
    {
      path: '/teacher/teacherClassManagerPage',
      name: 'teacherClassManagerPage',
      component: ()=>import('../page/teacherPage/teacherClassManagerPage/teacherClassManagerPage.vue')
    }
  ]
  
})
