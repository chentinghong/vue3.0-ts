<template>
  <Header ref="routeRef" :rightText="headInfo.rightText" :rightLink="headInfo.rightLink" :title="headInfo.title" :backStep="headInfo.backStep">
  </Header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent,provide,reactive,ref,watch,toRefs } from 'vue'
import Header from './components/common/header.vue'
import { useRoute } from 'vue-router';
interface RightHeaderInfo{
  rightText?:string|null,
  rightLink?:string|null,
  title?:string|null,
  backStep?:number|null,
}
export default defineComponent({
  name: 'App',
  components: {
    Header
  },
  setup(){
    const headInfo=reactive<RightHeaderInfo>({
      rightText:"",
      title:"首页",
      rightLink:"",
    })
    const routeRef=ref(null)
    const route=useRoute()
    watch(()=>route.path,()=>{
      console.log(routeRef.value)
    })
    provide<RightHeaderInfo>('headInfo',headInfo)
    return {
      headInfo,
      route,
      routeRef
    }
  }
})
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  width: 100%;
  overflow: hidden;
}
</style>