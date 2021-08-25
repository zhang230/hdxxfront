<template>
  <div class="class-info-list">
         <div class="class-info-list-tiao">
                 <el-input
                        class="class-info-list-name"
                        placeholder="课程名称"
                        v-model="course_name">
                    </el-input>
                <el-input
                        class="class-info-list-course_category"
                        placeholder="课程类别"
                        v-model="course_category">
                    </el-input>
                <el-button type="primary" class="class-info-list-find" @click="findClassInfo()">查询</el-button>
                <el-button class="class-info-list-reset" @click="resetContents()">重置</el-button>
         </div>
      <hr class="hrcss">
      <el-button type="primary" class="class-info-list-add" @click="classInfoAdd()">添加</el-button>
      <el-table
        :data="tableData"
        style="position: absolute;width: 80%; margin-left: 2%;margin-top: 3%;line-height: 1.5rem;height: 27rem;">
        <el-table-column
        label="----课程名称----"
        width="150">
        <template slot-scope="scope">
            <span style="margin-left: 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" >{{ scope.row.course_name }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="----课程类别----"
        width="200">
        <template slot-scope="scope">
            <span style="margin-left: 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.course_category }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="----章----"
        width="200">
        <template slot-scope="scope">
            <span style="margin-left: 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.course_zhang_name }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="----节----"
        width="150">
        <template slot-scope="scope">
            <span style="margin-left: 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.course_jie_name }}</span>
        </template>
        </el-table-column>
       <el-table-column
            label="----视频路径----"
            width="200">
            <template slot-scope="scope">
                <span style="margin-left: 10px; overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" :title="scope.row.course_src_path">{{ scope.row.course_src_path }}</span>
            </template>
        </el-table-column>
         <el-table-column
            label="----状态----"
            width="150">
            <template slot-scope="scope">
                <span style="margin-left: 10px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{ scope.row.course_check_status }}</span>
            </template>
        </el-table-column>
        <el-table-column label="----操作----">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            
            <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
             <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <span>确定删除吗?</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="sureDeleteUserInfo()">确 定</el-button>
              </span>
            </el-dialog>
        </template>
        </el-table-column>
  </el-table>
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="7"
      :page-size="7"
      :pager-count="3"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  <!-- classInfoList模块传递用户id到classInfoUpdate模块，这样在classInfoUpdate模块就可以根据class_id更新数据库了 -->
  <classInfoUpdate v-if="classinfoupdate" :teacherCourseInfo="teacherCourseInfo" @changeClassInfoUpdate_Var="changeClassInfoUpdate_Var()"></classInfoUpdate>
  <!-- 用户添加不需要classInfoList模块传递给classInfoAdd模块class_id。因为数据库主键自增。 -->
  <classInfoAdd v-if="classinfoadd" :teacherCourseInfo="teacherCourseInfo" @changeClassInfoAdd_Var="changeClassInfoAdd_Var()"></classInfoAdd>
  </div>
</template>

<script>
import lunbo from '../../../mainPage/components/lunbo.vue';
import classInfoUpdate from './classInfoUpdate.vue';
import classInfoAdd from './classInfoAdd.vue'
 export default {
  components: { 
    lunbo,
    classInfoUpdate,
    classInfoAdd
   },
    data() {
      return {
        dialogVisible:false,
        teacherCourseInfo: 1,
        classinfoupdate: false,
        classinfoadd: false,
        course_name:'',
        course_category:'',
        currentPage: 0,
        input: '',
        tableData: [],
        tableData_List: [],
        pagesize:7,
        total: 100
      }
    },
    methods: {
      sureDeleteUserInfo(){
             this.dialogVisible = false;
             let _this=this;
             console.log("delete!!!");
              console.log(this.teacherCourseInfo);
                this.$http.delete('/teacher/courseVideoInfoDelete',
                {
                  data:{
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
                }}).then(function(res){
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
                  // location.reload();
      },
      changeClassInfoAdd_Var(data){
        this.classinfoadd=data;
      },
      classInfoAdd(){
           this.classinfoadd=true;
      },
      changeClassInfoUpdate_Var(data){
          this.classinfoupdate=data;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         val=val-1;
         this.currentPage=val;
         let startIndex=val*this.pagesize;
         let endIndex=(val+1)*this.pagesize;
         this.tableData=[];
         for(let i=startIndex;i<this.tableData_List.length && i<endIndex;i++){
           this.tableData.push(this.tableData_List[i]);
         }
      },
      handleEdit(index, row) {
        this.classinfoupdate=!this.classinfoupdate;
        let classindex=this.currentPage*this.pagesize+index;
        this.teacherCourseInfo=this.tableData_List[classindex];
        // console.log("当前class的index为: "+classindex+"classinfoupdate: "+this.classinfoupdate);
      },
      handleDelete(index, row) {
        this.dialogVisible=true;
        let classindex=this.currentPage*this.pagesize+index;
        this.teacherCourseInfo=this.tableData_List[classindex];
         
      },
      resetContents(){
         this.course_name=this.course_category='';
      },
      findClassInfo(){
          let _this=this;
            this.$http.post('/teacher/findCourseVideoInfo',{
                  user_id: sessionStorage.getItem("user_id"),
                  course_name: this.course_name,
                  course_category: this.course_category
            }).then(function(res){
                      console.log(res.data);
                      _this.tableData_List=res.data.data;
                      console.log(_this.tableData_List);
                        _this.tableData=[];
                          for(let i=0;i<Math.min(7,_this.tableData_List.length);i++){
                            _this.tableData.push(_this.tableData_List[i]);
                          }
                    }).catch(function(err){
                      console.log(err)
                    }
                  );
          console.log("OK");
      }
    },
    created(){
      let _this=this;
       let user_id=sessionStorage.getItem("user_id");
        this.$http.get('/teacher/allCourseVideoInfo/'+user_id).then(function(res){
                    console.log(res.data);
                     _this.tableData_List=res.data.data;
                     console.log(_this.tableData_List);
                      _this.tableData=[];
                        for(let i=0;i<Math.min(7,_this.tableData_List.length);i++){
                          _this.tableData.push(_this.tableData_List[i]);
                        }
                  }).catch(function(err){
                    console.log(err)
                  })
        }
 }
</script>

<style scoped>
.class-info-list-add{
    position: absolute;
    width: 5%;
    height: 5%;
    right: 2%; 
    top: 10.35%;
}
.el-table{
  animation: little_to_big 1s 1 alternate;
}
.hrcss{
   width:80%;
    margin:0 auto;
    border: 0;
    height: 3px;
     animation: little_to_big 1s 1 alternate;
    background-image: linear-gradient(to right, rgba(55, 154, 235, 0), rgba(17, 158, 240, 0.75), rgba(119, 196, 241, 0));
}
.block{
  position: absolute;
  margin-top: 35%;
  margin-left: 48%;
  line-height: 50%;
}
.el-table{
  border: 2px solid #66B1FF;
  border-radius: 1rem;
  box-shadow:-10px 0px 10px #66B1FF, 
            0px -10px 10px #66B1FF,  
            10px 0px 10px #66B1FF,
            0px 10px 10px #66B1FF
}
.el-table__header-wrapper{
    height: 5rem;
}
.class-info-list-find{
    position: absolute;
    width: 5%;
    height: 5%;
    right: 15%; 
    top: 10.35%;
}
.class-info-list-reset{
    position: absolute;
    width: 5%;
    height: 5%;
    right: 8%; 
    top: 10.35%;
}
.class-info-list{
    width: 100%;
    height: 100%;
    margin: 0%;
    padding: 0%;
    /* background-color: blue; */
}
@keyframes little_to_big{
  0%{
    transform: scale(0.5);
  }
  100%{
    transform: scale(1);
  }
}
.class-info-list-tiao{
    width: 100%;
    height: 10%;
    display: flex;
    background-color: white;
}
.class-info-list-tiao .class-info-list-name{
    position: absolute;
    top: 2%;
    left: 25%;
    width: 20%;
    padding: 0px;
    margin: 0px;
}
.class-info-list-tiao .class-info-list-course_category{
 position: absolute;
    top: 2%;
    left: 55%;
    width: 20%;
    padding: 0px;
    margin: 0px;
}
</style>  