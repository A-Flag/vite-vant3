// // rem等比适配配置文件
// // 基准大小
// const baseSize = 16
// // 设置 rem 函数
// function setRem () {
//   // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
//   const scale = document.documentElement.clientWidth / 1920
//   // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
//   document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
// }
// // 初始化
// setRem()
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem()
// }

function adapter(){
  //获取布局视口宽度，因为开启了理想视口。布局视口 = 设备横向独立像素值
  const dpWidth = document.documentElement.clientWidth;
  //计算根字体大小
  const rootFonstSize = dpWidth/10;
  //设置字体大小
  document.documentElement.style.fontSize = rootFonstSize + 'px'

}
adapter()
window.onresize = adapter
// (function (doc, win) {
//   var docEl = win.document.documentElement;
//   var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  
//   var refreshRem = function () {
//     var clientWidth = win.innerWidth
//                       || doc.documentElement.clientWidth
//                       || doc.body.clientWidth;

//     console.log(clientWidth)
//     if (!clientWidth) return;
//     var fz;
//     var width = clientWidth;
//     fz = 16 * width / 375;
//     docEl.style.fontSize = fz + 'px';//这样每一份也是16px,即1rem=16px
//   };

//   if (!doc.addEventListener) return;
//   win.addEventListener(resizeEvt, refreshRem, false);
//   doc.addEventListener('DOMContentLoaded', refreshRem, false);
//   refreshRem();

// })(document, window);