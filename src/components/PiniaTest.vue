<template>
  <div>
    <div class="page-title">Pinia Test</div>
    <h1>{{ counterStore.count }} is {{ counterStore.oddOrEven }}</h1>
    <h1>{{ counterStore.doubleCount }}</h1>
    <div class="buttons-wrapper">
      <button @click="counterStore.decrement">Minus</button>
      <button @click="counterStore.increment">Plus</button>
      <button @click="counterStore.incrementBy(8)">Plus 8</button>
    </div>
    <h1>{{ counterStore.title }}</h1>
    <input type="text" v-model="counterStore.title" />
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: green;
}

input {
  width: 100%;
  height: 50px;
  background: aliceblue;
  border: none;
  outline: none;
  padding: 0 15px;
  font-size: 1.5em;
  color: brown;
}

.buttons-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  button {
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.5em;
    color: white;
    &:first-child {
      background-color: darkred;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:last-child {
      background-color: rgb(58, 90, 177);
    }
  }
}
</style>
