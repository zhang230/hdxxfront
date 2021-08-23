<template>
  <div class="register">
       <div class="register-page">
        <div class="register-page-up">
            <span style="width: 100%; height: 100%; font-weight: 1000; color: #3566CD;">[在线互动学习平台]</span>
            <br/>
            让学习更有价值
        </div>
        <div class="register-page-mid">
             <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="user_name" style="width: 80%;">
                    <el-input v-model="ruleForm.user_name" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="user_password" style="width: 80%;margin-top: 10%;">
                    <el-input  type="password" v-model="ruleForm.user_password" autocomplete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" style="width: 80%;margin-top: 10%;">
                    <el-input  type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item style="margin-top: 10%;">
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width: 30%;">提交</el-button>
                    <el-button @click="resetForm('ruleForm')" style="width: 30%;margin-left: 13%;" >重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="register-page-down">
    
        </div>
       </div>
  </div>
</template>

<script>
 export default {
    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.user_password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          user_password: '',
          checkPass: '',
          user_name: ''
        },
        rules: {
          user_name:[
            { required: true, message: '请输入账号(手机号)', trigger: 'blur' },
            { min:11, max: 11, message: '11位数字', trigger: 'blur' }
          ],
          user_password: [
            { required: true, message: '密码', trigger: 'blur' },
            { min:6, max: 18, message: '6-18位字符', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //向后端请求数据
                   let _this =this;
                  //  console.log(this.ruleForm.user_name+"::::!!"+this.ruleForm.user_password);
                 this.$http.post('/userregister/register',{
                      user_name: this.ruleForm.user_name,
                      user_password: this.ruleForm.user_password
                    }).then(function(res){
                      console.log(res);
                     if(res.data.msg=='注册成功'){
                       _this.$message({
                         message: res.data.msg,
                         type: 'success'
                       })
                        // _this.$router.push({path: '/user/loginPage'});
                     }else{
                        _this.$message({
                         message: res.data.msg,
                         type: 'fail'
                       })
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
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.verfycodePic{
  position:absolute;
  right: 30%;
  top: 1%;
  width: 30%;
  height: 100%;
  background-color: blue;
}
.register{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(71,86,105, 0.5);
  z-index: 2;
}
.register-page{
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
.register-page-up{
  position: absolute;
  top: 10%;
  width: 100%;
  height: 30%;
  text-align: center;
  /* background-color: red; */
  font-size: 2rem;
  color: #3566CD;
}
.register-page-mid{
  position: absolute;
  margin-top: 40%;
  width: 100%;
  height: 30%;
  /* background-color: red; */
}
</style>