<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
</script>

<template>
  <main class="flex flex-col place-items-center font-semibold py-1">
    <NavBarVue />
    <RouterView class="" />
  </main>
</template>

<style></style>
