<template>
  <div>
    <div class="item-id">{{ itemId }}</div>

    <hr />

    <p class="prop-id">{{ text }}</p>

    <RouterLink :to="{ name: 'home' }">Back</RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

//Props
const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
  text: {
    type: String,
  },
});

const route = useRoute();

const itemId = ref(null);

onMounted(() => {
  itemId.value = route.params.id;
  console.log(route.params.id === props.id);
});
</script>

<style lang="scss" scoped>
.item-id,
.prop-id {
  height: 50px;
  width: 100px;
  text-align: center;
  background-color: green;
  color: white;
  font-size: 1.5em;
  line-height: 50px;
}

.prop-id {
  background-color: brown;
  color: white;
}
</style>
