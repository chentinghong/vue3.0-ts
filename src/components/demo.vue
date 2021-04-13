<template>
  <div class="demo">
    <p>插槽测试 #代替v-slot写法</p>
    <demo-child>
        <template #title>
            <div>
                title插槽
            </div>
        </template>
    </demo-child>
    <demo-child>
        <template #default>
            <div>
                默认插槽
            </div>
        </template>
    </demo-child>
    <demo-child>
        <template #foot="msg">
            <div>
                {{msg.footerMsg}}
            </div>
        </template>
    </demo-child>
    <!-- 等效写法
    <demo-child>
        <template v-slot:foot="msg">
            <div>
                {{msg.footerMsg}}
            </div>
        </template>
    </demo-child> -->
    
    <br>
    <p>测试provide</p>
    <demo-child :msg="{msg:'测试传入的参数'}" class="demo" />
    <button @click="changeProvideData">改变组件中的传递值</button>
    <p>父子组件之间v-model的运用</p>
    <p>父组件上的显示值：{{text}}</p>
    <demo-child v-model:text="text" />
    <p style="font-size:1rem">1rem字体</p>
    <p style="font-size:37.5px">37.5px字体</p>
    <p class="t-rem">用class设置37.5px字体</p>
  </div>
</template>
 
<script lang='ts'>
import { defineComponent, provide, ref, reactive,getCurrentInstance, } from "vue";
import demoChild from './demochild.vue'
interface Value{
    value:string|boolean|number
}
export default defineComponent({
  name: "demo",
  components:{
      demoChild
  },
  setup(props,ctx) {
    const globalProperty :any=getCurrentInstance()
    const provideData:Value=reactive<Value>({value:'这是接收值'})
    const text = ref<string>('')
    //将响应式参数传入provide中 完成注入响应式
    provide('provideData',provideData)
    var changeProvideData=function():void{
        provideData.value='传递值发生改变，响应式传入child组件中'
    }
    return {changeProvideData,text};
  },
});
</script>
 
<style scoped lang = "less">
/* 只有在class中写入尺寸单位才有效，在内敛样式中设置无效 */
.t-rem{
    font-size:37.5px;
}
.demo{
    font-size: 0.5rem;
    width: 100%;
}
</style>