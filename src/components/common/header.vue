<template>
  <div class="header">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="onClickLeft(backStep)">
      <template #right v-if="rightText">
        <router-link :to="rightLink">{{ rightText }}</router-link>
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { useRouter } from "vue-router";
import router from "../../router/index";

export default defineComponent({
  name: "hearder",
  props: {
    rightText: {
      type: String,
      required: false,
    },
    rightLink: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    backStep:Number
  },
  setup() {
    const router = useRouter();
    function onClickLeft(backStep?: number) :void {
      if (backStep) {
        router.go(backStep);
        return;
      }
      router.back();
    }
    return {
      onClickLeft,
    };
  },
});
</script>

<style scoped lang="less"></style>
