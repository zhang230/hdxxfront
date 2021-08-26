<template>
     <el-container>
      <el-header >
          <div class="user-img-tuichu">
              <div class="user-img-tuichu-img" >
                    <img :src="touxiang" alt="">
                   
              </div>
              
              <div class="user-img-tuichu-tuichu">
                     <!-- <button>退出</button> -->
                      <el-link class="user-img-tuichu-tuichu" @click="toMainPage()">退出</el-link>
              </div>
              
          </div>
           <el-link  class="user-person" @click="toPersonInfo()">个人信息中心</el-link>
      </el-header>
      <el-main>
         <div class="user-left"  align="center">
              <div class="user-left-search" >
                  <el-input v-model="search_course_name" placeholder="请输入搜索课程名" class="user-left-search-input"></el-input>
                  <div class="user-left-search-icon">
                    <!-- <img src="../../../assets/search.png" alt=""> -->
                     <el-button type="success"  @click="searchCourse()">搜索</el-button>
                  </div>
              </div>
              <div class="user-left-list" align="center">
                      <div class="user-left-list-course" v-for="(item,index) in mianfei" :key="index">
                        <div class="user-left-list-course-icon">
                          <img :src="mianfei[index].course_icon" alt=""/>
                        </div>
                        <div class="user-left-list-course-right">
                            <div class="user-left-list-course-right-course1">        
                                 <!-- mianfei[index].course_name -->
                               <div class="user-left-list-course-right-course1-1" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;display:flex;">课程名称:{{mianfei[index].course_name}}</div>
                               <div class="user-left-list-course-right-course1-2" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">课程类别:{{mianfei[index].course_category}}</div>
                               <div class="user-left-list-course-right-course1-3" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">课程来源:{{mianfei[index].course_origin}}</div>
                            </div>
                            <div class="user-left-list-course-right-course2">
                                <div class="user-left-list-course-right-course2-1" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                      创建时间:{{mianfei[index].course_create_time}}
                                </div>
                                <div class="user-left-list-course-right-course2-2" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                      上次学习时间:{{mianfei[index].last_study_time}}
                                </div>
                            </div>
                            <div class="user-left-list-course-right-course3">
                                    <el-button type="primary" round style="margin-top: 5%;" @click="startStudy(index)">开始学习</el-button>
                                    <el-button type="primary" round @click="doNote(index)">做笔记</el-button>
                                        <el-rate
                                        style="margin-top: 10%;"
                                          v-model="rate"
                                          :colors="colors">
                                        </el-rate>
                            </div>
                        </div>
                      </div>
              </div>
         </div>
         <div class="user-right" align="center" >
           <!-- v-for="(item,index) in tuijian" :key="index" -->
           <span style="font-size: 1.5rem;font-weight: 1000;opacity: 0.7;">为您推荐:</span>
               <div class="user-right-course"  v-for="(item,index) in tuijian" :key="index">
                   <div class="user-right-course-up">
                        <img src="../../../assets/touxiang.png" alt="">
                   </div>
                   <div class="user-right-course-down">
                          课程名称 : 13213212312312312313213
                   </div>
               </div>
               
         </div>
      </el-main>
      <div class="luoye"></div>
      <!-- <userLookVideo :zhangjieList="zhangjieList"></userLookVideo> -->
    </el-container>
  
</template>

