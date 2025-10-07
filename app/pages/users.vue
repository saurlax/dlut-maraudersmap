<script setup lang="ts">
const users = useFetch("/api/users").data;
</script>

<template>
  <UTable :data="users" />
</template>
