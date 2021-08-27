<template>
  <div class="nav">
    <div class="nav-title">
        <img src="" alt="">
    </div>
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#1988f7"
    menu-trigger="hover"
    style="width: 83%;background-color: #545c64;height: 100%;">
    <el-menu-item index="1"  style="width: 10%; text-align: center;">首页</el-menu-item>
    <el-submenu index="2">
        <template slot="title">课程培训</template>
        <el-menu-item index="2-1">Java大数据</el-menu-item>
        <el-menu-item index="2-2">前端全栈</el-menu-item>
        <el-menu-item index="2-3">信息安全</el-menu-item>
        <el-menu-item index="2-4">UI设计</el-menu-item>
        <el-menu-item index="2-5">Python</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">课程视频</el-menu-item>
    <el-menu-item index="4">考试认证</el-menu-item>
    <el-menu-item index="5">项目库</el-menu-item>
     <el-submenu index="6">
        <template slot="title">学员动态</template>
        <el-menu-item index="6-1">知了圈</el-menu-item>
        <el-menu-item index="6-2">学员作品</el-menu-item>
        <el-menu-item index="6-3">知币兑换</el-menu-item>
        <el-menu-item index="6-4">夏/东令营</el-menu-item>
        <el-menu-item index="6-5">校招护航</el-menu-item>
    </el-submenu>
    <el-menu-item index="7">企业联盟</el-menu-item>
    <el-menu-item index="8">VIP学习中心</el-menu-item>
    <el-menu-item index="9">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    display: flex;
    width: 100%;
    height: 9%;
    background-color: #545c64;
}
.nav-title{
    background: #545c64;
    width: 13%;
}
</style>