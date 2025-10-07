<script setup lang="ts">
const devices = useFetch("/api/devices").data;
</script>

<template>
  <UContainer class="mt-4">
    <UTable :data="devices" />
  </UContainer>
</template>
