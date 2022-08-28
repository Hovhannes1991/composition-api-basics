<template>
  <div>
    <div>
      <div class="page-title">Life Cicle Hooks Test</div>
      <p>{{ count }}</p>
      <div>
        <button @click="count--">Minus</button>
        <button @click="count++">Plus</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
const count = ref(1);

onBeforeMount(_ => console.log("onBeforeMount"));

onMounted(_ => console.log("onMounted"));

onBeforeUnmount(_ => console.log("onBeforeUnmount"));

onUnmounted(_ => console.log("onUnmounted"));

onActivated(_ => console.log("onActivated"));

onDeactivated(_ => console.log("onDeactivated"));

onBeforeUpdate(_ => console.log("onBeforeUpdate"));

onUpdated(_ => console.log("onUpdated"));
</script>

<style lang="scss" scoped></style>
