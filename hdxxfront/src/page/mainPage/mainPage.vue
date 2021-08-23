<template>
  <div class="mainPage">
     <Navigator></Navigator>
     <Lunbo  @showLoginAndRegister="change"></Lunbo>
     <Dr></Dr>
     <div v-if="showLogin" :showLogin="showLogin">
        <LoginPage></LoginPage>
         <el-button circle  @click="closeLogin()"  class="mainPage-closebuntton">关闭</el-button>
      </div>
      <div v-if="showRegister" :showRegister="showRegister">
        <RegisterPage></RegisterPage>
         <el-button circle  @click="closeRegister()"  class="mainPage-closebuntton">关闭</el-button>
      </div>
  </div>
</template>
<script>
import LoginPage from './components/loginPage.vue'
import Navigator from './components/navigator.vue'
import Lunbo from './components/lunbo.vue'
import Dr from './components/declarationRight.vue'
import RegisterPage from './components/registerPage.vue' 
export default {
     name:"mainPage",
     data(){
       return{
         showLogin:false,
         showRegister: false
       }
     },
     components:{
       Navigator,
       Lunbo,
       Dr,
       LoginPage,
       RegisterPage
     },
     methods:{
       change(data){
           this.showLogin=data.showLogin;
           this.showRegister=data.showRegister;
       },
       closeLogin(){
         console.log(this.showLogin);
           this.showLogin=!this.showLogin;
       },
       closeRegister(){
          this.showRegister=!this.showRegister;
       }
     }
}
</script>

<style scoped>
.mainPage{
  width: 100%;
  height: 100%;
}
.mainPage-closebuntton{
  position: absolute;
  right: 2%;
  top: 2%;
  z-index: 3;
  border: rgb(71,86,105);
  background-color: rgb(71,86,105);
  color: white;
  opacity: 0.8;
}

</style>