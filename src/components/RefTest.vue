<template>
  <div>
    <div class="page-title">Ref Test</div>
    <h1 :class="h1Class">{{ count }}</h1>
    <button @click="minus">Minus</button>
    <button @click="plus">Plus</button>
  </div>
</template>

<script setup>
import { ref, computed } from "@vue/reactivity";
const count = ref(0);

const minus = () => count.value--;
const plus = () => count.value++;

const h1Class = computed(() =>
  count.value > 0 ? "success" : count.value < 0 ? "danger" : "netral"
);
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: orange;
}

h1.success {
  color: green;
}

h1.danger {
  color: darkred;
}
</style>
