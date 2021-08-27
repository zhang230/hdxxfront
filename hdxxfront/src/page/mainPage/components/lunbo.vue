<template>
 <div class="lunbo">
       <el-carousel indicator-position="outside" :height="31.5 +'rem'">
            <el-carousel-item style="width: 100%;height: 100%;" v-for="item in imagesUrl" :key="item" >
            <div class="lunbo-mid"><img :src="item" alt=""></div>
            </el-carousel-item>
        </el-carousel>
        <div class="lunbo-login">
            <div class="lunbo-login-title">
                <div class="lunbo-login-title-div">欢迎来到预备队学习中心</div>
            </div>
            <div class="lunbo-login-mid">
                 <div class="lunbo-login-mid-div">一键注册,免费体验,试用专属学习方案</div>
            </div>
            <div class="lunbo-login-button">
                 <el-button type="primary" style="width: 6rem; border:1px solid #3566CD;" @click="toLoginAndRegister(1)">登录</el-button>
                 <el-button  style="margin-left: 10%; width: 6rem; border:1px solid #3566CD;" @click="toLoginAndRegister(2)">注册</el-button>
            </div>
            <div class="lunbo-login-query">
              欢迎咨询小哥哥QQ : 1804961700
            </div>
        </div>
 </div>
</template>

<script>
export default {
    props:["showLogin","showRegister"],
    data(){
      return{
         showLogin:false,
         showRegister:false,
         imagesUrl:''
      }
    },
    methods:{
        toLoginAndRegister(value){
          if(value==1){
            this.showLogin=!this.showLogin;
          }else if(value==2){
            this.showRegister=!this.showRegister;
          }
           this.$emit("showLoginAndRegister",{
             showLogin: this.showLogin,
             showRegister: this.showRegister
           });
        },
        preload(){
          this.imagesUrl=[
                "http://localhost:8080/lun1.jpg",
                "http://localhost:8080/lun2.jpg",
                "http://localhost:8080/lun3.jpg",
                "http://localhost:8080/lun4.gif",
              ];
              for(let i of imgs){
                let image=new Image();
                image.src=i;
                image.onload = () =>{
                  
                }
              }
        }
    },
    mounted(){
        this.preload();
    }
}
</script>

<style scoped>

.lunbo-mid{
  /* margin:0 auto; */
  /* margin-top: 2%; */
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.lunbo-mid img{
  width: 100%;
  height: 100%;
  /* background-color: black; */
  /* max-width: 100%; */
  /* max-height: 100%; */
  /* background-size: cover; */
  object-fit: fill;
}
.lunbo-login-button{
  display: flex;
  margin-left: 20%;
  margin-top: 15%;
}
.lunbo-login-query{
  margin-left: 16.5%;
  margin-top: 10%;
  opacity: 0.75;
}
.lunbo-login-mid-div{
  margin-left: 15%;
  opacity: 0.75;
}
.lunbo-login-title{
  width: 80%;
  height: 40%;
  /* background-color: red; */
  margin: auto;
  position: relative;
}
.lunbo-login-title-div{
  font-size: 2rem;
  font-weight: 1000;
  position: absolute;
  margin-top: 16%;
  text-align: center;
  color:#3566CD;
}
.lunbo{
    width: 100%;
    height: 70%;
    background-color: #475669;
    position: relative;
}
.lunbo-login{
  position: absolute;
  top: 5%;
  left: 70%;
  width: 25%;
  height: 80%;
  z-index: 2;
  background-color: white;
  opacity: 0.75;
  border-radius: 1rem;
  /* -webkit-box-reflect: left; */
   box-shadow:#66B1FF 0px 0px 10px
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>