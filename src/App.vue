<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <!-- For Testing onActivated/onDeactivated -->
    <!-- <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView> -->
    <RouterView />
  </div>
</template>

<style>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  margin: 50px auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  font-style: italic;
  color: cornflowerblue;
  text-align: center;
}
</style>
