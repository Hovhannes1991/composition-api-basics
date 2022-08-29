import { ref, computed } from "@vue/reactivity";

export function useCounter() {
  const count = ref(0);

  const minus = () => count.value--;
  const plus = () => count.value++;

  const color = computed((_) => {
    return count.value < 0 ? "darkred" : count.value > 0 ? "green" : "orange";
  });

  return { count, plus, minus, color };
}
