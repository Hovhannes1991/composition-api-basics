<template>
  <div>
    <div class="page-title">Composables Test</div>
    <div class="composable-count-wrapper">
      <button @click="minus">-</button>
      <div class="composable-count" :style="{'backgroundColor': color}">
        {{ count }}
      </div>
      <button @click="plus">+</button>
    </div>
    <hr />
    <div class="composable-count-wrapper">
      <button @click="minus2">-</button>
      <div class="composable-count" :style="{'backgroundColor': color2}">
        {{ count2 }}
      </div>
      <button @click="plus2">+</button>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from "@/use/useCounter";
const { count, plus, minus, color } = useCounter();
const { count: count2, plus: plus2, minus: minus2, color: color2 } = useCounter();
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
