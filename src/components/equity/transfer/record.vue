<template>
  <div>record</div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onMounted } from "vue";
import { RightHeaderInfo } from "../../../util/interface";

export default defineComponent({
  name: "record",
  setup() {
    const headInfo = inject("headInfo") as RightHeaderInfo;
    console.log('组件setup函数执行时间'+Date.now())
    onMounted(()=>{
      //  headInfo.title = "转让记录";
    })
   
    return {};
  },
});
</script>

<style scoped lang="less"></style>
