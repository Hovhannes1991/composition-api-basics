<template>
  <input type="text" value="888" v-green-input:red />
</template>

<script setup>
const vGreenInput = {
  mounted(el, options) {
    const color = options.arg;
    el.style.color = color;
  },
};
</script>

<style lang="scss" scoped></style>
