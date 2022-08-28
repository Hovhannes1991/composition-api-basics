<template>
  <div>
    <div>
      <div class="page-title">Watcher Test</div>
      <p>{{ count }}</p>
      <p>{{ obj.count }}</p>
      <div>
        <button @click="count--">Minus</button>
        <button @click="count++">Plus</button>
      </div>
      <div>
        <button @click="obj.count--">Minus</button>
        <button @click="obj.count++">Plus</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
const count = ref(1);
watch(count, (value) => {
  if (value === 3) console.log("ttttttttttttttttttttt");
});

const obj = reactive({
  count: 10,
});
watch(
  (_) => obj.count,
  (value) => {
    if (value === 15) console.log("ffffffffffffffffff");
  }
);
</script>

<style lang="scss" scoped></style>
