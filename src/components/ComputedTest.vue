<template>
  <div>
    <div>
      <div class="page-title">Computed Test</div>
      <ul>
        <li v-for="item in filtredList" :key="item">
          {{ item }}
        </li>
      </ul>
      <select name="filter" id="filter" v-model="filter">
        <option value="even">Even</option>
        <option value="odd">Odd</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "@vue/reactivity";
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = ref("odd");

const filtredList = computed((_) => {
  if (filter.value === "even") {
    return list.filter((item) => item % 2 === 0);
  }
  return list.filter((item) => item % 2 === 1);
});
</script>

<style lang="scss" scoped></style>
