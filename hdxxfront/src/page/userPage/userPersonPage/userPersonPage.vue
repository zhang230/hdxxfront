<template>
  <div style="margin-top: 50px ;margin-left: 20%">
    <el-card class="box-card" shadow="hover" style="width:800px;height:600px ">
      <div slot="header" class="clearfix">
        <span>个人空间</span>
       <el-button style="float: right; padding: 3px 0" @click="goBack()" type="text">退出</el-button>
      </div>
      <el-container style="height: 500px">
        <el-aside width="150px">
          <div>
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div style="margin-left: 25px;margin-top:80px" class="block">
                  <el-avatar :size="100" :src="circleUrl"></el-avatar>
                </div>
              </div>
            </el-col>
          </div>
          <div>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-aside>
        <el-main width="300px">
            <information/>
        </el-main>
      </el-container>
    </el-card>
  </div>
</template>

<script>
import information from "./components/information.vue"
export default {
  name: "userPerson",
  components: {
    information
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        imageUrl: ''
    };
  },
   methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      goBack(){
         this.$router.push('/userMain');
      }
    }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.el-aside {
  background-color: #bed5ee;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #8ae6ad56;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* 图片上传 */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }

  body{
  background-color: #e6e48a56;
}
</style>
