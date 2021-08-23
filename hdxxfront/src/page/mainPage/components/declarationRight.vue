<template>
  <div class="dr">
    <div class="dr-center">
         <div class="dr-center-1">
             <div class="dr-center-1-1">就业培训</div>
             <div>Java+大数据</div>
             <div>前端全栈</div>
             <div>信息安全</div>
             <div>UI设计</div>
            
         </div>
        <div class="dr-center-2">
            <div class="dr-center-2-1">学习资源</div>
             <div>课程视频</div>
             <div>知了会员</div>
             <div>腾讯课堂</div>
             <div>bilibili</div>
        </div>
        <div class="dr-center-3">
            <div class="dr-center-3-1">学员动态</div>
             <div>学员作品</div>
             <div>就业榜</div>
             <div>龙虎榜</div>
        </div>
        <div class="dr-center-4">
              <div class="dr-center-4-1">关于我们</div>
             <div>关于我们</div>
             <div>校企联盟</div>
             <div>联系我们</div>
        </div>
        <div class="dr-center-5">
            <div class="dr-center-5-1">
                <div class="dr-center-5-vx">
                    <div class="dr-center-5-vx-img">
                        <img src="" alt="">
                    </div>
                    微信公众号
                </div>
                <div class="dr-center-5-qq">
                <div class="dr-center-5-qq-img">
                        <img src="" alt="">
                </div>
                    官方咨询QQ
            </div>
            </div>
            <div class="dr-center-5-tell">
                联系电话:16608038762   联系QQ:1804961700
            </div>
            <div class="dr-center-5-address">
                地址:成都天府软件园G8-7
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dr{
    width: 100%;
    height: 40%;
    background-color: black;
    display: flex;
}
.dr-center{
    margin: auto;
    width: 70%;
    height: 100%;
    /* background-color: red; */
    display: flex;
}
.dr-center-1, .dr-center-2, .dr-center-3, .dr-center-4{
    width: 16%;
    height: 100%;
    /* background-color: blue; */
    margin-left: 1%;
}
.dr-center-5{
    width: 25%;
    height: 100%;
    /* background-color: blue; */
    margin-left: 1%;
}
.dr-center-1 div{
    list-style-type:none;
    margin-top: 15%;
    color: #999999;

}
.dr-center-1{
    text-align: center;
}
.dr-center-1-1{
    font-size: 1.5rem;
    font-weight: 1000;
    color: #999999;
}

.dr-center-2 div{
    list-style-type:none;
    margin-top: 15%;
    color: #999999;

}
.dr-center-2{
    text-align: center;
}
.dr-center-2-1{
    font-size: 1.5rem;
    font-weight: 1000;
    color: #999999;
}
.dr-center-3 div{
    list-style-type:none;
    margin-top: 15%;
    color: #999999;

}
.dr-center-3{
    text-align: center;
}
.dr-center-3-1{
    font-size: 1.5rem;
    font-weight: 1000;
    color: #999999;
}
.dr-center-4 div{
    list-style-type:none;
    margin-top: 15%;
    color: #999999;

}
.dr-center-4{
    text-align: center;
}
.dr-center-4-1{
    font-size: 1.5rem;
    font-weight: 1000;
    color: #999999;
}
.dr-center-5-1{
    display: flex;
    width: 100%;
    height: 50%;
}
.dr-center-5-vx{
    width: 40%;
    height: 80%;
    margin-left: 7%;
    margin-top: 15%;
    /* background-color: red; */
    font-size: 0.5rem;
    text-align: center;
    color: #999999;
}
.dr-center-5-qq{
    width: 40%;
    height: 80%;
    margin-left: 5%;
     margin-top: 15%;
    /* background-color: red; */
    font-size: 0.5rem;
    text-align: center;
    color: #999999;
}
.dr-center-5-vx-img{
    width: 100%;
    height: 80%;
    background-color: blue;
}
.dr-center-5-qq-img{
    width: 100%;
    height: 80%;
    background-color: blue;
}
.dr-center-5-tell{
    margin-top: 7%;
    margin-left: 6%;
    font-size: 0.5rem;
    color: #999999;
}
.dr-center-5-address{
    margin-top: 1%;
    margin-left: 6%;
    font-size: 0.5rem;
    color: #999999;
}
</style>