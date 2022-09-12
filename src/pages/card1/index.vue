<script setup lang="ts">
import { ref } from "vue";
const list_4NDMLGdb = ref([null, null, null, null]);
</script>
<template>
  <div class="flex-col page">
    <div class="flex-col group_4">
      <div class="flex-col space-y-11 header">
        <div class="flex-row justify-center group">
          <div class="flex-row group_1">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c3218d6d32e90012f09dc8/16238398704456323510.png"
              class="image"
            />
            <span class="text">Sketch</span>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c3218d6d32e90012f09dc8/16238398704472423237.png"
              class="image_1"
            />
          </div>
          <span class="text_1">1:21 AM</span>
          <div class="flex-row group_2">
            <span class="text_2">99%</span>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/60c325b4767e240013341755/60c3218d6d32e90012f09dc8/16551312673669998047.png"
              class="image_2"
            />
          </div>
        </div>
        <div class="flex-row justify-center group_3">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c3218d6d32e90012f09dc8/16238398704389250708.png"
            class="image_3"
          />
          <span class="text_3">权益分类</span>
          <div class="flex-row space-x-23 section_1">
            <div class="flex-col items-center image-wrapper view">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c3218d6d32e90012f09dc8/16238398704403803609.png"
                class="image_4"
              />
            </div>
            <div class="section_2"><!----></div>
            <div class="flex-col items-center image-wrapper">
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c3218d6d32e90012f09dc8/16238398704416470079.png"
                class="image_5"
              />
            </div>
          </div>
        </div>
      </div>
      <span class="text_4">咖啡茶饮</span>
      <div class="flex-col space-y-20 list">
        <div
          class="flex-row list-item"
          :key="i"
          v-for="(item, i) in list_4NDMLGdb"
        >
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c3218d6d32e90012f09dc8/16238398848027840735.png"
            class="image_6"
          />
          <div class="flex-col items-start space-y-39 group_5">
            <span class="text_5">星巴克咖啡</span>
            <div class="flex-col items-center text-wrapper">
              <span class="text_7">全品类8折</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./index.less" lang="less" scoped></style>
