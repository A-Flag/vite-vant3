<script setup lang="ts">
import { ref } from "vue";
const list_josu1zCW = ref([null, null, null, null]);
</script>
<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-center group">
        <div class="flex-row group_1">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397306873160312.png"
            class="image"
          />
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397306825330090.png"
            class="image_1"
          />
        </div>
        <span class="text">9:53 AM</span>
        <div class="flex-row group_2">
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397306175437197.png"
            class="image_2"
          />
          <span class="text_1">100%</span>
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/60c325b4767e240013341755/60c321996d32e90012f09dd0/16551314256638016020.png"
            class="image_3"
          />
        </div>
      </div>
      <div class="flex-row justify-center group_3">
        <span class="text_2">预约</span>
        <div class="flex-row section_1">
          <div class="flex-col items-center image-wrapper view">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397305984978316.png"
              class="image_4"
            />
          </div>
          <div class="section_2"><!----></div>
          <div class="flex-col items-center image-wrapper view_1">
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397305900346897.png"
              class="image_5"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col group_4">
      <div class="flex-col list">
        <div
          class="flex-row list-item"
          :key="i"
          v-for="(item, i) in list_josu1zCW"
        >
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397397398308282.png"
            class="image_6"
          />
          <div class="flex-col group_5">
            <div class="flex-col">
              <span class="text_3">八月开启婴儿游泳培训班</span>
              <div class="flex-row group_7">
                <div class="flex-col text-wrapper">
                  <span class="text_5">亲子关系</span>
                </div>
                <div class="flex-col text-wrapper_1">
                  <span class="text_7">生存能力</span>
                </div>
              </div>
            </div>
            <div class="flex-row justify-between group_8">
              <div class="flex-row group_9 view_7">
                <span class="text_9">¥</span>
                <span class="text_11">199.0</span>
              </div>
              <span class="text_13">已报名123人</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row justify-between tab-bar">
      <div class="flex-col items-center group_13">
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397331792556873.png"
          class="image_11"
        />
        <span class="text_34 text_35">首页</span>
      </div>
      <div class="flex-col items-center group_13">
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397331792754901.png"
          class="image_11"
        />
        <span class="text_34 text_36">商城</span>
      </div>
      <div class="flex-col items-center group_13">
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397416678346921.png"
          class="image_11"
        />
        <span class="text_34 text_37">预约</span>
      </div>
      <div class="flex-col items-center group_13">
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397331818020924.png"
          class="image_11"
        />
        <span class="text_34 text_38">尿片</span>
      </div>
      <div class="flex-col items-center group_13">
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321996d32e90012f09dd0/16238397416681565336.png"
          class="image_11"
        />
        <span class="text_34 text_39">我的</span>
      </div>
    </div>
  </div>
</template>
<style src="./index.less" lang="less" scoped></style>
