<template>
  <!-- <div @click="$emit('testEmit', 8)">Child Element</div> -->
  <div class="test-emit-child" @click="test">Child Element</div>
</template>

<script setup>
const emits = defineEmits(["testEmit"]);

const test = () => {
  emits("testEmit", 25000);
};
</script>

<style lang="scss" scoped>
.test-emit-child {
  display: grid;
  justify-content: center;
  align-content: center;
  color: white;
  font-size: 1.5em;
  padding: 5px 15px;
  background-color: yellowgreen;
  height: 50px;
  min-width: 100px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
