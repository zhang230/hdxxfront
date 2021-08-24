<template>
    <div class="class-info-update" style="display:flex;justify-content:center;align-items:center;">
        <div class="class-info-update-page">
       <!-- <el-button type="primary" @click="changeClassInfoUpdate_Var()">关闭</el-button> -->
       <div style="opacity: 0.6; font-size: 2rem; font-weight: 1000;">课程类别信息  更新</div>
        <el-form size="mini"
        lable-width="160px"
        lable-position="right"
        :model="formData"
        :ref="FormName"
      >
         <el-row >
        <el-col :span="12">
        <el-form-item label="课程类别名" prop="course_category">
          <el-input type="text" class="form-control" placeholder="请输入课程类别名" v-model="course_category"></el-input>
        </el-form-item>
        </el-col>
        <el-col :span="12">
        <el-form-item label="父类名" prop="course_father_name">
          <el-input type="text" class="form-control" placeholder="请输入父类名" v-model="course_father_name"></el-input>
        </el-form-item>
      </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
        <el-form-item label="激活状态" prop="status">
            <!-- <label>真实姓名</label> -->
          <el-input type="text" class="form-control" placeholder="激活状态" v-model="status"></el-input>
        </el-form-item>
        </el-col>
      </el-row>
        </el-form>


        <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveClassInfo()">保存</el-button>
        <el-button  type="primary" @click="changeClassInfoUpdate_Var()">关闭</el-button>
      </span>
        </div>
    </div>
</template>

<script>
export default {
     props:['class'],
     data(){
         return{
              
         }
     },
     methods:{
       changeClassInfoUpdate_Var(){
           this.$emit("changeClassInfoUpdate_Var",false);
       },
       saveClassInfo(){
        //  console.log(this.class);
          //向后端请求数据
                  let _this =this;
                 this.$http.put('/admin/classInfoUpdate',{
                     
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
      //  console.log(this.class);
     }
}
</script>

<style scoped>
.class-info-update{
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
.class-info-update-page{

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