<template>
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
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        user_phone: "",
        email: "",
        identity_card: "",
        organization: "",
        branch_name: "",
        user_nickname: "",
        a_points: "66",
        address: "",
        position: "",
        account_balance: "55",
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
          { pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
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
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
</style>