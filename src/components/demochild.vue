<template>
  <div>
      <!-- <slot name="title"></slot>
      <slot></slot>
      <slot name="foot" :footerMsg="footerMsg"></slot>
      <div>这是接收的注入的值： {{provideData.value}}</div> -->
      <input type="text" v-model="textOfChild">
  </div>
</template>
 
<script lang='ts'>
import { defineComponent, ref, inject,toRefs,unref, watchEffect, } from "vue";

export default defineComponent({
  name: "demoChild",
  props:['msg','text'],
  setup(props,ctx) {
      console.log(props.msg,unref(toRefs(ctx.attrs).class))
      const title= ref('这是title')
      const textOfChild=ref<string>('')
      watchEffect(()=>{
        ctx.emit('update:text',textOfChild.value)
      })
      const footerMsg = ref<string>('这是footer')
      const provideData=inject('provideData')
    return {title,footerMsg,provideData,textOfChild};
  },
});
</script>
 
<style scoped lang = "less">
input{
  margin-top: 10px;
  padding: 5px;
}
</style>