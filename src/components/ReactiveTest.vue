<template>
  <div>
    <div>
      <div class="page-title">Reactive Test</div>
      <p class="title">{{ obj.title }}</p>
      <h1 :class="h1ClassObj">{{ obj.count }}</h1>
      <button @click="minusObj">Minus</button>
      <button @click="plusObj">Plus</button>
      <input v-model="obj.title" type="text">
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "@vue/reactivity";
const obj = reactive({
  title: 'Reactive Object',
  count: 100
})

const h1ClassObj = computed(() => obj.count > 100 ? 'success' : obj.count < 100 ? 'danger' : 'netral');
const minusObj = () => obj.count--;
const plusObj = () => obj.count++;
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
