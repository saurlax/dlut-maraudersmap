<script setup lang="ts">
const { loggedIn, clear } = useUserSession();
const items = [
  { label: "Map", to: "/" },
  { label: "Devices", to: "/devices" },
  { label: "Settings", to: "/settings" },
];
</script>

<template>
  <UHeader>
    <template #title>
      <div class="flex items-center gap-2">
        <img src="/favicon.ico" class="w-6" />
        <h1><span class="text-primary">DLUT</span>MAP</h1>
      </div>
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/saurlax/dlut-maraudersmap"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
  <slot />
</template>
