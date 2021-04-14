<template>
  <div>
    <div class="content">
      <div class="bg-light"></div>
      <div class="rule">
        <p>1. 账户权益：指账户内出借所形成的所有产品权益及可用余额之和。</p>
        <p>
          2.
          账户优先本金：指账户内累计充值金额减去累计提现金额(包括累计兑换商品金额及产品转让过程中的本金折让金额（如有）)，再减去可用余额后的剩余金额，如果剩余金额为负，则账户优先本金为0。
        </p>
        <p>
          3.
          账户权益转让：指存在紧急资金需求的出借用户，可以申请通过转让账户权益方式获得流动资金；有闲置资金的出借用户，可以通过受让账户权益方式获得相应的账户权益以及潜在收益。为避免疑义，账户权益转让是指账户权益整体转让，但并不包括账户余额，下同。
        </p>
      </div>
      <div class="help">
        <p>咨询请进入 我的-联系客服 <br> 9:30-18:30</p>
      </div>
    </div>
    <div class="btns">
      <button>我要买入</button>
      <button @click="readRiskMsg">我要转让</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { RightHeaderInfo } from "../../../util/interface";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "",
  setup() {
    const headInfo = inject("headInfo") as RightHeaderInfo;
    const router = useRouter()

    headInfo.title = "账户权益转让";
    function readRiskMsg(){
      router.push('/equity/risk')
    }
    return { readRiskMsg };
  },
});
</script>

<style scoped lang="less">
.content {
  padding: 10px 20px;
  width: 100%;
  .bg-light {
    background-color: #eee;
    width: 100%;
    height: 80px;
  }
  .rule {
    font-size: 14px;
    p {
      margin-top: 20px;
      line-height: 1.2;
    }
  }
  .help{
    text-align: center;
    position: fixed;
    width: 100%;
    left: 0;
    bottom:80px;
    font-size: 12px;
  }
}
.btns{
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #000;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  button{
    flex: 0 0 40%;
    text-align: center;
    height: 35px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    font-size: 15px;
  }
}
</style>
