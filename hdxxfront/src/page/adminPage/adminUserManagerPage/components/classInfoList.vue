<template>
  <div class="class-info-list">
         <div class="class-info-list-tiao">
                 <el-input
                        class="class-info-list-name"
                        placeholder="课程类别名称"
                        v-model="classname">
                    </el-input>
                <el-button type="primary" class="class-info-list-find" @click="findclassInfo()">查询</el-button>
                <el-button class="class-info-list-reset" @click="resetContents()">重置</el-button>
         </div>
      <hr class="hrcss">
      <el-button type="primary" class="class-info-list-add" @click="changeClassInfoAdd()">添加</el-button>
      <el-table
        :data="tableData"
        style="position: absolute;width: 80%; margin-left: 2%;margin-top: 3%;line-height: 1.5rem;height: 27rem;">
        <el-table-column
        label="课程类别名"
        width="220">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.classname }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="父类别名"
        width="200">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.fathername }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="课程数"
        width="200">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.classnum }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="状态"
        width="200">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.status }}</span>
        </template>
        </el-table-column>
         <el-table-column
        label="创建时间"
        width="250">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.createtime }}</span>
        </template>
        </el-table-column>
        <el-table-column label="快捷操作">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button
            size="mini"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
     <classInfoAdd v-if="classinfoadd" @changeClassInfoAdd_Var="changeClassInfoAdd_Var()"></classInfoAdd>
     <classInfoUpdate v-if="classinfoupdate" @changeClassInfoUpdate_Var="changeClassInfoUpdate_Var()"></classInfoUpdate>
  </div>
</template>

<script>
import lunbo from '../../../mainPage/components/lunbo.vue';
import classInfoAdd from './classInfoAdd.vue'
import classInfoUpdate from './classInfoUpdate.vue'
 export default {
  components: { 
      lunbo,
      classInfoAdd,
      classInfoUpdate
    },
    data() {
      return {
        classinfoadd:false,
        classinfoupdate: false,
        classname:'',
        fathername:'',
        classnum:'',
        status:'',
        createtime:'',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        input: '',
        tableData: [],
        tableData_List: [{
          classname:'c++',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'c++',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'c++',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'c++',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'c++',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'c++',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'c++',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        },{
          classname:'java',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'java',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'java',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'java',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'java',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'java',
          fathername:'c',
          classnum:5,
          status:"开放",
          createtime:'2020-01-01'
        }, {
          classname:'java',
          fathername:'c',
          fathername:5,
          status:"开放",
          createtime:'2020-01-01'
        }],
        pagesize:7,
        total: 100
      }
    },
    methods: {
      changeClassInfoUpdate_Var(data){
        console.log("父类的: "+data);
          this.classinfoupdate=data;
      },
      changeClassInfoAdd_Var(data){
            this.classinfoadd=data;
      },
      changeClassInfoAdd(){
             this.classinfoadd=!this.classinfoadd;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         val=val-1;
         let startIndex=val*this.pagesize;
         let endIndex=(val+1)*this.pagesize;
        //  console.log(startIndex+"::::"+endIndex);
         this.tableData=[];
         for(let i=startIndex;i<this.tableData_List.length && i<endIndex;i++){
           this.tableData.push(this.tableData_List[i]);
         }
      },
      handleEdit(index, row) {
      
        this.classinfoupdate=!this.classinfoupdate;
        let classindex=this.currentPage*this.pagesize+index;
        // this.class=this.tableData_List[classindex];
      //  console.log(classindex);
        // console.log(index, row);
        console.log(this.classinfoupdate);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      resetContents(){
         this.classname=''
      },
      findclassInfo(){
          console.log("OK");
      }
    },
    created(){
       //请求资源
       this.tableData=[];
         for(let i=0;i<Math.min(7,this.tableData_List.length);i++){
           this.tableData.push(this.tableData_List[i]);
         }
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
    left: 45%;
    width: 20%;
    padding: 0px;
    margin: 0px;
}
.class-info-list-tiao .class-info-list-tell{
 position: absolute;
    top: 2%;
    left: 35%;
    width: 10%;
    padding: 0px;
    margin: 0px;
}
.class-info-list-tiao .class-info-list-email{
 position: absolute;
    top: 2%;
    left: 50%;
    width: 10%;
    padding: 0px;
    margin: 0px;
}
.class-info-list-tiao .class-info-list-nickname{
 position: absolute;
    top: 2%;
    left: 65%;
    width: 10%;
    padding: 0px;
    margin: 0px;
}
</style>  