<template>
  <div class="header">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right v-if="rightText">
        <router-link :to="rightLink">{{rightText}}</router-link>
      </template>
    </van-nav-bar>
  </div>
</template>
 
<script lang='ts'>
import { defineComponent, inject, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "hearder",
  props: {
    rightText:{
      type:String,
      required:false
    },
    rightLink:{
      type:String,
      required:false
    },   
    title:{
      type:String,
      required:false
    }
  },
  setup() {
    const router = useRouter();
    function onClickLeft() {
      router.back()
    }
    return {
      onClickLeft,
    };
  },
});
</script>
 
<style scoped lang = "less">
</style>