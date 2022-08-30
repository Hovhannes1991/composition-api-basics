import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    title: "test title",
  }),
  getters: {
    count: (state) => state.counter,
    // doubleCount: (state) => state.counter * 2,
    doubleCount(state) {
      return state.counter * 2;
    },
    oddOrEven: (state) => (state.counter % 2 === 0 ? "even" : "odd"),
  },
  actions: {
    increment() {
      this.counter++;
    },
    incrementBy(num) {
      this.counter += num;
    },
    decrement() {
      this.counter--;
    },
  },
});
