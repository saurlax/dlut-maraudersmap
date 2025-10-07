<script setup lang="ts">
const { loggedIn, clear } = useUserSession();
const items = [
  { label: "Map", to: "/" },
  { label: "Devices", to: "/devices" },
  { label: "Users", to: "/users" },
];
</script>

<template>
  <UHeader>
    <template #title>
      <img src="/favicon.ico" class="w-6" />
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
      <UButton
        v-if="loggedIn"
        color="neutral"
        variant="ghost"
        icon="i-lucide-log-out"
        @click="clear"
      />
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
  <slot />
</template>
