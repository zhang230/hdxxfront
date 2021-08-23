<template>
  <div class="class-info-add">
      <el-button  type="primary" @click="changeClassInfoAdd_Var()" class="el-btn-close">关闭</el-button>
      <el-button type="primary" @click="subMitAllIfo()" class="el-btn-submit">提交</el-button>
       <el-form class="el-form-courseinfo" ref="ruleForm">
           <!-- :auto-upload="false" -->
           <el-upload
                    class="avatar-uploader"
                    style="border: 1px solid #FFFFFF;"
                    action=""
                    :show-file-list="false"
                    :on-change="onChangeImage"
                    label="课程头像"
                    :limit="1"
                    accept="image/jpeg,image/jpg,image/png">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="class-info-icon-tishi">课程头像</div>
            <div class="class-info-input" >
                <el-row >
                        <el-col :span="12">
                        <el-form-item label="课程名称" prop="name">
                        <el-input type="text" class="form-control" placeholder="课程名称" v-model="formName"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="课程类别" prop="user_nickname">
                        <el-input type="text" class="form-control" placeholder="课程类别" v-model="formName"></el-input>
                        </el-form-item>
                    </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="课时" prop="real_name">
                            <!-- <label>真实姓名</label> -->
                        <el-input type="text" class="form-control" placeholder="课时" v-model="formName"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="课程状态" prop="score">
                            <!-- <label>积分</label> -->
                        <el-input type="text" class="form-control" placeholder="课程状态" v-model="formName"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="开课时间" prop="phone">
                            <!-- <label>手机号码*</label> -->
                        <el-input type="text" class="form-control" placeholder="开课时间" v-model="formName"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        
                        <el-col :span="12">
                        <el-form-item label="课程所属" prop="address">
                            <!-- <label>地址</label> -->
                        <el-input type="text" class="form-control" placeholder="课程所属" v-model="formName"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="课程来源*" prop="email">
                            <!-- <label>邮箱地址*</label> -->
                        <el-input type="text" class="form-control" placeholder="课程来源" v-model="formName"></el-input>
                        </el-form-item>
                        </el-col>
                        
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="章名称" prop="duty">
                            <!-- <label>职务</label> -->
                        <el-input type="text" class="form-control" placeholder="章名称" v-model="formName"></el-input>
                        </el-form-item>
                    </el-col>
                    </el-row>
                  

            </div>
                <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :limit="5"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取视频(最多5个)</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success">(:</el-button>
                </el-upload>
        </el-form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imageUrl: '../../../assets/touxiang.png',
            input:'',
            // fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
        }
    },
    methods:{
        changeClassInfoAdd_Var(){
            this.$emit("changeClassInfoAdd_Var",false);
        },
        onChangeImage(file,fileList) {
            console.log("上传之前需要检查一下: "+file.raw.type);
            const isJPG = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/jpg' || file.raw.type === 'image/png');
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
             return false;
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            return false;
            }
      }
    }
}
</script>

<style scoped>
.upload-demo{
    position: absolute;
    top: 20%;
    left: 65.5%;
} 
.el-row{
    margin-left: 5%;
    margin-top: 2%;
}
.el-input{
    position: absolute;
    left: 20%;
    width: 40%;
}
.class-info-input{
    margin-left: 22%;
    margin-top: 2%;
    width: 70%;
    height: 80%;
    /* background-color: blue; */
}
.class-info-icon-tishi{
    position: absolute;
    left: 15%;
    top: 25%;
}
.avatar-uploader{
    position: absolute;
    left: 10%;
    top: 10%;
    height: 30%;
}
.el-form-courseinfo{
    position: absolute;
    margin-left: 10%;
    margin-top: 2%;
    width: 80%;
    height: 90%;
    border-radius: 10%;
    background: rgba(21, 125, 245, 0.5) linear-gradient(to right, rgba(104, 219, 214, 0.8), rgba(129, 228, 231, 0.7));
}
.el-btn-close{
    position: absolute;
    top: 88%;
    right: 10%;
    width: 10%;
    /* background-color: black; */
    z-index: 1;
}
.el-btn-submit{
    position: absolute;
    top: 88%;
    right: 22%;
    width: 10%;
    /* background-color: black; */
    z-index: 1;
}
.class-info-add{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(92, 196, 228, 0.5) linear-gradient(to right, rgba(0, 238, 255, 0), rgba(211, 114, 235, 0.4));
    z-index: 2;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #6eddf8;
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>