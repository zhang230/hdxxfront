<template>
  <div style="margin-top: 5%; margin-left: 24%;">
    <el-card class="box-card" shadow="hover" style="width:800px;height:600px;">
      <div slot="header" class="clearfix">
        <span>个人空间</span>
       <el-button style="float: right; padding: 3px 0" @click="goBack()" type="text">退出</el-button>
      </div>
      <el-container style="height: 500px;">
        <el-aside width="150px">
          <div>
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div style="margin-left: 25px;margin-top:80px" class="block">
                  <el-avatar :size="100" :src="imageUrl"></el-avatar>
                </div>
              </div>
            </el-col>
          </div>
          <div>
            <el-upload
              class="avatar-uploader"
              action="#"
              ref="FormIcon"
              :show-file-list="false"
              :on-change="getFormIconFile"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              accept="image/jpeg,image/jpg,image/png"
            >
              <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-aside>
        <el-main width="300px">
             <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                  >
                    <el-row type="flex" class="row1">
                      <el-col span="18">
                        <el-form-item label="真实姓名" prop="name">
                          <el-input type="text" v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col span="18">
                        <el-form-item prop="user_nickname" label="昵称">
                          <el-input type="text" v-model="ruleForm.user_nickname"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex" class="row2">
                      <el-col span="18">
                        <el-form-item prop="user_phone" label="手机号">
                          <el-input type="text" v-model="ruleForm.user_phone"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col span="18">
                        <el-form-item prop="position" label="职务">
                          <el-input type="text" v-model="ruleForm.position"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row type="flex" class="row3">
                      <el-col span="18">
                        <el-form-item prop="email" label="邮箱地址">
                          <el-input type="text" v-model="ruleForm.email"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col span="18">
                        <el-form-item prop="address" label="地址">
                          <el-input type="text" v-model="ruleForm.address"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row type="flex" class="row4">
                      <el-col span="18">
                        <el-form-item prop="identity_card" label="身份证">
                          <el-input type="text" v-model="ruleForm.identity_card"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col span="18">
                        <el-form-item prop="a_points" label="积分">
                          <el-input
                            type="text"
                            aria-readonly="ture"
                            v-model="ruleForm.a_points"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row type="flex" class="row5">
                      <el-col span="18">
                        <el-form-item prop="organization" label="所属机构">
                          <el-input type="text" v-model="ruleForm.organization"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col span="18">
                        <el-form-item prop='account_balance' label="账户余额">
                          <el-input
                            type="text"
                            aria-readonly="ture"
                            v-model="ruleForm.account_balance"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex" class="row6">
                      <el-col span="18">
                        <el-form-item prop='branch_name' label="所属部门">
                          <el-input type="text" v-model="ruleForm.branch_name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col span="18">
                        <el-form-item>
                          <el-button type="primary" @click="submitForm('ruleForm')"
                            >提交</el-button
                          >
                          <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>
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
  
      imageUrl: JSON.parse(sessionStorage.getItem("user")).user_icon,
      formObj:new FormData(),
      formData:{//添加视频弹出框表单信息
            videoName:'',
            videoType:'',
            videoTimes:'',
            videoJj:'',
            videoStatus:'启用',
            file:'',
            video:''
            },
      ruleForm: {
        name: "",
        user_phone: "",
        email: "",
        identity_card: "",
        organization: "",
        branch_name: "",
        user_nickname: "",
        a_points: "",
        address: "",
        position: "",
        account_balance: "",
      },
      rules: {
            name: [
                {
                  required: true,
                  message: "请输入姓名",
                  trigger: "blur",
                    },
                  ],
            user_phone: [
                { required: true, message: '请输入手机号', trigger: 'blur' },
               { pattern:/^1[3456789]\d{9}$/, message: "手机号格式不对", trigger: "blur" },
            ],
            email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
            identity_card: [
              { required: true, message: "请输入身份证", trigger: "blur" },
              { 
               pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
               message: '证件号码格式有误！',
               trigger: 'blur',
              },
            ],
            organization: [
              { required: true, message: "请输入所属机构", trigger: "blur" },
            ],
            branch_name: [
              { required: true, message: "请输入所属部门", trigger: "blur" },
            ],
              user_nickname: [{ required: false, message: "请输入昵称", max: 60 }],
              address: [{ required: false, message: "请输入地址" }],
              position: [{ required: false, message: "请输入职务" }],
          },
    }
  },
   methods: {
      getFormIconFile(file){
        // console.log("初始化图片文件:");
        // console.log(file.raw);
          this.formData.file=file.raw;
          this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = (file.type === 'image/jpeg' || file.type==='image/jpg' || file.type==='image/png');
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
      },
      submitForm(formName){
            let vm = this;
            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    if(vm.formData.file){
                    	//验证视频大小和格式
                        const isLt100M = vm.formData.file.size / 1024 / 1024  < 2;
                        if (['image/jpeg', 'image/png', 'image/jpg'].indexOf(vm.formData.file.type) == -1) {
                            vm.$message.error('请上传正确的文件格式');
                            vm.showFileFlag = false;
                            return false;
                        }
                        if (!isLt100M) {
                            vm.$message.error('上传文件大小不能超过2MB哦!');
                            vm.showFileFlag = false;
                            return false;
                        }
                    }
                    //封装表单数据传到后台
                    vm.formObj.append("user_id",(sessionStorage.getItem("user_id")));
                    vm.formObj.append("name",(vm.ruleForm.name));
                    vm.formObj.append("user_phone",(vm.ruleForm.user_phone));
                    vm.formObj.append("email",(vm.ruleForm.email));
                    vm.formObj.append("identity_card",(vm.ruleForm.identity_card));
                    vm.formObj.append("organization",(vm.ruleForm.organization));
                    vm.formObj.append("branch_name",(vm.ruleForm.branch_name));
                    vm.formObj.append("user_nickname",(vm.ruleForm.user_nickname));
                    vm.formObj.append("position",(vm.ruleForm.position));
                    vm.formObj.append("address",(vm.ruleForm.address));
                    vm.formObj.append("a_points",(parseInt(vm.ruleForm.a_points)));
                    vm.formObj.append("account_balance",parseFloat(vm.ruleForm.account_balance));
                   
                    if(vm.formData.file!=null&&vm.formData.file!=undefined&&vm.formData.file!='') vm.formObj.append("file",vm.formData.file);
                    else {
                        vm.$alert("请上传课程头像");
                        return false;
                    }
                    
                    vm.$http.put("user/file/upload",vm.formObj).then(function(res){
                        // console.log(res);
                        sessionStorage.setItem("user",JSON.stringify(res.data.data));
                        vm.formObj.delete("name");
                        vm.formObj.delete("user_phone");
                        vm.formObj.delete("email");
                        vm.formObj.delete("identity_card");
                        vm.formObj.delete("organization");
                        vm.formObj.delete("branch_name");
                        vm.formObj.delete("user_nickname");
                        vm.formObj.delete("position");
                        vm.formObj.delete("address");
                        vm.formObj.delete("a_points");
                        vm.formObj.delete("account_balance");
                        vm.formObj.delete("file");
                    }).catch(function(err){
                        console.log(err);
                    })
                         vm.$alert({
                            message: "修改成功",
                            type:'success'
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
           },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
    mounted(){
      this.ruleForm=JSON.parse(sessionStorage.getItem("user"));
      console.log("用户个人信息:");
      console.log(this.ruleForm);

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
  /* position: absolute; */
  width: 480px;
  /* height: 100%; */
  background: url('../../../assets/bg2.gif');
  background-size: cover;
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
