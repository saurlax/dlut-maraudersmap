<script setup lang="ts">
const devices = useFetch("/api/devices").data;
</script>

<template>
  <UTable :data="devices" />
</template>
