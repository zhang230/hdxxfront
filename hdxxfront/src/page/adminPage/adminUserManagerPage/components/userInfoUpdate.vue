<template>
    <div class="user-info-update" style="display:flex;justify-content:center;align-items:center;">
        <div class="user-info-update-page">
       <!-- <el-button type="primary" @click="changeUserInfoUpdate_Var()">关闭</el-button> -->
       <div style="opacity: 0.6; font-size: 2rem; font-weight: 1000;">用户信息更新</div>
        <el-form size="mini"
        lable-width="160px"
        lable-position="right"
        :model="formData"
        :ref="FormName"
      >
      <el-row>
        <el-col :span="12">
        <el-form-item label="用户名" prop="user_name">
            <!-- <label>用户名*</label> -->
            
          <el-input type="text" class="form-control" placeholder="请更新用户名" v-model="user.user_name"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="昵称" prop="user_nickname">
            <!-- <label>昵称</label> -->
          <el-input type="text" class="form-control" placeholder="请更新昵称" v-model="user.user_nickname"></el-input>
        </el-form-item>
      </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
        <el-form-item label="真实姓名" prop="name">
            <!-- <label>真实姓名</label> -->
          <el-input type="text" class="form-control" placeholder="请更新真实姓名" v-model="user.name"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="积分" prop="a_points">
            <!-- <label>积分</label> -->
          <el-input type="text" class="form-control" placeholder="请更新积分" v-model="user.a_points"></el-input>
        </el-form-item>
         </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
        <el-form-item label="手机号码" prop="user_phone">
            <!-- <label>手机号码*</label> -->
          <el-input type="text" class="form-control" placeholder="请更新手机号码" v-model="user.user_phone"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="地址" prop="address">
            <!-- <label>地址</label> -->
          <el-input type="text" class="form-control" placeholder="请更新地址" v-model="user.address"></el-input>
        </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
        <el-form-item label="邮箱地址*" prop="email">
            <!-- <label>邮箱地址*</label> -->
          <el-input type="text" class="form-control" placeholder="请更新邮箱地址" v-model="user.email"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="职务" prop="position">
            <!-- <label>职务</label> -->
          <el-input type="text" class="form-control" placeholder="请更新职务" v-model="user.position"></el-input>
        </el-form-item>
      </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
        <el-form-item label="身份证" prop="identity_card">
            <!-- <label>身份证</label> -->
          <el-input type="text" class="form-control" placeholder="请更新身份证" v-model="user.identity_card"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="特殊充值余额" prop="account_balance">
            <!-- <label>特殊充值余额</label> -->
          <el-input type="text" class="form-control" placeholder="请更新特殊充值余额" v-model="user.account_balance"></el-input>
        </el-form-item>
      </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
        <el-form-item label="所属机构*" prop="organization">
            <!-- <label>所属机构*</label> -->
          <el-input type="text" class="form-control" placeholder="请更新所属机构" v-model="user.organization"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="所属部门" prop="branch_name">
            <!-- <label>所属部门</label> -->
          <el-input type="text" class="form-control" placeholder="请更新所属部门" v-model="user.branch_name"></el-input>
        </el-form-item>
        </el-col>
          <el-col :span="12">
         <el-form-item label="角色" prop="role" >
            <!-- <label>所属部门</label> -->
          <!-- <el-input type="text" class="form-control" placeholder="请选择角色" v-model="user.role"></el-input> -->
                  <el-select v-model="user.role" placeholder="请选择角色" style="position: absolute; width: 50%;left: 25%;">
                  <el-option
                    v-for="item in roleList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
        </el-form-item>
        </el-col>
      </el-row>
       
        </el-form>


        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveUserInfo()">保存</el-button>
        <el-button  type="primary" @click="changeUserInfoUpdate_Var()">关闭</el-button>
      </span>
        </div>
    </div>
</template>

<script>
export default {
     props:['user'],
     data(){
         return{
              roleList: [
                 {
                  value: 'admin',
                  label: 'admin'
                }, {
                  value: 'teacher',
                  label: 'teacher'
                }, {
                  value: 'user',
                  label: 'user'
                } 
            ],
         }
     },
     methods:{
       changeUserInfoUpdate_Var(){
           this.$emit("changeUserInfoUpdate_Var",false);
       },
       saveUserInfo(){
          if(this.user.role==""){
            this.$alert("请选择角色");
            return ;
          }
        //  console.log(this.user);
          //向后端请求数据
                  let _this =this;
                 this.$http.put('/admin/userInfoUpdate',{
                      user_id: this.user.user_id,
                      name: this.user.name,
                      user_name: this.user.user_name,
                      user_nickname: this.user.user_nickname,
                      a_points: this.user.a_points,
                      user_phone:this.user.user_phone,
                      address:this.user.address,
                      email:this.user.email,
                      position:this.user.position,
                      identity_card: this.user.identity_card,
                      account_balance: this.user.account_balance,
                      organization: this.user.organization,
                      branch_name: this.user.branch_name
                 }).then(function(res){
                       console.log(res);
                       let data=res.data;
                       if(data.msg=='操作成功'){
                            _this.$message({
                              message: data.msg,
                              type: 'success'
                            })
                       }
                  }).catch(function(err){
                    console.log(err)
                  })
                  //  location.reload();
       }
     },
     created(){
      //  console.log(this.user);
     }
}
</script>

<style scoped>
.user-info-update{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background: rgba(82, 151, 230,0.5) linear-gradient(to right, rgba(0,255,0,0), rgba(114, 235, 114, 0.4));
    z-index: 2;
}
.el-input {
    width: 220px;
  } 
.el-form-item__label {
        text-align: justify;
    }

@keyframes tiao {
    0%{
      transform: scale(0.5);
    }
    100%{
      transform: scale(1);
    }
}
.user-info-update-page{

    animation: tiao 0.5s 1 alternate;
    position: absolute;
    background-color: rgba(240, 246, 255, 0.95);
    border-radius: 20%;
    top: 10%;
    width: 50%;
    height: 80%;
    z-index: 2;
}
.el-input {
    position: absolute;
    width: 50%;
    left: 25%;
}
.el-row{
  margin-left: 8%;
}
</style>