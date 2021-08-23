<template>
  <div class="user-info-list">
         <div class="user-info-list-tiao">
                 <el-input
                        class="user-info-list-user_name"
                        placeholder="用户名"
                        v-model="username">
                    </el-input>
                <el-input
                        class="user-info-list-user_name"
                        placeholder="手机号"
                        v-model="user_name">
                    </el-input>
                <el-input
                        class="user-info-list-email"
                        placeholder="邮箱"
                        v-model="email">
                    </el-input>
                <el-input
                        class="user-info-list-user_nickname"
                        placeholder="昵称"
                        v-model="user_nickname">
                </el-input>
                <el-button type="primary" class="user-info-list-find" @click="findUserInfo()">查询</el-button>
                <el-button class="user-info-list-reset" @click="resetContents()">重置</el-button>
         </div>
      <hr class="hrcss">
      <el-button type="primary" class="user-info-list-add" @click="userInfoAdd()">添加</el-button>
      <el-table
        :data="tableData"
        style="position: absolute;width: 80%; margin-left: 2%;margin-top: 3%;line-height: 1.5rem;height: 27rem;">
        <el-table-column
        label="----用户名----"
        width="220">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="----手机号----"
        width="300">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.user_name }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="----邮箱----"
        width="300">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="----昵称----"
        width="250">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.user_nickname }}</span>
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
  <!-- userInfoList模块传递用户id到userInfoUpdate模块，这样在userInfoUpdate模块就可以根据user_id更新数据库了 -->
  <userInfoUpdate v-if="userinfoupdate" :user_id="user_Id" @changeUserInfoUpdate_Var="changeUserInfoUpdate_Var()"></userInfoUpdate>
  <!-- 用户添加不需要userInfoList模块传递给userInfoAdd模块user_id。因为数据库主键自增。 -->
  <userInfoAdd v-if="userinfoadd" @changeUserInfoAdd_Var="changeUserInfoAdd_Var()"></userInfoAdd>
  </div>
</template>

<script>
import lunbo from '../../../mainPage/components/lunbo.vue';
import userInfoUpdate from './userInfoUpdate.vue';
import userInfoAdd from './userInfoAdd.vue'
 export default {
  components: { 
    lunbo,
    userInfoUpdate,
    userInfoAdd
   },
    data() {
      return {
        user_Id: 1,
        userinfoupdate: false,
        userinfoadd: false,
        username:'',
        user_name:'',
        email:'',
        user_nickname:'',
        currentPage: 0,
        input: '',
        tableData: [],
        tableData_List: [{
          username: '张世和',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '张世和',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '张世和',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '张世和',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '张世和',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '张世和',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '张世和',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        },{
          username: '李四',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '李四',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '李四',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '李四',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '李四',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '李四',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }, {
          username: '李四',
          user_name: '16608038762',
          email: '1804961700@qq.com',
          user_nickname: '小张'
        }],
        pagesize:7,
        total: 100
      }
    },
    methods: {
      changeUserInfoAdd_Var(data){
        this.userinfoadd=data;
      },
      userInfoAdd(){
           this.userinfoadd=true;
      },
      changeUserInfoUpdate_Var(data){
          this.userinfoupdate=data;
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
        this.userinfoupdate=!this.userinfoupdate;
        let userindex=this.currentPage*this.pagesize+index;
        console.log("当前user的index为: "+userindex+"userinfoupdate: "+this.userinfoupdate);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      resetContents(){
         this.username=this.user_name=this.email=this.user_nickname='';
      },
      findUserInfo(){
          console.log("OK");
      }
    },
    created(){
       //请求资源
       this.tableData=[];
         for(let i=0;i<7;i++){
           this.tableData.push(this.tableData_List[i]);
         }
    }
  }
</script>

<style scoped>
.user-info-list-add{
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
.user-info-list-find{
    position: absolute;
    width: 5%;
    height: 5%;
    right: 15%; 
    top: 10.35%;
}
.user-info-list-reset{
    position: absolute;
    width: 5%;
    height: 5%;
    right: 8%; 
    top: 10.35%;
}
.user-info-list{
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
.user-info-list-tiao{
    width: 100%;
    height: 10%;
    display: flex;
    background-color: white;
}
.user-info-list-tiao .user-info-list-user_name{
    position: absolute;
    top: 2%;
    left: 20%;
    width: 10%;
    padding: 0px;
    margin: 0px;
}
.user-info-list-tiao .user-info-list-user_name{
 position: absolute;
    top: 2%;
    left: 35%;
    width: 10%;
    padding: 0px;
    margin: 0px;
}
.user-info-list-tiao .user-info-list-email{
 position: absolute;
    top: 2%;
    left: 50%;
    width: 10%;
    padding: 0px;
    margin: 0px;
}
.user-info-list-tiao .user-info-list-user_nickname{
 position: absolute;
    top: 2%;
    left: 65%;
    width: 10%;
    padding: 0px;
    margin: 0px;
}
</style>  