<script>
import $ from 'jquery'
// import userLookVideo from '../userLookVideo/userLookVideo.vue'
export default {
  name: "userMain",
  data(){
    return{
        touxiang: JSON.parse(sessionStorage.getItem("user")).user_icon,
        search_course_name:'',
        count: 0,
        rate: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        mianfei:[],
        tmianfei:[],
        tuijian:[1,2,3,4,5,6],
        zhangjieList:''
    }
  },
  components: {
    // userLookVideo
  },
  methods:{
    startStudy(index){
          this.zhangjieList=this.mianfei[index];
          // console.log("开始学习选中课程为:: ");
          // console.log(this.zhangjieList);
          // let _this=this;
          this.$router.push({path:'/user/userLookVideo',query:{
            zhangjieList: this.zhangjieList
          }});
        // console.log("开始学习选中课程的下标为: "+index);
    },
    doNote(index){
      console.log("做笔记选中课程的下标: "+index);
    },
    searchCourse(){
      let _this=this;

        this.$http.get("user/searchCourseInfo?course_name="+this.search_course_name).then(function(res){
          _this.mianfei=[];
                      // console.log(res);
          _this.tmianfei=res.data.data;
          // console.log("获得课程:");
          // console.log(_this.mianfei);
           // 核心代码，可自行封装
          function converTimeOfYMD(date) {
            return new Date(date).toISOString().slice(0, 10);
          }
          for(let i=0;i<_this.tmianfei.length;i++){
              if(_this.tmianfei[i].chapters==null || _this.tmianfei[i].chapters==undefined||_this.tmianfei[i].chapters.length==0){
                continue;
              }
              
                let date=_this.tmianfei[i].course_create_time;
                _this.tmianfei[i].course_create_time=converTimeOfYMD(date);
                _this.tmianfei[i].last_study_time=converTimeOfYMD(date);
                _this.mianfei.push(_this.tmianfei[i]);
          }
        }).catch(function(err){
              console.log(err);
        });
        // console.log("搜索咯!!!!!");
    },
      load () {
        this.count += 2
      },
      toMainPage(){
        sessionStorage.removeItem("user_id");
         sessionStorage.removeItem("user");
        this.$router.push({path:'/'})
      },
      toPersonInfo(){
        this.$router.push({path:'/userMain/userPerson'})
      }
  },
    mounted(){
      let _this = this;
       this.$http.get("user/allCourseInfo").then(function(res){
          // console.log(res);
          _this.tmianfei=res.data.data;
          // console.log("获得课程:");
          // console.log(_this.mianfei);
           // 核心代码，可自行封装
          function converTimeOfYMD(date) {
            return new Date(date).toISOString().slice(0, 10);
          }
          for(let i=0;i<_this.tmianfei.length;i++){
              if(_this.tmianfei[i].chapters==null || _this.tmianfei[i].chapters==undefined||_this.tmianfei[i].chapters.length==0){
          
                continue;
              }
              
                let date=_this.tmianfei[i].course_create_time;
                _this.tmianfei[i].course_create_time=converTimeOfYMD(date);
                _this.tmianfei[i].last_study_time=converTimeOfYMD(date);
                _this.mianfei.push(_this.tmianfei[i]);
          }
          console.log("去除0之后的长度:"+_this.mianfei.length);
       }).catch(function(err){
          console.log(err);
       });
    }
};
</script>

<style scoped>
.user-right-course-down{
  width: 100%;
  height: 10%;
  font-weight: 1000;
  opacity: 0.5;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* background-color: red; */
  /* margin-left: -70%; */
  margin-top: 4%;
}
.user-right-course-up{
  width: 98%;
  height: 80%;
  background-color: white;
  /* border: 1px solid black; */
  /* linear-gradient(rgb(0, 225, 255), rgb(201, 243, 250), rgb(124, 141, 189)) */
}
.user-right-course-up img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10%;
  /* background-image: linear-gradient(rgb(0, 225, 255), rgb(201, 243, 250), rgb(124, 141, 189)); */
}
.user-right-course{
  margin-bottom: 5%;
  width: 90%;
  height: 40%;
  background-color: rgba(187,198,214,0.2);
  border-radius: 10%;
  box-shadow:5px 5px 6px #B3C0D1;
}
.user-right-course:hover{
  transform: scale(1.01);
}
.user-left-list-course-right-course3{
  width: 40%;
  height: 100%;
  background-color: rgba(238, 246, 247, 0.9);
}
.user-left-list-course-right-course2-1{
   margin-top: 10%;
  /* margin-left: -50%; */
}
.user-left-list-course-right-course2-2{
   margin-top: 10%;
    /* margin-left: -50%; */
   font-size: 0.8rem;
   font-weight: 1000;
   opacity: 0.7;

}
.user-left-list-course-right-course2{
  width: 30%;
  height: 100%;
  text-align: left;
  background-color: rgba(238, 246, 247, 0.9);
}
.user-left-list-course-right-course1-1{
  margin-top: 10%;
  /* margin-left: -50%; */
}
.user-left-list-course-right-course1-2{
   margin-top: 10%;
    /* margin-left: -55%; */
   font-size: 0.8rem;
   font-weight: 1000;
   opacity: 0.7;
}
.user-left-list-course-right-course1-3{
  margin-top: 10%;
    /* margin-left: -56%; */
    font-size: 0.7rem;
   font-weight: 1000;
   opacity: 0.5;
}
.user-left-list-course-right-course1{
  width: 30%;
  height: 100%;
  text-align: left;
  background-color: rgba(238, 246, 247, 0.9);
}
.user-left-list-course-icon img{
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
}
.user-left-list-course-right{
  display: flex;
  width: 77%;
  height: 80%;
  margin-top:1.5%;
  margin-left:0.5%;
  border-radius: 5%;
  /* background-color: blue; */
}
.user-left-list-course-icon{
  margin-top: 1.5%;
  margin-left: 1.5%;
  border-radius: 10%;
  width: 20%;
  height: 80%;
  background-color: black;
}
.user-left-list{
  width: 100%;
  height: 90%;
  overflow: scroll;
  /* background-color: black; */
}
.user-left-list::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 5px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .user-left-list::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: #8ce5fc;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(65, 193, 231, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  .user-left-list::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px #77c1fd33;
  background   : #ededed;
  border-radius: 20px;
  }
