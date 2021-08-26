<template>
  <div class="user-vedio">
        <el-container>
          <el-aside width="20%" resize="both">
            <div class="el-aside-mulu">目录</div>
               <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                 <el-submenu v-for="(zhangjie, i) in showVar" :index="''+(i+1)" :key="i">
                    <template slot="title">
                      <span style="position: absolute; left: 20%; overflow: hidden; text-overflow:ellipsis;" :title="zhangjie.czn">{{zhangjie.czn}}</span>
                    </template>
                    <!-- 监听儿子的参数 -->
                    <el-menu-item-group>
                      <el-menu-item v-for="(zhangjiejie,j) in zhangjie.cjnList" 
                      :index="(i+1)+'-'+(j+1)" 
                      :key="j"
                      style="font-size: 0.5rem;overflow: hidden; text-overflow:ellipsis;"  :title="zhangjiejie" @click="toVedioPath(i,j)">{{zhangjiejie.course_jie_name}}</el-menu-item>
                    </el-menu-item-group>

                 </el-submenu>
               </el-menu>
          </el-aside>
          <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
          <el-container class="user-vedio-container">
            <el-header style="display: flex;">
              <el-button  icon="el-icon-s-order" class="user-vedio-container-btn1">笔记</el-button>
              <el-button  icon="el-icon-edit" class="user-vedio-container-btn2">纠错</el-button>
              <el-button  icon="el-icon-check" class="user-vedio-container-btn3">标记已学</el-button>
            </el-header>
            <!-- 视频模块 -->
            <div  class="el-main">
              <Video v-if="videosrc!=''" :videosrc="videosrc"></Video>
              <div v-else style="text-align: center;margin-top: 10%;">亲,请选择章节看视频学习哟~~~</div>
            </div>
            <!-- <div v-else class="el-main">亲,请选择章节看视频学习哟~~~</div> -->
            <div class="el-footer">
                 <div class="el-footer-pinglun-input">
                   <div class="el-footer-pinglun-input-icon">
                        <img src="../../../assets/pinglun.png" alt="">
                   </div>
                   <el-input
                      type="textarea"
                      placeholder="just go go"
                      v-model="textarea"
                      maxlength="100"
                      show-word-limit
                      style="position: absolute; width: 95%;margin-top: 4%;left: 2%;"
                    >
                    </el-input>
                      <el-button type="success" class="el-footer-pinglun-input-el-btn" @click="pinglunSubmit()">留言</el-button>
                 </div>
                  <div class="el-footer-pinglun-show" v-for="(item,index) in contextList" :key="index">
                   <div class="el-footer-pinglun-show-icon">
                        <img src="../../../assets/touxiang.png" alt="">
                        <!-- <img :src="item.user_icon" alt=""> -->
                   </div>
                    <div  class="el-footer-pinglun-show-content">
                          <div class="el-footer-pinglun-show-content-name-data">
                            <span style="position: absolute;left: 0px;top: 30%;width: 10%;color: #3BC6AA;font-weight: 1000;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.user_name}}</span>
                            <span style="position: absolute;left: 12%; top: 40%; font-size: 0.7rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{item.pinglunTime}}</span>
                          </div>
                          <div class="el-footer-pinglun-show-content-con">
                            {{item.user_commit}}
                          </div>
                    </div>
                 </div>
            </div>
          </el-container>
          </ul>
        </el-container>
  </div>
</template>

<script>
import $ from 'jquery'
import Video from './components/video.vue'
export default {
   name: 'userLookVideo',
  //  props:['zhangjieList'],
   data(){
       return{
         text:'',
          textarea:'',
          videosrc:'',
          classList:[],
          chapters:[],
          showVar:[],
          zhangjieId:'',
          contextList:[
           
          ],
          tcontextList:{
            user_icon:'',
              user_name:'',
              pinglunTime:'',
              user_commit:''
          }
       }
   },
   components:{
     Video
   },
   methods:{
          toVedioPath(i,j){
            //  this.videosrc="path: 第"+(i+1)+"章。"+"第"+(j+1)+"节";
            //  console.log(this.videosrc);
            // this.videosrc=this.showVar[i].cjnList[j].course_src_path;
            this.videosrc=this.showVar[i].cjnList[j].course_src_path;
            this.zhangjieId=this.showVar[i].cjnList[j].chapter_id;
            //  console.log(this.videosrc);
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
                return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
            },
           pinglunSubmit(){
             if(this.textarea==""){
               this.$message("请输入内容哦~~")
               return ;
             }
            this.tcontextList.pinglunTime=this.formatDateTime(new Date());
            this.tcontextList.user_name=JSON.parse(sessionStorage.getItem("user")).user_name;
            this.tcontextList.user_icon=JSON.parse(sessionStorage.getItem("user")).user_icon;
            this.tcontextList.user_commit=this.textarea;
            this.contextList.unshift(this.tcontextList);
            this.tcontextList={
               user_icon:'',
              user_name:'',
              pinglunTime:'',
              user_commit:''
            };
            //后端发送请求
            // let user_id=sessionStorage.getItem("user_id");
            // console.log("user_id为: "+user_id);  
            // console.log("内容为: ");
            // console.log(this.textarea);
            // console.log("章节id为: ");
            // console.log(this.zhangjieId);
          }
   },
   mounted(){
    //  console.log("章节信息:")
     this.chapters=this.$route.query.zhangjieList.chapters;
     if(this.chapters==null || this.chapters==undefined) return ;
     let cznm = new Map();
     let czns = new Set([]);

     for(let i=0;i<this.chapters.length;i++){
        czns.add(this.chapters[i].course_zhang_name);
     }
     for(let i=0;i<this.chapters.length;i++){
       if(cznm.get(this.chapters[i].course_zhang_name)==null||cznm.get(this.chapters[i].course_zhang_name)==undefined){
            cznm.set(this.chapters[i].course_zhang_name,[])
       }
            cznm.get(this.chapters[i].course_zhang_name).push(this.chapters[i])
     }
     for(let key of czns){
         console.log(key);
         console.log(cznm.get(key))
        this.showVar.push({
          czn: key,
          cjnList: cznm.get(key)
        })
     }
    //  for(let i=0;i<this.showVar.length;i++){
    //    console.log(this.showVar[i]);
    //  }
   }
}
</script>

