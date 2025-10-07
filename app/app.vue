<script setup lang="ts">
useHead({
  title: "The Marauder's Map @ DLUT",
});

const { loggedIn } = useUserSession();
const route = useRoute();

watchEffect(() => {
  if (!loggedIn.value && route.path !== "/login") {
    navigateTo("/login");
  }
});
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
