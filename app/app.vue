<script setup lang="ts">
useHead({
  title: "The Marauder's Map @ DLUT",
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --color-primary: #198cff;
}
</style>
