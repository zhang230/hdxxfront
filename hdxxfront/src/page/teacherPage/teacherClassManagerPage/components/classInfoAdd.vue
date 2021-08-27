<template>
  <div class="class-info-add">

      <el-button  type="primary" @click="changeClassInfoAdd_Var()" class="el-btn-close">关闭</el-button>
      <el-button type="primary" @click="onSubmit('formData')" class="el-btn-submit">添加</el-button>
      
       <el-form class="el-form-courseinfo" :model="tt" :rules="rules" ref="formData" enctype="multipart/form-data">
           <!-- :auto-upload="false" -->
           <el-upload
                    class="avatar-uploader"
                    ref="uploadImg"
                    style="border: 1px solid white;"
                    action="#"
                    :show-file-list="false"
                    :on-change="handlePictureCardPreview"
                    label="课程头像"
                    :limit="1"
                    accept="image/jpeg,image/jpg,image/png"
                    :auto-upload="false"
                    :on-exceed="handleExceed">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="class-info-icon-tishi">课程头像</div>
            <div class="class-info-input" >
                <el-row >
                        <el-col :span="12">
                        <el-form-item label="课程名称" prop="course_name">
                        <el-input type="text" class="form-control" placeholder="课程名称" v-model="tt.course_name"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="课程类别" prop="course_category">
                        <el-input type="text" class="form-control" placeholder="课程类别" v-model="tt.course_category"></el-input>
                        </el-form-item>
                    </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="课时" prop="course_time">
                            <!-- <label>真实姓名</label> -->
                        <el-input type="text" class="form-control" placeholder="课时" v-model="tt.course_time"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="课程状态" prop="course_check_status">
                            <!-- <label>积分</label> -->
                        <el-input type="text" class="form-control" placeholder="课程状态" v-model="tt.course_check_status"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="开课时间" prop="course_open_time">
                                <el-date-picker
                                    v-model="tt.course_open_time"
                                    type="datetime"
                                    placeholder="选择日期时间">
                                    </el-date-picker>
                            </el-form-item>
                        </el-col>

                    </el-row>

                    <el-row>
                        
                        <el-col :span="12">
                        <el-form-item label="课程所属" prop="course_belong_to">
                            <!-- <label>地址</label> -->
                        <el-input type="text" class="form-control" placeholder="课程所属" v-model="tt.course_belong_to"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="课程来源*" prop="course_origin">
                            <!-- <label>邮箱地址*</label> -->
                        <el-input type="text" class="form-control" placeholder="课程来源" v-model="tt.course_origin"></el-input>
                        </el-form-item>
                        </el-col>
                        
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="章名称" prop="course_zhang_name">
                            <!-- <label>职务</label> -->
                        <el-input type="text" class="form-control" placeholder="章名称" v-model="tt.course_zhang_name"></el-input>
                        </el-form-item>
                    </el-col>
                    </el-row>
                  

            </div>
                <el-upload
                class="upload-demo"
                ref="upload"
                action="#"
                :on-preview="handlePreview"
                :before-remove="beforeRemove"
                :limit="1"
                :on-exceed="handleExceed"
                :on-remove="handleRemove"
                :file-list="fileList"
                accept="video/mp4, video/ogg, video/flv,video/avi,video/wmv,video/rmvb"
                :show-file-list="showFileFlag"
                :on-change="loadVideo"
                :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取视频(小于100MB)</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success">(:</el-button>
                </el-upload>
        </el-form>
  </div>
</template>

