<template>
      <el-container>
          <!-- 左侧导航 -->
        <el-aside style="width: 15%;" >
            <div class="el-aside-logo"><img src="" alt=""></div>
               <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    style="width: 100%;"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#333F51"
                    text-color="#fff"
                    active-text-color="#ffd04b" router>
                <el-menu-item index="/teacher/teacherClassManagerPage/classInfoList" @click="changePath('课程管理')">
                    <i class="el-icon-menu"></i>
                    <span slot="title" >课程管理</span>
                </el-menu-item>
                 <el-menu-item index="/teacher/teacherClassManagerPage/distributionInfoList"  @click="changePath('分配管理')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">分配管理</span>
                </el-menu-item>
                 </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <el-breadcrumb separator="/" style="margin-top: 2%;">
                <el-breadcrumb-item >/讲师</el-breadcrumb-item>
                <el-breadcrumb-item>{{littlepath}}</el-breadcrumb-item>
                
                </el-breadcrumb>
                <div class="teacher-logout">
                    teacher&nbsp;&nbsp;<el-button type="primary" style="background-color: #B3C0D1; border: 1px solid white;" @click="toMainPage()">退出</el-button>
                </div>
            </el-header>
            <el-main style="margin: 0%;padding: 0%;">
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
</template>

<script>
import classInfoList from './components/classInfoList.vue'
export default {
      name:'teacherClassManagerPage',
      data(){
          return{
             littlepath:'/课程管理'
          }
      },
      components:{
         classInfoList
      },
      methods:{
        changePath(value){
            this.littlepath='/'+value;
        },
        toMainPage(){
            this.$router.push({path:'/'});
        }
      },
      created(){
         this.$router.push({path: '/teacher/teacherClassManagerPage/classInfoList'});
      }
}
</script>

<style scoped>
.teacher-logout{
    color:white;
}
.el-aside-logo{
    width: 100%;
    height: 8%;
    background-color: red;
}
.el-menu-vertical-demo{
    background-color: #333F51;
}
.teacher-logout{
    position: absolute;
    right: 0.5%;
    top: 0%; 
}
.el-container{
    width: 100%;
    height: 100%;
}
   .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    height: 100%;
    background-color: #333F51;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>