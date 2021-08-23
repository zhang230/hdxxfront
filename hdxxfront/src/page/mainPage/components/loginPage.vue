<template>
  <div class="login">
       <div class="login-page">
        <div class="login-page-up">
            <span style="width: 100%; height: 100%; font-weight: 1000; color: #3566CD;">[在线互动学习平台]</span>
            <br/>
            让学习更有价值
        </div>
        <div class="login-page-mid">
         <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="user_name">
          <el-input  v-model="ruleForm.user_name" autocomplete="off" style="width: 75%;" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="user_password" style="margin-top: 10%;">
          <el-input  type="password" v-model="ruleForm.user_password" autocomplete="off" style="width: 75%;" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="imgUrl" style="margin-top: 10%;"> 
          <el-input type="text" v-model="verifyCode" autocomplete="off" style="width: 30%;" placeholder="验证码"></el-input>
          <div class="verfycodePic"><img :src="imgUrl" alt="" @click="resetImg()"/></div>
          </el-form-item>
        <el-form-item style="margin-top: 20%;">
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 30%;">提交</el-button>
          <el-button @click="resetForm('ruleForm')" style="width: 30%;margin-left: 14%;">重置</el-button>
        </el-form-item>
      </el-form>
        </div>
        <div class="login-page-down">
               忘记密码？
        </div>
       </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        imgUrl:"http://localhost:8181/userlogin/verifyCode?time="+new Date(),
        verifyCode:'',
        ruleForm: {
          user_name: '',
          user_password: ''
        },
        rules: {
          user_name: [
            { required: true, message: '请输入账号(手机号)', trigger: 'blur' },
            { min:11, max: 11, message: '11位数字', trigger: 'blur' }
          ],
          user_password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      resetImg(){
          this.imgUrl="http://localhost:8181/userlogin/verifyCode?time="+new Date();
      },
      submitForm(formName) {
        
        this.$refs[formName].validate((valid) => {
          if (valid) {
              //向后端请求数据
                   let _this =this;
                  //  console.log(this.ruleForm.user_name+"::::!!"+this.ruleForm.user_password);
                 this.$http.post('/userlogin/login?verifyCode='+_this.verifyCode,{
                      user_name: this.ruleForm.user_name,
                      user_password: this.ruleForm.user_password
                    }).then(function(res){
                      // console.log(res);
                      let data1=res.data[0].data1;
                      let verifyCode=res.data[1].verifyCode;
                        //  console.log(data1);
                        //  console.log(verifyCode);
                      sessionStorage.setItem("user_id",data1.data.user_id);
                         if(data1.msg=='操作成功' && verifyCode.msg=='验证码正确'){
                              let turi='';
                              if(data1.data.role==='admin'){
                                  turi='admin/adminUserManagerPage';
                              }else if(data1.data.role==='teacher'){
                                  turi='teacher/teacherClassManagerPage';
                              }else if(data1.data.role==='user'){
                                  turi='user/userLookVideo';
                              }
                          
                            _this.$router.push({path: '/'+turi});
                          }else if(data1.msg!='操作成功' || verifyCode.msg=='验证码错误'){
                               _this.$message({
                                message: data1.msg+" 或者 "+verifyCode.msg,
                                type: 'info',
                              });
                            }
                  }).catch(function(err){
                    console.log(err)
                  })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.verifyCode='';
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style scoped>
.login-page-down{
  position: absolute;
  opacity: 0.6;
  font-size: 0.5rem;
  font-weight: 500;
  right: 2%;
  bottom: 2%;
}
.verfycodePic{
  position:absolute;
  right: 30%;
  top: 1%;
  width: 30%;
  height: 100%;
  /* background-color: blue; */
}
.verfycodePic img{
  width: 100%;
  height: 100%;
}
.login{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(71,86,105, 0.5);
  z-index: 2;
}
.login-page{
  position: relative;
  margin: auto;
  margin-top: 5%;
  padding: 0%;
  width: 30%;
  height: 80%;
  border-radius: 0.5rem;
  background-color: white;
  display: block;
  animation: rotateChange 0.3s ease-out 1;
}
@keyframes rotateChange{
  0%{
    /* transform: rotate(0deg); */
    transform: scale(0.5);
  }
   100%{
     /* transform: rotate(10deg); */
     transform: scale(1);
   }
}
.login-page-up{
  position: absolute;
  top: 10%;
  width: 100%;
  height: 30%;
  text-align: center;
  /* background-color: red; */
  font-size: 2rem;
  color: #3566CD;
}
.login-page-mid{
  position: absolute;
  margin-top: 40%;
  width: 100%;
  height: 30%;
  /* background-color: red; */
}
</style>