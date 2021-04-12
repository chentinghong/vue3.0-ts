<template>
  <div>
      <slot name="title"></slot>
      <slot></slot>
      <slot name="foot" :footerMsg="footerMsg"></slot>
      <div>这是接收的注入的值： {{provideData.value}}</div>
  </div>
</template>
 
<script lang='ts'>
import { defineComponent, ref, inject,toRefs,unref } from "vue";

export default defineComponent({
  name: "demoChild",
  props:['msg'],
  setup(props,ctx) {
      console.log(props.msg,unref(toRefs(ctx.attrs).class))
      const title= ref('这是title')
      const footerMsg= ref('这是footer')
      const provideData=inject('provideData')
    return {title,footerMsg,provideData};
  },
});
</script>
 
<style scoped lang = "less">
</style>