.user-left-list-course{
  display: flex;
  margin-bottom: 2%;
  width: 80%;
  height: 30%;
  border:3px solid  rgb(58, 169, 233);
  border-radius: 10%;
  box-shadow:-10px 5px 10px rgb(58, 169, 233);
  /* transform: rotate(-3deg) */
  /* background-color: red; */
}
.user-left-list-course:hover{
  transform: scale(1.01);
}
@keyframes change {
  0%{
    transform: scale(0.5);
  }
  100%{
    transform: scale(1.5);
  }
}
.user-left-search-icon{
  margin-top: 2%;
  margin-left: 1%;
  width: 8%;
  height: 50%;
  /* background-color: black; */
}
/* .user-left-search-icon img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.5;
} */
.user-left-search-input{
  margin-top: 2%;
  margin-left: 20%;
  width: 50%;
  /* height: 100%; */
  border-radius: 5rem;
}
.user-left-search{
  display: flex;
  width: 50%;
  height: 10%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5%;
}
.user-right{
   width: 20%;
  height: 100%;
  overflow: scroll;
  /* background-color: blue; */
}
.user-right-list{
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.user-left{
  width: 80%;
  height: 100%;
  background-image: url('../../../assets/bg2.gif');
  background-size: cover;
  /* background-color: red; */
}
.user-img-tuichu-tuichu{
  color: white;
}
.user-person{
  position: absolute;
  right: 12%;
  top: 3%;
  color:white;
  /* border-bottom: 1px solid white; */
}
.user-img-tuichu-img img{
  width: 100%;
  height: 100%;
  border-radius: 100%;
  /* opacity: 0.5; */
  object-fit: cover;
}
.user-img-tuichu{
  display: flex;
  margin-left: 90%;
  width: 10%;
  height: 100%;
  /* background-color: red; */
}
.user-img-tuichu-img{
  width: 40%;
  height: 80%;
  margin-top: 5%;
}
.user-img-tuichu-tuichu{
  width: 50%;
  height: 100%;
  /* background-color: blue; */
}
.user-img-tuichu-tuichu button{
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  color: white;
  outline: none;
  text-decoration: none;
  background-color: #B3C0D1;
  border: 0px;
}
.user-img-tuichu-tuichu button:hover{
  text-decoration: underline;
}
.el-container{
    width: 100%;
    height: 100%;
}
.el-header {
    /* position: fixed; */
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 20%;
}
  
  
.el-main {
  display: flex;
    margin: 0%;
  padding: 0%;
    background-color: white;
    color: #333;
    text-align: center;
    height: 80%;
}




.user-right::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 5px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
.user-right::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: #8ce5fc;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(65, 193, 231, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
.user-right::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px #77c1fd33;
  background   : #ededed;
  border-radius: 20px;
  }

  
</style>