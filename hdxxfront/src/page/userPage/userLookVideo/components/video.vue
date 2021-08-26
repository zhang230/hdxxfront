<template>
        <div class="div_image">
            <video-player  v-if="videosrc!=null && videosrc!=undefined && videosrc!= ''" class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            style="position: absolute; width: 100%; height: 100%; left: 0px; top: 0px; bottom: 0px; right: 0px; object-fit: fill;"
                            :playsinline="true"
                            :options="playerOptions"
                ></video-player>
                
        </div>
       
</template>

<script>
   
export default {
    name: 'mainup',
    props:['videosrc'],
    data() {
      return {
          tsrc:'',
          var_change:true,
          value: 4.2,
          playerOptions :	{
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '2:1', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                type: "video/mp4",
                // src: this.videosrc //url地址
                // src: require("C:/advisor/upload/video/springioc_20210825-112159-170.mp4")
                src: ''
                }],
                // poster: "", //你的封面地址
                //  width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
                }
            }
      }
    },
    methods: {
        
    },
    mounted(){
      this.tsrc=this.videosrc;
        console.log("数据路径: "+this.tsrc);
        this.playerOptions.sources[0].src=this.tsrc;
    }
  }
</script>

<style scoped>
.div_image{
    position: relative;
    width: 100%;
    height: 100%;
    /* background-color: blue; */
}
</style>