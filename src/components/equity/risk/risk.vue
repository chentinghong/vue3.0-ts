<template>
  <div>
    <div class="content">
      <article>风险提示</article>
      <p>
        1.
        本次账户权益转让价格由您自行决定及设置。账户权益转让将可能导致您损失部分本金及借款项目已经获得的利息，且一旦转让成功且您收到账户权益转让价款后，账户权益即转归受让人所有，您无法就该账户权益再提出任何请求或主张任何权利。
      </p>
      <p>
        2.
        本《有利网账户权益转让协议》（“本协议”）自您以在线方式点击同意（具体以实际显示为准）后立即生效，有效期至对应账户权益转让完毕之日止，在此期间，您不得以任何方式撤回或撤销，因此，在签署本协议之前，请您务必仔细阅读本协议的全部内容（特别是以粗体下划线标）
      </p>
      <button v-if="time>0">请仔细阅读，{{time}}s后可点击确定</button>
      <button v-else @click="router.push('/equity/doTransfer')">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject,ref } from "vue";
import { RightHeaderInfo } from "../../../util/interface";
import { Router, useRouter, } from 'vue-router';

export default defineComponent({
  name: "risk",
  setup() {
    const headInfo = inject("headInfo") as RightHeaderInfo;
    const router:Router=useRouter()
    headInfo.title = "风险提示";
    const time=ref(10);
    let loop=function(){
      if(time.value===0){
        clearInterval(timer)
        return
      }
      time.value--
    };
    let timer = setInterval(loop,1000)
    return {
      time,
      router
    };
  },
});
</script>

<style scoped lang="less">
.content{
  width: 80%;
  margin-left: 10%;
  border: 1px solid #000;
  margin-top: 30px;
  padding: 10px;
  font-size: 13px;
  article{
    margin: 20px auto;
    font-size: 16px;
    text-align: center;
  }
  p+p{
    margin-top: 5px;
  }
  button{
    margin-top: 20px;
    width: 100%;
  }
}
</style>
