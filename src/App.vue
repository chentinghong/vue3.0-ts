<template>
  <Header :rightText="rightHeader.rightText" :rightLink="rightHeader.rightLink" :title="rightHeader.title">
  </Header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent,provide,reactive } from 'vue'
import Header from './components/common/header.vue'
interface RightHeaderInfo{
  rightText?:string|null,
  rightLink?:string|null,
  title?:string|null,
}
export default defineComponent({
  name: 'App',
  components: {
    Header
  },
  setup(){
    const rightHeader=reactive<RightHeaderInfo>({
      rightText:"",
      title:"首页",
      rightLink:""
    })
    provide<RightHeaderInfo>('rightHeader',rightHeader)
    return {
      rightHeader
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