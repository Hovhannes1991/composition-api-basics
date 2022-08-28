<template>
  <div>
    <div class="page-title">Ref Test</div>
    <EmitChild @test-emit="handleTestEmit"/>
  </div>
</template>

<script setup>
import EmitChild from "./EmitChild.vue";

const handleTestEmit = (value) => {
    console.log(value);
}
</script>

<style lang="scss" scoped>
</style>
