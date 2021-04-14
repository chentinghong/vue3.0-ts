<template>
  <div>
    <!-- <slot name="title"></slot>
      <slot></slot>
      <slot name="foot" :footerMsg="footerMsg"></slot>
      <div>这是接收的注入的值： {{provideData.value}}</div> -->
    <input type="text" v-model="textOfChild" />
    <!-- <table>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
      </tr>
      <tr>
        <td>{{stu.name}}</td>
        <td>{{stu.age}}</td>
      </tr>
    </table> -->
    <p>{{ count }}</p>
    <van-button type="primary" @click="addCount">增加</van-button>
  </div>
</template>

<script lang="ts" setup>
//setup函数语法糖 tslink检查时会有错误，找不到export defaut输出值
import { ref, reactive, inject, watchEffect, defineProps, useContext } from "vue";
import { count, addCount } from "../util/count"; //引入过来后可以直接使用，组件同理
const title = ref("这是title");
const textOfChild = ref<string>("");
const rightHead: any = inject("headInfo");
const ctx = useContext();
const props = defineProps({
  foo: String,
});
interface Student {
  name: string;
  age?: number;
  [propsName: string]: any;
}
const stu: Student = reactive<Student>({ name: "tom", age: 34 });
//...toRefs(stu)  不支持toRefs参数结构写法了
rightHead.title = "Demo";
watchEffect(() => {
  ctx.emit("update:text", textOfChild.value);
});
const footerMsg = ref<string>("这是footer");
const provideData = inject("provideData");
</script>

<style scoped lang="less">
input {
  margin: 10px;
  padding: 5px;
  width: calc(100% - 20px);
  max-width: 10rem;
}
</style>
