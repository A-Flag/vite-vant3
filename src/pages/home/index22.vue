<script>
  export default{
      data() {
      return {
        showVideo:true,
        showCanvas:true,
        myVideo:null,
        constraints:{},
        videoStream:null,
        buttonText:"拍照",
        trackerTask: null,
      }
    },
    create(){
    },
    mounted() {
//       this.createVideo();
    },
    methods: {
      createVideo(){
        // 获取video标签
        this.myVideo = document.querySelector('#video');
 
        // JavaScript 调用设备前后摄像头参数配置
        this.constraints = { // 初始值
            audio:false, // 获取音频轨
            video: {  // 获取并设定视频轨相应参数
                width: {
                    min: 100, // 最低视频分辨率宽值标准
                    ideal: 1920, // 最优视频分辨率宽值标准，权重最高，优先使用接近该值数据
                    max: 200 // 最高视频分辨率宽值标准
                },
                height: {
                    min: 150,
                    ideal: 1080,
                    max: 200
                },
                facingMode:  'environment'  // user -- 前置 、environment -- 后置、{ exact: "environment" } -- 前置调用后置摄像头
            } // 流以正确的宽度和高度比例进入，如果它是处于纵向模式的手机，则需要进行尺寸反转
        };
 
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) { // 检查浏览器是否支持此API
          this.switchDirection(); // 浏览器支持
        } else {
            console.log('浏览器暂不支持');
        }
      },
          clickButton(){
            if (this.showCanvas) {
              this.buttonText = "拍照";
              this.myVideo.play();
              this.showVideo = true;
              this.showCanvas = false;
            }else{
              this.buttonText = "返回"
              this.myVideo.pause();
              this.screenshot();
            }
          },
          screenshot(){
                // 绘制预览图片
                canvas.width = this.myVideo.videoWidth;
                canvas.height = this.myVideo.videoHeight;
                const vm = document.body.clientWidth;
                canvas.getContext('2d').drawImage(this.myVideo, 0, 0, vm, 350);
                this.showVideo = false;
                this.showCanvas = true;
            },
          // 你想在已经播放视频的情况下更换摄像机的前后摄像头，需要先停止当前的前置或者后置的视频流，再将其替换成摄像机的前置或者后置的视频流。
          async switchDirection() {
                if (this.videoStream) {
                    this.videoStream.getTracks().forEach((track) => {
                        track.stop();
                    });
                }
                try {
                    // 详细请参考：https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia
                    this.videoStream = await navigator.mediaDevices.getUserMedia(this.constraints); // 调用将询问用户是否允许访问摄像机。如果用户拒绝，它将引发异常并且不返回流。因此，必须在 try/catch 块内处理这种情况,它返回一个Promise，必须使用 async/await 或 then 块
                    /*
                    异常：
                    1、AbortError：中止错误
                        尽管用户和操作系统都授予了访问设备硬件的权利，而且未出现可能抛出NotReadableError异常的硬件问题，但仍然有一些问题的出现导致了设备无法被使用。
                    2、NotAllowedError：拒绝错误
                        用户拒绝了当前的浏览器实例的访问请求；或者用户拒绝了当前会话的访问；或者用户在全局范围内拒绝了所有媒体访问请求。
                    3、NotFoundError：找不到错误
                        找不到满足请求参数的媒体类型。
                    4、NotReadableError：无法读取错误
                        尽管用户已经授权使用相应的设备，操作系统上某个硬件、浏览器或者网页层面发生的错误导致设备无法被访问。
                    5、OverconstrainedError：无法满足要求错误
                        指定的要求无法被设备满足，此异常是一个类型为OverconstrainedError的对象，拥有一个constraint属性，这个属性包含了当前无法被满足的constraint对象，还拥有一个message属性，包含了阅读友好的字符串用来说明情况。
                    6、SecurityError：安全错误
                        在getUserMedia() 被调用的 Document 上面，使用设备媒体被禁止。这个机制是否开启或者关闭取决于单个用户的偏好设置。
                    7、TypeError：类型错误
                        constraints 对象未设置［空］，或者都被设置为false。
                    */
                    this.myVideo.srcObject = this.videoStream;
                } catch (error) {
                    console.log(error)
                }
            },
      },
  
}
</script>
<template>
    <div id="app">
    <!--
                 autoplay：自动播放，没有时需要调用video.play()才可进行视频播放
                     loop：循环播放视频
                    muted：静音播放
              playsinline：IOS微信浏览器支持小窗内播放，详情查看：https://blog.csdn.net/web_ding/article/details/112601894
       webkit-playsinline：防止IOS中HTML5默认全屏播放行为，即可以进行小窗播放视频，IOS10以上支持该属性
     -->
    <video v-show="showVideo" id="video" style="width: 100%; display: block;" autoplay loop muted playsinline webkit-playsinline="true"></video>
    <canvas v-show="showCanvas" id="canvas" ></canvas>
    <div id="imageData"></div>
    <button @click="clickButton()">{{buttonText}}</button>   
  </div>

</template>

