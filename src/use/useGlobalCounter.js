import { ref, reactive } from "vue";
let globalCount = ref(0);

let globalCountObj = reactive({
  number: 0,
  changed: 0,
});

export function useGlobalCounter() {
  //   const plusGlobalCounter = () => globalCount.value++;

  //   const minusGlobalCounter = () => globalCount.value--;

  const plusGlobalCounter = () => globalCountObj.number++;

  const minusGlobalCounter = () => globalCountObj.number--;

  return {
    // globalCount,
    // plusGlobalCounter,
    // minusGlobalCounter,
    globalCountObj,
    plusGlobalCounter,
    minusGlobalCounter,
  };
}
