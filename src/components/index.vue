<template>
  <div>
    <div class="link">
      <router-link to="/demo">demo链接</router-link>
      <router-link to="/equity/transfer">equity链接</router-link>
    </div>
  </div>
</template>
 
<script lang='ts' setup="props">
import { ref } from 'vue'

</script>
 
<style scoped lang = "less">
.link{
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    flex: 0 0 45%;
    color: #0aa1ed;
    font-size: 16px;
  }
}
</style>