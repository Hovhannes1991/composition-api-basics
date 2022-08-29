<template>
  <div>
    <div class="page-title">Composables Test</div>
    <div class="composable-count-wrapper">
      <button @click="minusGlobalCounter">-</button>
      <div class="composable-count">
        {{ globalCountObj.number }}
      </div>
      <button @click="plusGlobalCounter">+</button>
    </div>
    <hr />
    <div class="composable-count-wrapper">
      <button @click="minusGlobalCounter2">-</button>
      <div class="composable-count">
        {{ globalCountObj2.number }}
      </div>
      <button @click="plusGlobalCounter2">+</button>
    </div>
  </div>
</template>

<script setup>
import { useGlobalCounter } from "@/use/useGlobalCounter";
const { globalCountObj, plusGlobalCounter, minusGlobalCounter } =
  useGlobalCounter();
const {
  globalCountObj: globalCountObj2,
  plusGlobalCounter: plusGlobalCounter2,
  minusGlobalCounter: minusGlobalCounter2,
} = useGlobalCounter();
</script>

<style lang="scss" scoped>
@mixin flex-centre {
  display: flex;
  align-items: center;
  justify-content: center;
}
.composable-count-wrapper {
  @include flex-centre;
  gap: 5px;
  .composable-count {
    @include flex-centre;
    width: 100px;
    height: 50px;
    background-color: green;
    color: white;
    font-size: 2em;
  }

  button {
    @include flex-centre;
    width: 80px;
    height: 50px;
    font-size: 2em;
    color: blue;
  }
}

.composable-count-wrapper:nth-last-of-type(1) {
  .composable-count {
    background-color: pink;
  }
  button {
    background-color: aqua;
    color: white;
  }
}
</style>
