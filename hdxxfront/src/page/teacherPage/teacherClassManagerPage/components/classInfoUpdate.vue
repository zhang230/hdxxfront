<template>
    <div class="class-info-update">
       <el-button type="primary" @click="changeClassInfoUpdate_Var()" class="el-btn-close">关闭</el-button>
         <el-button type="primary" @click="submitAllIfo()" class="el-btn-submit">提交</el-button>
       <el-form class="el-form-courseinfo" ref="ruleForm">
           <!-- :auto-upload="false" -->
           <!-- <el-upload
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
            <div class="class-info-icon-tishi">课程头像</div> -->
            <div class="class-info-input" >
                <el-row >
                        <el-col :span="12">
                        <el-form-item label="课程名称" prop="name">
                        <el-input type="text" class="form-control" placeholder="课程名称" v-model="teacherCourseInfo.course_name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="课程类别" prop="user_nickname">
                        <el-input type="text" class="form-control" placeholder="课程类别" v-model="teacherCourseInfo.course_category"></el-input>
                        </el-form-item>
                    </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="课时" prop="real_name">
                            <!-- <label>真实姓名</label> -->
                        <el-input type="text" class="form-control" placeholder="课时" v-model="teacherCourseInfo.course_time"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="课程状态" prop="score">
                            <!-- <label>积分</label> -->
                        <el-input type="text" class="form-control" placeholder="课程状态" v-model="teacherCourseInfo.course_check_status"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="开课时间" prop="phone">
                            <!-- <label>手机号码*</label> -->
                        <el-input type="text" class="form-control" placeholder="开课时间" v-model="teacherCourseInfo.course_open_time"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col  :span="12">
                        <el-form-item label="视频名字" prop="phone" disabled>
                            <!-- <label>手机号码*</label> -->
                        <el-input type="text" class="form-control"  placeholder="视频名字" :title="teacherCourseInfo.course_src_path" v-model="teacherCourseInfo.course_src_path"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        
                        <el-col :span="12">
                        <el-form-item label="课程所属" prop="address">
                            <!-- <label>地址</label> -->
                        <el-input type="text" class="form-control" placeholder="课程所属" v-model="teacherCourseInfo.course_belong_to"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="课程来源*" prop="email">
                            <!-- <label>邮箱地址*</label> -->
                        <el-input type="text" class="form-control" placeholder="课程来源" v-model="teacherCourseInfo.course_origin"></el-input>
                        </el-form-item>
                        </el-col>
                        
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="章名称" prop="duty">
                            <!-- <label>职务</label> -->
                        <el-input type="text" class="form-control" placeholder="章名称" v-model="teacherCourseInfo.course_zhang_name"></el-input>
                        </el-form-item>
                    </el-col>
                    </el-row>
                  

            </div>
              
        </el-form>
    </div>
</template>

<script>
export default {
     props:['teacherCourseInfo'],
     data(){
         return{
            imageUrl: '../../../assets/touxiang.png',
            input:'',
         }
     },
     methods:{
       changeClassInfoUpdate_Var(){
           this.$emit("changeClassInfoUpdate_Var",false);
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
        },
        submitAllIfo(){
                let _this=this;
                this.$http.put('/teacher/courseVideoInfoUpdate',{
                    user_id: this.teacherCourseInfo.user_id,
                    course_id:this.teacherCourseInfo.course_id,
                    chapter_id: this.teacherCourseInfo.chapter_id,
                    course_name: this.teacherCourseInfo.course_name,
                    course_category: this.teacherCourseInfo.course_category,
                    course_time: this.teacherCourseInfo.course_time,
                    course_check_status: this.teacherCourseInfo.course_check_status,
                    course_open_time: this.teacherCourseInfo.course_open_time,
                    course_src_path: this.teacherCourseInfo.course_src_path,
                    course_belong_to: this.teacherCourseInfo.course_belong_to,
                    course_origin: this.teacherCourseInfo.course_origin,
                    course_zhang_name: this.teacherCourseInfo.course_zhang_name,
                    course_jie_name: this.teacherCourseInfo.course_jie_name
                }).then(function(res){
                    //console.log(res);
                     let data=res.data;
                     if(data.msg=="操作成功"){
                         _this.$message({
                             message: data.msg,
                             type:'warning'
                         })
                     }
                  }).catch(function(err){
                    console.log(err)
                  })
        }
     },
     created(){
        //  console.log(this.teacherCourseInfo);
     }
}
</script>

<style scoped>
/* .class-info-update{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 0, 34, 0.5);
    z-index: 2;
} */
.upload-demo{
    position: absolute;
    top: 30%;
    left: 65.5%;
} 
.el-row{
    margin-left: 8%;
    margin-top: 2%;
}
.el-input{
    position: absolute;
    left: 20%;
    width: 40%;
}
.class-info-input{
    margin-left: 18%;
    margin-top: 8%;
    width: 70%;
    height: 80%;
    /* background-color: rgba(92, 196, 228, 0.2); */
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
   box-shadow: -10px -10px 10px #4C819D;
   background-color: rgba(88, 238, 243, 0.95);
    animation: tobig 0.2s alternate;
}
@keyframes tobig {
    0%{
        transform: scale(0.5);
    }
    100%{
        transform: scale(1);
    }
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
.class-info-update{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(92, 196, 228, 0.2) ;
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