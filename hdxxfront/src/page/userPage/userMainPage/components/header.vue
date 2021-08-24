<template>
 <div>
  <div
    style="
      height: 80px;
      margin-left: auto;
      margin-right: auto;
      line-height: 50px;
      display: flex;
      margin-top:15px;
    "
  >
    <div style="width: 240px">
      <div class="nav-title">
        <img src="" alt="" />
      </div>
    </div>
    <div style="flex: 1">
      <el-input
        v-model="search"
        style="width: 250px"
        placeholder="请输入内容"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" @click="search()"
        >搜索</el-button
      >
    </div>
    <div style="width:300px margin-right:50px">
      <el-button type="primary" @click="goToPerson()" round>个人页面</el-button>
      <el-button style="margin-right:50px" @click="goToMain">退出</el-button>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    search() {},
    goToPerson(){
        this.$router.push('/userMain/userPerson');
    },
    goToMain(){
        this.$router.push('/');
    }
  },
};
</script>

<style>
</style>