import { ref } from 'vue';

const count=ref<number>(0)
function addCount(){
  count.value++
}
export {count,addCount}