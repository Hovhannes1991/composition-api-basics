<template>
  <div>
    <div class="page-title">Composables Test Vue-Use</div>
    <div class="composable-count-wrapper">
      <div class="composable-count">
        {{ online }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOnline } from "@vueuse/core";
const online = useOnline();
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
</style>