<script>
export default {
    // props:['teacherCourseInfo'],
    data(){
        return{
            fileList:[],
            showFileFlag:true,
            imageUrl: '../../../assets/touxiang.png',
            input:'',
            formData:{//添加视频弹出框表单信息
                videoName:'',
                videoType:'',
                videoTimes:'',
                videoJj:'',
                videoStatus:'启用',
                file:'',
                video:''
            },
            dialogImageUrl:'',
            loading:false,
            videoFlag:false,
            formObj:new FormData(),
            tt:{
                    user_id: 0,
                    course_id: 0,
                    chapter_id: 0,
                    course_name: "",
                    course_category: "",
                    course_time: "",
                    course_check_status:"",
                    course_open_time:"",
                    course_src_path:"",
                    course_belong_to:"",
                    course_origin:"",
                    course_zhang_name:"" ,
                    course_jie_name:"" 
            },
            rules: {
                course_name: [
                    { required: true, message: '请输入课程名称', trigger: 'blur' }
                ],
                course_category: [
                    { required: true, message: '请输入课程类别', trigger: 'change' }
                ],
                course_time: [
                    { required: true, message: '请输入课时', trigger: 'change' }
                ],
                course_check_status: [
                    { required: true, message: '请输入课时状态', trigger: 'change' }
                ],
                course_belong_to: [
                    { required: true, message: '请输入课程所属', trigger: 'change' }
                ],
                course_origin: [
                    { required: true, message: '请输入课程来源', trigger: 'change' }
                ],
                course_zhang_name: [
                    { required: true, message: '请输入章名', trigger: 'change' }
                ],
                course_open_time: [
                    { required: true, message: '请选择开课时间', trigger: 'change' }
                ]
         } 
        }
    },
    methods:{


         // 阻止upload的自己上传，进行再操作
        beforeupload (file) {
            var vm = this;
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            }

            return false
        },
        // 图片预览
        handlePictureCardPreview (file) {
            var vm = this;
            vm.formData.file=file.raw;
            vm.imageUrl = URL.createObjectURL(file.raw);
            vm.dialogImageUrl = file.url
        },
        //点击上传的video
         handlePreview(file) {
            
            console.log(file);
        },
        loadVideo(file,fileList){
            this.formData.video = file.raw;
        },
        //上传限制
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        //移除资源前访问
        beforeRemove(file, fileList) {
            if(['video/mp4', 'video/ogg', 'video/flv','video/avi','video/wmv','video/rmvb'].indexOf(file.type) == -1&& file.size / 1024 / 1024  > 100){
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        },
        //查询数据
        submitForm(formName) {
            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //重置查询按钮
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        formatDateTime(date) {
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                m = m < 10 ? ('0' + m) : m;
                var d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                var h = date.getHours();
                h=h < 10 ? ('0' + h) : h;
                var minute = date.getMinutes();
                minute = minute < 10 ? ('0' + minute) : minute;
                var second=date.getSeconds();
                second=second < 10 ? ('0' + second) : second;
                return y + '-' + m + '-' + d;
            },
        //点击立即添加按钮
        onSubmit(formName) {
            let vm = this;
            // console.log("执行乐乐"+formName);
            this.$refs[formName].validate(function (valid) {
                // console.log("执行乐乐1");
                if (valid) {
                    if(vm.formData.video){
                    	//验证视频大小和格式
                        const isLt100M = vm.formData.video.size / 1024 / 1024  < 100;
                        if (['video/mp4', 'video/ogg', 'video/flv','video/avi','video/wmv','video/rmvb'].indexOf(vm.formData.video.type) == -1) {
                            vm.$message.error('请上传正确的视频格式');
                            vm.showFileFlag = false;
                            return false;
                        }
                        if (!isLt100M) {
                            vm.$message.error('上传视频大小不能超过100MB哦!');
                            vm.showFileFlag = false;
                            return false;
                        }
                    }
                    // vm.$alert(typeof new Date(vm.tt.course_open_time));
                    vm.loading = true;
                    //封装表单数据传到后台
                    vm.formObj.append("user_id",(vm.tt.user_id));
                    vm.formObj.append("course_id",(vm.tt.course_id));
                    vm.formObj.append("chapter_id",(vm.tt.chapter_id));
                    vm.formObj.append("course_name",vm.tt.course_name);
                    vm.formObj.append("course_category",vm.tt.course_category);
                    vm.formObj.append("course_create_time",new Date());
                    vm.formObj.append("course_time",parseInt(vm.tt.course_time));
                    vm.formObj.append("course_check_status",parseInt(vm.tt.course_check_status));
                    vm.formObj.append("course_open_time",vm.tt.course_open_time);
                    vm.formObj.append("course_src_path",vm.tt.course_src_path);
                    vm.formObj.append("course_belong_to",vm.tt.course_belong_to);
                    vm.formObj.append("course_origin",vm.tt.course_origin);
                    vm.formObj.append("course_zhang_name",vm.tt.course_zhang_name);
                    vm.formObj.append("course_jie_name",vm.tt.course_jie_name);
                    if(vm.formData.video!=null&&vm.formData.video!=undefined&&vm.formData.video!='') vm.formObj.append("file",vm.formData.video);
                    else {
                        vm.$alert("请上传视频");
                        return false;
                    }
                    if(vm.formData.file!=null&&vm.formData.file!=undefined&&vm.formData.file!='') vm.formObj.append("file",vm.formData.file);
                    else {
                        vm.$alert("请上传课程头像");
                        return false;
                    }
                    
                    // console.log("视频:")
                    // console.log(vm.formData.video)
                    // console.log("文件:")
                    // console.log(vm.formData.file)
                    // console.log(vm.tt);
                    // console.log(vm.formObj)
                    vm.$http.post("teacher/file/upload",vm.formObj).then(function(res){
                        console.log(res);
                        vm.formObj.delete("user_id");
                        vm.formObj.delete("course_id");
                        vm.formObj.delete("chapter_id");
                        vm.formObj.delete("course_name");
                        vm.formObj.delete("course_category");
                        vm.formObj.delete("course_create_time");
                        vm.formObj.delete("course_time");
                        vm.formObj.delete("course_check_status");
                        vm.formObj.delete("course_open_time");
                        vm.formObj.delete("course_src_path");
                        vm.formObj.delete("course_belong_to");
                        vm.formObj.delete("course_origin");
                        vm.formObj.delete("course_zhang_name");
                        vm.formObj.delete("course_jie_name");
                        vm.formObj.delete("file");
                       
                        
                    }).catch(function(err){
                        console.log(err);
                    })
                         vm.$alert({
                            message: "添加成功",
                            type:'success'
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
           },











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
    },
    created(){
        // console.log(this.teacherCourseInfo);
        this.tt.user_id=sessionStorage.getItem("user_id");
        // console.log(this.tt);
    }
}
</script>

<style scoped>
.upload-demo{
    position: absolute;
    top: 30%;
    left: 62%;
} 
.el-row{
    margin-left: 15%;
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
    /* background-color: blue; */
}
.class-info-icon-tishi{
    position: absolute;
    left: 15%;
    top: 26%;
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
    background: rgba(83, 123, 133, 0.6) linear-gradient(to right, rgba(104, 219, 214, 0.8), rgba(129, 228, 231, 0.7));
    box-shadow: -10px -10px 10px #4C819D;
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
.class-info-add{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(191, 241, 241, 0.2);
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