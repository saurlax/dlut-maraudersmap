<script setup lang="ts">
useHead({
  title: "The Marauder's Map @ DLUT",
});

const toast = useToast();
</script>

<template>
  <UApp :toaster="{ position: 'top-center' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --color-primary: #198cff;
}
</style>
