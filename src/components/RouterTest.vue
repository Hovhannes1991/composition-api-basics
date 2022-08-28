<template>
  <div>
    <div>
      <div class="page-title">Router Test</div>
      <ul>
        <li v-for="item in list" @click="selectListItem(item)" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const list = [
  { id: 1, text: "One" },
  { id: 2, text: "Two" },
  { id: 3, text: "Three" },
  { id: 4, text: "Four" },
  { id: 5, text: "Five" },
  { id: 6, text: "Six" },
  { id: 7, text: "Seven" },
  { id: 8, text: "Eight" },
  { id: 9, text: "Nine" },
  { id: 10, text: "Ten" },
];

const selectListItem = ({ id, text }) => {
  router.push({ name: "router_child", params: { id: id, text: text } });
};
</script>

<style lang="scss" scoped>
li {
  height: 25px;
  cursor: pointer;
  background-color: green;
  margin-bottom: 5px;
  color: white;
  text-align: center;
}
</style>
