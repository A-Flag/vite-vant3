<script setup lang="ts">
// import Tabs from "../src/components//Tabs/index.vue";
</script>
<template>
  <div>
    <!-- <van-button type="primary">主要按钮</van-button>
    <div class="test-class">lala</div>
    <Tabs />
    11 -->
    <router-view> </router-view>
  </div>
</template>
<style>
/************************************************************
** 请将全局样式拷贝到项目的全局 CSS 文件或者当前页面的顶部 **
** 否则页面将无法正常显示                                  **
************************************************************/

html {
  font-size: 16px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  flex-shrink: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.items-end {
  align-items: flex-end;
}
</style>
<style lang="less" scoped>
@color: red;
.test-class {
  width: 100px;
  height: 100px;
  background: green;
  color: @color;
}
</style>