<style scoped>

.el-aside-mulu{
  width: 100%;
  background-color: #545C64;
  font-size: 1.5rem;
  color: white;
}
.el-menu-vertical-demo{
  width: 100%;
  height: 100%;
  background-color: #545C64;
}
.user-vedio-container{
  display: block;
}
.user-vedio-container-btn1{
  margin-left: 70%;
  margin-top: 0.5%;
  height: 80%;
}
.user-vedio-container-btn2{
  margin-top: 0.5%;
  height: 80%;
}
.user-vedio-container-btn3{
    margin-top: 0.5%;
  height: 80%;
}
.infinite-list{
  margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100%;

}
  .infinite-list::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .infinite-list::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: #B3C0D1;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  .infinite-list::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 20px;
  }


  .el-container {
      width: 100%;
      height: 100%;
    }
  .user-vedio{
    width: 100%;
    height: 100%;
  }
  .el-header {
    background-color: #545C64;
    color: #333;
    text-align: center;
    width: 100%;
  }
  .el-footer{
    display:inline-block;
    color: #333;
    text-align: center;
    width: 100%;
    background-color:rgba(84,92,100,.15);
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
  }
  .el-aside::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 5px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .el-aside::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: #545C64;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  .el-aside::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
  }
  
  .el-main {
    margin: 0px;
    padding: 0px;
    /* background-color: red; */
    color: #333;
    /* text-align: center; */
    width: 100%;
    height: 80%;
  }
.el-footer-pinglun-input{
    position: relative;
    width: 100%;
    height: 10rem;
    background-color: white;
    border-radius: 20px;
    margin-top: 2%;
    margin-bottom: 2%;
    box-shadow: 5px 5px 10px #CBCED0 inset;
}
.el-footer-pinglun-input-icon{
  position: absolute;
  width: 9%;
  height: 18%;
  margin-top: 1%;
}
.el-footer-pinglun-input-icon img{
  width: 90%;
  height: 90%;
  opacity: 0.2;
  object-fit: cover;
   border-radius: 30%;
}
.el-footer-pinglun-input-el-btn{
    position: absolute;
    top: 70%;
    right: 3%;
}
.el-footer-pinglun-show{
    position: relative;
    /* position: absolute; */
    width: 100%;
    height: 8rem;
    background-color: white;
    border-radius: 20px;
    margin-top: 2%;
    margin-bottom: 2%;
    box-shadow: 5px 5px 10px #CBCED0 inset;
    display: flex;

    /* animation: dong 0.5s linear alternate; */
}
@keyframes dong {
  0%{
    transform: scale(0.5);
  }
  100%{
    transform: scale(1);
  }
}
.el-footer-pinglun-show-icon{
  position: absolute;
  width: 10%;
  height: 80%;
  margin-top: 1%;
  margin-left: 1%;
  border-radius: 50%;
  overflow: hidden;
  /* background-color: red; */
}
.el-footer-pinglun-show-icon img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-footer-pinglun-input-show img{
  width: 90%;
  height: 90%;
  object-fit: cover;
}
.el-footer-pinglun-show-content{
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  left: 11.5%; 
}
.el-footer-pinglun-show-content-name-data{
  position: relative;
  margin-top: 1%;
  width: 80%;
  height: 30%;
}
.el-footer-pinglun-show-content-con{
  color: #A1A1A1;
  text-align: left;
  margin-top: 0.5%;
  width: 80%;
  height: 50%;
}
</style>