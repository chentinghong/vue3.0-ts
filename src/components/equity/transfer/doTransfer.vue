<template>
  <div class="content">
    <div class="wait-money">
      <div>
        <p>账户待收本金(元)<span class="help" @click="showDialog">!</span></p>
        <p class="money">150,000.00</p>
      </div>
    </div>
    <div class="transfer-money">
      <div>当前账户优先权益(元)<span class="help" @click="showDialog">!</span></div>
      <p class="money">100,000.00</p>
      <div class="transfer-rule">
        <span>=</span>
        <span>
          <div>累计充值(元)<span class="help" @click="showDialog">!</span></div>
          <p class="money">300,000.00</p>
        </span>
        <span>-</span>
        <span>
          <div>累计体现(元)<span class="help" @click="showDialog">!</span></div>
          <p class="money">150,000.00</p>
        </span>
        <span>-</span>
        <span>
          <div>可用余额(元)</div>
          <p class="money">50,000.00</p>
        </span>
      </div>
      <div class="trading-rule">
        <label
          ><input
            type="radio"
            name="transferRule"
            :value="0"
            v-model="singleCheck"
          /><span>按优先本金转让</span></label
        >
        <label
          ><input
            type="radio"
            name="transferRule"
            :value="1"
            v-model="singleCheck"
          /><span>按代收本金转让</span></label
        >
        <span class="rule">交易规则</span>
      </div>
      <p>整账户转让金额(元)</p>
      <input
        type="text"
        v-model.number="transferCount"
        placeholder="请输入转让金额，最高150,000.00"
      />
      <div class="text-small">
        <p>转让金额最低为xxx元/转让金额最高为xxx元、请输入正确的金额</p>
        <p>手续费：0.00元 实际到账金额：100.00元</p>
        <p class="red">该价格的转让成功率为99.9%</p>
        <p></p>
      </div>
      <div class="foot-intro">
        <div>
          <p>您可以修改转让价格并将以该价格进行整账户转让。</p>
          <p>申请转让后，您的账户的充值，出借等功能将不能使用，具体见交易规则。</p>
          <div>
            <input type="checkbox" name="agreement" v-model="isAgree" />
            同意签署<router-link to="/">《有利网账户权益转让协议》</router-link>
          </div>
        </div>
        <button>同意并整账户转让</button>
      </div>
    </div>
    <div class="intro">
      咨询请进入 我的-联系客服<br />
      9:30-18:30
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, onUnmounted, watch, watchEffect } from "vue";
import { RightHeaderInfo } from "../../../util/interface";
import { Router, useRouter } from "vue-router";
import { Dialog } from "vant";

export default defineComponent({
  name: "doTransfer",
  title: "我要转让",
  setup() {
    const headInfo = inject("headInfo") as RightHeaderInfo;
    const router: Router = useRouter();
    const singleCheck = ref<number>(0);
    const isAgree = ref<boolean>(false);
    const transferCount = ref<number>();
    watch(isAgree, () => {
      console.log(isAgree.value);
    });
    watchEffect(() => {
      console.log(transferCount.value);
    });
    let head = {
      title: "我要转让",
      rightText: "转让记录",
      rightLink: "/equity/record",
      backStep: -2,
    };
    Object.assign(headInfo, head);
    // headInfo.title = "我要转让";
    // headInfo.rightText = "转让记录";
    // headInfo.rightLink = "/equity/record";
    // headInfo.backStep = -2;
    onUnmounted(() => {
      headInfo.title = "";
      headInfo.rightText = "";
      headInfo.rightLink = "";
      headInfo.backStep = null;
    });
    function showDialog() {
      Dialog.alert({
        message: "累计提现金额，包括累计兑换商品金额",
        theme: "round-button",
        confirmButtonColor: "#0aa1ed",
      });
    }
    return { showDialog, singleCheck, isAgree, transferCount };
  },
});
</script>

<style scoped lang="less">
.content {
  font-size: 13px;
}
.money {
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}
.help {
  display: inline-block;
  text-align: center;
  transform: rotate(180deg);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  border: 1px solid #000;
  position: relative;
  left: 3px;
}
.wait-money {
  width: 100%;
  height: 101px;
  border-bottom: 1px solid #000;
  padding-top: 16px;
  div {
    height: 73px;
    width: 337px;
    margin: 0 auto;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 5px;
  }
}
.transfer-money {
  padding: 10px 15px;
}
.transfer-rule {
  width: 100%;
  height: 77px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 0 10px;
  border-radius: 5px;
  .money {
    font-size: 15px;
  }
}
.trading-rule {
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    margin-right: 3px;
    vertical-align: middle;
  }
  span.rule {
    text-decoration: underline;
    color: #0aa1ed;
  }
}
input[type="text"] {
  border: none;
  width: 70%;
  border-bottom: 1px solid #aaa;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 5px;
}
.text-small {
  font-size: 10px;
  p {
    margin: 10px 0;
  }
  .red {
    color: #f00;
  }
}
button {
  margin-top: 15px;
  width: 100%;
}
.intro {
  text-align: center;
  width: 100%;
  height: 50px;
}
.foot-intro {
  width: 100%;
  margin-top: 50px;
  p {
    margin: 10px 0;
    font-size: 10px;
  }
  input {
    vertical-align: middle;
    margin-right: 5px;
  }
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  font-size: 12px;
  font-weight: normal;
}
::-moz-placeholder {
  /* Firefox 19+ */
  font-size: 12px;
  font-weight: normal;
}
:-ms-input-placeholder {
  /* IE 10+ */
  font-size: 12px;
  font-weight: normal;
}
:-moz-placeholder {
  /* Firefox 18- */
  font-size: 12px;
  font-weight: normal;
}
</style>
